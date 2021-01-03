<template>
  <div id="app">
    <buttonx msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import {buttonx} from '../packages/index'

export default {
  name: 'App',
  components: {
    buttonx
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
  margin-top: 60px;
}
</style>
