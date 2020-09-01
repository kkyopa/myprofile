<template>
      <div class="previe">
        <img src="../assets/img/previe.png">
      </div>
</template>

<script></script>

<style>

.previe {
  background-color:#EEEEEE;
  background-image: url("../assets/img/bgimage.jpg");
  font-family: "Brandon Grotesque W01", "Century Gothic", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", Meiryo, メイリオ, sans-serif;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  padding-top: 340px;
  padding-bottom: 330px;
  background-size:75%;
  background-repeat : no-repeat;

}

.previe img {
  width:150px;
  heigth:190px;
}

@media screen and (max-width:767px) {
    .previe {
      background-image: url("../assets/img/bgimage.jpg");
      font-family: "Brandon Grotesque W01", "Century Gothic", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", Meiryo, メイリオ, sans-serif;
      background-size: cover;
      background-position: center center;
      background-attachment: fixed;
      background-size:90%;
      background-repeat : no-repeat;

    }

    .previe img {
      width:90px;
      heigth:114px;
    }
}


</style>
