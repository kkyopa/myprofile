<template>
  <div id="app">
    <PageTop/>
    <Explanation/>
    <Profile/>
    <Work/>
    <Skill/>
    <Contact/>
  </div>
</template>

<script>
import PageTop from './view/PageTop.vue'
import Explanation from './view/Explanation.vue'
import Profile from './view/Profile.vue'
import Work from './view/Work.vue'
import Skill from './view/Skill.vue'
import Contact from './view/Contact.vue'

export default {
  name: 'App',
  components: {
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
</style>
