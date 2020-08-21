<template>
  <div class="profile">
    <h1>Introduction</h1>
    <p>
      1992年宮城県生まれ。専修大学法学部法律学科卒
    </p>
    <p>
      住宅営業と消防士を経験後27歳でWebエンジニアに転職
    </p>
    <p>
      LAMP環境によるアプリケーション開発や教育系のHP制作などの案件に参画
    </p>
    <p>
      趣味はダーツと散歩で、2019年にダーツのプロライセンス取得
    </p>
    <p>
      LaravelとVue.jsに興味あり
    </p><br>

          <div class="container">
      <div class="icon">
        <img src="../img/suit.png" width="120" height="120" alt="太郎のアイコンです">
      </div>
      <div class="info">
        <h3>Kyousuke Kawada</h3>
        <ul>
          <li>
            <a href="https://github.com/kkyopa" target="_blank">
              <img src="../img/github.png" width="20" height="20" alt="github">
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/ka.wa.da.kyosuke" target="_blank">
              <img src="../img/facebook.png" width="20" height="20" alt="facebook">
            </a>
          </li>
          <li>
            <a href="https://twitter.com/kazumons" target="_blank">
              <img src="../img/twitter.png" width="20" height="20" alt="facebook">
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
  min-height: 600px;
  margin: 0;
  background-color:white;

}

.profile > h1 {
  margin: 0;
  line-height: 200px;
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

</style>
