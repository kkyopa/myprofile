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
        <span class="centering_item">KYOSUKE KAWADA</span><br><br>
      <TextAnime3 :autoplay="autoplay"/>
      </h1>
      <a href="#section1" v-smooth-scroll="{ duration: 3000, offset: 0 }"><span class="material-icons scroll_top">
        expand_more
      </span>
      </a>
    </div>
 </template>

<script>

  import TextAnime3 from './TextAnime3'
  export default {
    components: {
      TextAnime3
    },
    data() {
      return {
        autoplay: true,
      }
    }
  }
</script>

<style>

html, body, #particles {
    height: 100vh;
}

#particles {
  position: relative;
  background-size: cover;
  margin:0 auto;
}

 .material-icons.scroll_top {
  color :white;
  font-size:100px;
 }

@media screen and (min-width:951px){
    #particles h1 {
        font-size: 100px;
        text-align: center;
        color: #fff;
        position: absolute;
        z-index: 10;
        width: 100%;
        font-weight: lighter;
        top:0;
    }
}

@media screen and (max-width:950px){
    #particles h1 {
        font-size: 5rem;
        text-align: center;
        color: #fff;
        position: absolute;
        z-index: 10;
        width: 100%;
        font-weight: lighter;
        top:0;
    }
}


@media screen and (max-width:767px) {
    #particles h1 {
        font-size: 2.6rem;
        text-align: center;
        color: #fff;
        position: absolute;
        z-index: 10;
        width: 100%;
        font-weight: lighter;
        top:0;
    }

    .material-icons.scroll_top {
      color :white;
      font-size:50px;
    }
}

</style>
