<template>
    <div id="particles">
      <vue-particles
        color="#8EF1FF"
        :particleOpacity="0.7"
        :particlesNumber="120"
        shapeType="circle"
        :particleSize="4"
        linesColor="#8EF1FF"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.7"
        :linesDistance="150"
        :moveSpeed="8"
        :hoverEffect="true"
        hoverMode="repulse"
        :clickEffect="true"
        clickMode="bubble"
      >
      </vue-particles>

      <h1 class="icon-MD_thin_semi">
        <span class="centering_item">KYOSUKE KAWADA</span>
      </h1>
      <span class="material-icons scroll_top">
        expand_more
      </span>
    </div>
 </template>

<script></script>

<style>

html, body, #particles {
    height: 100%;
}

#particles {
  position: relative;
  background-size: cover;
  margin:0 auto;
}

#particles h1 {
    font-size: 120px;
    text-align: center;
    color: #fff;
    position: absolute;
    z-index: 10;
    width: 100%;
    font-weight: lighter;
    top:0;
}

.centering_item {

 }

 .material-icons.scroll_top {
  color :white;
  font-size:100px;
 }


</style>
