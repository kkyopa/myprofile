<template>
<header>
      <div class="previe">
        <img src="../img/previe.png" width="150" height="190">
      </div>
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
    </header>
</template>

<script></script>

<style>

header {
background-color:#EEEEEE;
  background-image: url("../img/sibuya3.jpg");
  font-family: "Brandon Grotesque W01", "Century Gothic", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", Meiryo, メイリオ, sans-serif;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  padding-top: 340px;
  padding-bottom: 330px;
  background-size:75%;
  background-repeat : no-repeat;
}

.darts {
  margin-top:-200px;
  width: 100px;
  height: 380px;
}

.previe {
  margin-top:-238px;
  margin-left:905px;
  width: 50px;
  height: 300px;
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
  margin-left:110px;
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
