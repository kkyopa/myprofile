<template>
  <div class="work">
    <h1>Portfolio</h1>
    <h3>過去の制作事例の一部を紹介します。</h3>
      <div class="portfolio" v-for='(item, index) in items' :key="index">
        <div class="sample_box">
          <img  @click="openModal(item)" :src="item.img_src" alt="Card image" width="300" height="200">
        </div>
        <modal :val="postItem" v-show="showContent" @close="closeModal" />
      </div>
  </div>
</template>

<script>
  import Modal from './Modal.vue'
  export default {
    components: {
      Modal
    },
    data () {
      return {
        showContent: false,
        postItem: "",
        items: [
          { id: 1,
            desc: 'プログラミングスクールに通い初めてのWeb制作をRubyonRailsで作成しました。アプリ名は一日一善一運です。運を可視化するアプリで、いいことをつぶやくと運ポイントが加算されます。オリジナルアプリを通してCRUD、画像アップロード、フォロー機能、herokuデプロイなどを学びました。今後は実務レベルでこれらの技術を活用することを考えています。',
            range: '要件定義、実装、運用（レスポンシブ対応）',
            lang: 'HTML,CSS,JavaScript,RubyOnRails,PostgreSQL,Heroku',
            url:'https://radiant-refuge-40609.herokuapp.com',
            img_src: require('../assets/img/itiun.png'),
          },
          {
            id: 2,
            desc: '趣味であるダーツのWebアプリをLaravelで作成！！ダーツの01ゲームの攻略サイトで、戦略をメモとしてウェブ上に保存、閲覧できるアプリです。ウェブ上に保存したものからユーザーがもっとも多く回答したものを抽出しランキング化した表も記載しております。',
            range: '要件定義、実装、運用（レスポンシブ対応）',
            lang: 'HTML,CSS,Laravel,MySQL,さくらサーバー',
            url:'https://darts-arrange.com',
            img_src: require('../assets/img/arrange.png'),
          },
                    {
            id: 3,
            desc: '当サイトになります。',
            range: '要件定義、実装、運用（レスポンシブ対応）',
            lang: 'HTML,CSS,Vue.js',
            url:'未定',
            img_src: require('../assets/img/po.png'),
          },
        ]
      }
    },
    methods: {
       openModal(item) {
        this.showContent = true
        this.postItem = item
      },
      closeModal () {
        this.showContent = false
      }
    }
  }
</script>

<style>
.work {
  min-height: 300px;
  margin: 0;
  background-color: #eeeeee;
  overflow: hidden;
}

.work > h1 {
  margin: 0;
  line-height: 100px;
  font-size: 52px;
  font-family: "Brandon Grotesque W01", "Century Gothic",
    "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", Meiryo, メイリオ,
    sans-serif;
}

.work > h3 {
  margin-bottom:100px;
}

.portfolio {
 float: left;
 margin-bottom:400px;
}

.sample_box{
 width:470px;
 margin:0 auto;

}
.sample_box img{
 transition:1s all;
}

.sample_box img:hover{
  box-shadow: 10px 10px 10px rgba(0,0,0,0.5);
  transform: translateY(-10px);
  transition-duration: 0.5s;
}


</style>