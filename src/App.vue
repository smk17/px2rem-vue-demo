<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br>
    <router-link to="/">Go to Home</router-link> | 
    <router-link to="/HelloVue">Go to HelloVue</router-link> | 
    <router-link to="/HelloWorld">Go to HelloWorld</router-link>
    <router-view class="page"></router-view>
  </div>
</template>

<script src="./App.js"></script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
