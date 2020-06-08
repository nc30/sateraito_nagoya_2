<template>
  <div class="container">
    <form v-on:submit.prevent="sendAction" id="form" >
      <div class="_wr title">
        Send Message
      </div>
      <div class="_wr pad">
        <label for="name_input" class="lbl">Name</label>
        <input type="text" class="ipt" id="name_input" required v-model="name">
      </div>
      <div class="_wr pad">
        <label for="email_input" class="lbl">Email</label>
        <input type="email" class="ipt" id="email_input" v-model="email" >
      </div>
      <div class="_wr pad">
        <label for="body_input" class="lbl">Message</label>
        <textarea v-model="body" class="ipt" id="body_input" rows="5" required />
      </div>
      <div class="_wr _radio pad">
        <span class="lbl">Is Cute Naganami Sama?</span>
        <label>
          <Selector :value="cute" />
          <input type="radio" name="naganamisama_kawaii" v-model="is_cute" value="yes" />
          Yes
        </label>
        <label>
          <Selector :value="!cute" />
          <input type="radio" name="naganamisama_kawaii" v-model="is_cute" value="no" />
          No
        </label>
      </div>

      <div class="_wr">
        <div id="captcha"/>
      </div>

      <div class="_wr">
        <button class="_btn _sbmt pad"><span v-if="!loading">Submit</span><pulse-loader :loading="loading" :size="size" /></button>
        <input type="reset" class="_btn" value="Clear" />
      </div>

    </form>
  </div>
</template>

<style lang="scss">
#form {
  background-color: #fba740;
  padding: 1em;
  ._btn {
    border: none;
    font-weight: bold;
    text-align: center;
    font-size: 1.5em;
    padding: .5em 0;
    cursor: pointer;
    background: none;

    background-color: #333;
    color: #fba740;
    width: 100%;
    display: block;
    &:hover {
      color: #333;
      background-color: #fba740;
    }
  }
  ._radio {
    label {
      color: #111;
      font-size: 1.2em;
      font-weight: bold;
      cursor: pointer;
      margin-left: 1em;
      margin-right: 2em;
    }
    input {
      width: 1em;
      display: none;
    }
  }
  ._wr {
    border-left: solid #333 1px;
    border-right: solid #333 1px;
    border-bottom: solid #333 1px;
    background-color: #fba740;
    &.pad {
      padding-left: .5em;
      padding-right: .5em;
    }
    &.title {
      border-top: solid #333 1px;
      margin: 0;
      background-color: #333;
      font-size: 1.7em;
      color: #fba740;
      padding-left: 1em;
      padding-bottom: .3em;
    }
    .lbl {
      padding-top: .1em;
      padding-bottom: .1em;
      color: #111;
      display: block;
      background-color: none;
      font-weight: bold;
      font-size: 1em;
      width: 100%;
    }
    .ipt {
      display: block;
      width: 100%;
      background-color: #fba740;
      border: none;
      padding-left: 1em;
      font-size: 1.5em;
      color: #111;
      &:focus {
        border: none;
        outline: 0;
      }
    }
    textarea{
      color: #111;
      min-height: 10em;
      padding-left: .5em;
      font-size: 1.5em;
    }
  }
}
.grecaptcha-badge {
  display: none !important;
}
</style>

<script>
import Selector from '~/components/common/Selector'
export default {
  components: {
    Selector
  },
  head () {
    return {
      script: [
        { src: 'https://www.google.com/recaptcha/api.js?render=' + process.env.RECAPTCHA_KEY },
      ]
    }
  },
  data() {
    return {
      loading: false,
      size: ".7em",
      name: '',
      email: '',
      body: '',
      is_cute: false,
      token: ''
    }
  },
  computed: {
    cute: function(){
      return this.is_cute == 'yes'
    }
  },
  methods: {
    async sendAction(ev) {
      this.loading = true
      this.$toast.show('Sending...')

      this.token = await grecaptcha.execute(
        process.env.RECAPTCHA_KEY,
        {
          action: 'submit'
        }
      )

      if(!this.token){
        this.$toast.error('Please Prove that you are not a robot!')
        return;
      }

      try{
        let r = await this.$axios.post('nagoya/v1/form',{
          name: this.name,
          email: this.email,
          body: this.body,
          token: this.token,
          naganamisama_kawaii: this.cute
        })
        if(r.status != 200){
          throw 'error!'
        }

        this.$gtag('event', 'submit_message', {
          'event_category': 'message',
          'event_label': 'email',
          'value': 1
        });

        this.name = ''
        this.email = ''
        this.body = ''

        this.$toast.success('Success!')
      }catch(e){
        this.$toast.error('Oops!')
      }
      this.loading = false
    }
  }
}
</script>
