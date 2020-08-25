<template>
  <div class="work">
    <h1>Portfolio</h1>
    <div class="portfolio">
        <div class="sample_box"><img src="../assets/img/itiun.png" alt="" width="300" height="200"></div>
        <h3>一日一膳一運</h3>
        <p>運を可視化するアプリ</p>
    </div>
    <div class="portfolio">
        <div class="sample_box"><img src="../assets/img/arrange.png" alt="" width="300" height="200"></div>
        <h3>DartsArrange</h3>
        <p>ダーツの01ゲームによる攻略アプリ</p>
    </div>
        <div class="portfolio">
        <div class="sample_box"><img src="../assets/img/po.png" alt="" width="300" height="200"></div>
        <h3>ポートフォリオサイト</h3>
        <p>自身のWebサイトです</p>
    </div>
  </div>
</template>

<script></script>

<style>
.work {
  min-height: 300px;
  margin: 0;
  background-color: #eeeeee;
  overflow: hidden;
}

.work > h1 {
  margin: 0;
  line-height: 200px;
  font-size: 52px;
  font-family: "Brandon Grotesque W01", "Century Gothic",
    "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", Meiryo, メイリオ,
    sans-serif;
}

.portfolio {
 float: left;
 height:650px;
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
