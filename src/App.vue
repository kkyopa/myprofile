<template>
  <div id="app">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <Particles/>
    <PageTop/>
    <Explanation/>
    <Profile/>
    <Work/>
    <Skill/>
    <Contact/>
  </div>
</template>

<script>
import Particles from './view/Particles.vue'
import PageTop from './view/PageTop.vue'
import Explanation from './view/Explanation.vue'
import Profile from './view/Profile.vue'
import Work from './view/Work.vue'
import Skill from './view/Skill.vue'
import Contact from './view/Contact.vue'

export default {
  name: 'App',
  components: {
    Particles,
    PageTop,
    Explanation,
    Profile,
    Work,
    Skill,
    Contact
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;  /* 推奨サイズ */
  display: inline-block;
  width: 1em;
  height: 1em;
  line-height: 1;
  text-transform: none;
 
  /* WebKitブラウザサポート */
  -webkit-font-smoothing: antialiased;
  /* Chrome、Safariサポート */
  text-rendering: optimizeLegibility;
 
  /* Firefoxサポート */
  -moz-osx-font-smoothing: grayscale;
 
  /* IEサポート */
  font-feature-settings: 'liga';
}

</style>
