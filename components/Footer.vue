<template>
  <footer id="footer">
    <p class="built">{{ word() }}</p>
    <div class="listInline respects">
      <ul>
        <li><a href="https://www.archlinux.jp/"><i class="icon-archlinux"></i></a></li>
        <li><a href="https://www.debian.or.jp/"><i class="icon-debian"></i></a></li>
        <li><a href="https://www.python.org/"><i class="icon-python"></i></a></li>
        <li><a href="https://nginx.org/"><i class="icon-nginx"></i></a></li>
        <li><a href="https://golang.org/"><i class="icon-go"></i></a></li>
        <li><a href="http://zsh.sourceforge.net/"><i class="icon-shell"></i></a></li>
      </ul>
    </div>
    <span>(c) 2019 SateraitoNagoya</span>
  </footer>
</template>

<script>
export default{
    data() {
        return {
            'soichiro': [
                '伸びる時には必ず抵抗がある',
                '創意工夫、独立独歩。これらを貫くには日々のたゆまぬ努力がいる',
                '新しいことをやれば、必ずしくじる。腹が立つ。',
                '成功とは、99の失敗を土台にした1%だ',
                '失敗を恐れて何もしないなんて人間は最低だ',
                '追い詰められた人間の、苦し紛れの知恵こそが本当の力だ',
                '挑戦しての失敗を恐れるな。何もしないことを恐れろ',
                '挑戦をやめない限り、必ず次がある',
                '狂人だけが常に覚醒している',
                '努力している人を笑うこと。 それは、何よりも最低な行為である',
                '一番大切なことは、自分たちは何をしてきたかということ。金なんてものはいつかなくなる',
                '松明は自分の手で持て',
                'やってもいないのに、本当に知っているのか？'
            ]
        }
    },
    methods: {
        word() {
            return this.soichiro[Math.floor(Math.random() * this.soichiro.length)]
        }
    }
}
</script>

<style lang="scss">
#footer {
  background-color: #00053d;
  width: 100%;
  position: absolute;
  bottom: 0;
  color: #eee;
  text-align: center;
  padding-bottom: .5em;
  padding-top: .8em;
  .built {
    font-size: 0.8em;
  }
  &>span {
    padding: 1em 0;
  }
  .respects {
    padding-top: .5em;
    li {
      display: inline;
      padding-left: 0.8em;
      a {
        font-size: 1.9em;
        color: #eee;
        // color: #171a2b;
      }
    }
  }
}
</style>