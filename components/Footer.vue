<template>
  <footer id="footer">
    <p class="built">{{ word() }}</p>
    <div class="listInline respects">
      <ul>
        <li><a href="https://github.com/nc30/sateraito_nagoya_2"><github /></a></li>
        <li><a href="https://www.archlinux.jp/"><ArchLinux/></a></li>
        <li><a href="https://www.debian.or.jp/"><Debian/></a></li>
        <li><a href="https://www.python.org/"><Python/></a></li>
        <li><a href="https://nginx.org/"><Nginx/></a></li>
        <li><a href="http://zsh.sourceforge.net/"><Shell/></a></li>
      </ul>
    </div>
    <span>(c) 2020 SateraitoNagoya</span>
  </footer>
</template>

<script>
import github from '~/components/icon/github'
import ArchLinux from '@font-mfizz/archlinux.svg'
import Nginx from '@font-mfizz/nginx.svg'
import Shell from '@font-mfizz/shell.svg'
import Debian from '@font-mfizz/debian.svg'
import Python from '@font-mfizz/python.svg'

export default{
  components: {
    github,
    ArchLinux,
    Nginx,
    Shell,
    Debian,
    Python
  },
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
  color: #eee;
  text-align: center;
  .built {
    margin: .5em auto;
    font-size: 0.8em;
  }
  &>span {
    display: block;
  }

  .respects {
    margin: .2em auto;
    padding-top: .5em;
    ul {
      padding: 0;
    }
    li {
      display: inline;
      padding-left: 0.8em;
      svg {
        width: 1em;
        height: 1em;
      }
      path {
        fill: #eee;
      }
      a {
        font-size: 1.9em;
        color: #eee;
      }
    }
  }
}
</style>