<template>
  <div id="overlay">
    <div id="content">
      <img :src="val.img_src">
      <p>説明：{{ val.desc }}</p>
      <p>作業範囲：{{ val.range }}</p>
      <p>使用技術：{{ val.lang }}</p>
      <p>URL：<a :href="val.url" target='_blank'>{{ val.url }}</a></p>
      <button @click="$emit('close')">閉じる</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Modal',
    props: ['val']
  }
</script>

<style>
  #overlay{
  z-index:1;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

#content{
  z-index:2;
  width:50%;
  padding-top: 5em;
  padding-bottom: 5em;
  text-align: center;
}

#content > img {
  width: 95%;
}

#content p {
  color:white;
}

#content a{
  color:#66CCFF;
  transition: color 0.5s;
  text-decoration: none;
}

#content a:hover{
  color :#ff4081;
}

</style>