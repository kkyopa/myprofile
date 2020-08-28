<template>
  <div id="section1" class="profile">
    <h1>Introduction</h1>
    <p>
      1992年2月宮城県生まれ。水瓶座のO型 専修大学法学部法律学科卒業🎓
    </p>
    <p>
    高校の部活動ではカヌー競技に奮闘 新潟国体9位! (宮城県スポーツ功績賞受賞)
    </p>
    <p>
      新卒で住宅営業と消防士を経験後27歳でWebエンジニアに転職 💻 LAMP環境による自社開発や教育系のHP制作などの案件に参画
    </p>
    <p>
      趣味はダーツと散歩と古着（2019年にダーツのプロライセンス取得）好きな食べ物はラーメン全般と癖の強い食べ物です🤤
    </p>
    <p>
      プログラミングは始めたきっかけは、友人がプログラミングを仕事にしていて、面白そうと思ったからです。
    </p>
    <p>
      世の中にまだないサービスやアイディアを考えるのが好きで、形にしたいと思い現在技術を学んでいます。
    </p>
    <p>
      最近はLaravelとVue.jsに興味があります!
    </p>
    <p>
      エンジニアとしての技術や問題解決力などまだまだ至らない点などございますが日々精進して参りますのでよろしくお願いします。
    </p><br>

    <div class="container">
      <div class="icon">
        <img src="../assets/img/suit.png" width="120" height="120" alt="川田のアイコン">
      </div>
      <div class="info">
        <h3>Kyousuke Kawada</h3>
        <ul>
          <li class="github_icon">
            <a href="https://github.com/kkyopa" target="_blank">
              <img src="../assets/img/github.png" alt="github">
            </a>
          </li>
          <li class="facebook_icon">
            <a href="https://www.facebook.com/ka.wa.da.kyosuke" target="_blank">
              <img src="../assets/img/facebook.png" alt="facebook">
            </a>
          </li>
          <li class="twitter_icon">
            <a href="https://twitter.com/kazumons" target="_blank">
              <img src="../assets/img/twitter.png" alt="facebook">
            </a>
          </li>
        </ul>
      </div>
    </div>


  </div>
</template>

<script></script>

<style>
.profile {
  min-height: 830px;
  margin: 0;
  background-color:white;

}

.profile > h1 {
  margin: 0;
  line-height: 250px;
  font-size:52px;
  font-family: "Brandon Grotesque W01", "Century Gothic", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", Meiryo, メイリオ, sans-serif;
}


.profile p {
  color: black;
}


.container {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
}

.icon img {
  border-radius: 50%;
  border-width: 4px;
  border-style: solid;
  border-color:#228B22;
  margin-left:560px;
}

.info {
  margin-left:1px;
}

.info h3 {
  font-family: "Brandon Grotesque W01", "Century Gothic", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", Meiryo, メイリオ, sans-serif;
  margin: 0;
  color:white;
  padding-left:17px;
}

.info p {
  margin: 0;
  margin-bottom: 16px;
}

.info ul {
  list-style-type: none;
  display: flex;
  padding-left: 50px;
}

.info ul li {
  margin-right: 26px;
}

.info img {
  width: 40px;
  height: auto;
  -webkit-transition: .3s ease-in-out;
  transition: .3s ease-in-out;
  cursor: pointer;
 }

 .github_icon :hover img{
  opacity: 0.6;
  transition-duration: 0.3s;
  width: 50px;
}

 .facebook_icon :hover img{
  opacity: 0.6;
  transition-duration: 0.3s;
  width: 50px;
}

 .twitter_icon :hover img{
  opacity: 0.6;
  transition-duration: 0.3s;
  width: 50px;
}

</style>
