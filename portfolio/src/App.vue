<template>
  <div id="app">
    <Header style="margin-bottom: 50px" />
    <router-view />
  </div>
</template>

<script>
  import Header from "@/components/Header.vue";
  export default {
    components: {
      Header
    }
  };
</script>

<style>
  html {
    background-image: url("assets/img/bg.jpg");
  }
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    min-height: 100vh;
  }
</style>
