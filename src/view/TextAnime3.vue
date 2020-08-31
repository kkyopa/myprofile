<template>
  <div class="TextAnime1">
    <transition-group tag="div" class="title">
      <span v-for="el in text" :key="el.id" class="item" v-text="el.text"/>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    autoplay: Boolean
  },
  data() {
    return {
      timer: null,
      index: 0,
      // オリジナルメッセージ
      original: [
        '初めまして!!このサイトでは川田京助の自己紹介やポートフォリオサイトになります。',
        'これまでに手がけた制作物、身につけたスキルをまとめています。',
        '少しでもご興味がございましたら、ご連絡よろしくお願いいたします。'
      ],
      // 分解したメッセージ
      messages: [],
      text: ''
    }
  },
  computed: {
    editor: {
      get() { return this.text.map(e => e.text).join('') },
      set(text) { this.text = this.convText(text) }
    }
  },
  watch: {
    autoplay(val) {
      clearTimeout(this.timer)
      if (val) {
        this.ticker()
      }
    }
  },
  methods: {
    // デモ用のオートタイマー
    ticker() {
      this.timer = setTimeout(() => {
        if (this.autoplay) {
          this.index = this.index < this.messages.length-1 ? this.index + 1 : 0
          this.text = this.messages[this.index]
          this.ticker()
        }
      }, 4500)
    },
    // テキストを分解してオブジェクトに
    convText(text) {
      const alms = {}
      const result = text.split('').map(el => {
        alms[el] = alms[el] ? ++alms[el] : 1
        return { id: `${el}_${alms[el]}`, text: el }
      })
      return Object.freeze(result) // 監視しない
    }
  },
  created() {
    this.messages = this.original.map(el => this.convText(el))
    this.text = this.messages[0]
    this.ticker()
  }
}
</script>

<style scoped>
.title {
  font-size: 2rem;
}
.item {
  display: inline-block;
  min-width: 0.3em;
}
/* トランジション用スタイル */
.v-enter-active,
.v-leave-active,
.v-move {
  transition: all 1s;
}
.v-leave-active {
  position: absolute;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

@media screen and (max-width:767px) {
  .title {
      font-size: 1rem;
  }
}

</style>