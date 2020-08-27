<template>
<div class="profile">
  <a href="#" @click="clickSmoothScroll()">飛ばし先</a>
  <div id="hoge">飛び先</div>
</div>
</template>



<script>
export default {
  methods: {
    clickSmoothScroll () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#hoge'),
        400,
        null,
        null,
        'y'
      )
    }
  }
}

</script>




<style>


</style>