<template>
  <div id="app">
    <Header/>
    <ul>
      <li v-for="project in projects" :key="project.id">
        <Project :Project="project"/>
      </li>
    </ul>
    <!-- <router-view/> -->
  </div>
</template>

<script>
  import Header from '@/components/Header.vue';
  import Project from '@/components/Project.vue';
export default {
  components:{
    Header, Project
  },
  data(){
    return {
      projects: [
        {
          id: 0,
          name: "WhatToDoWithYou",
          img: "whattodowithyou.jpg",
          link: "https://yoranfory.itch.io/whattodowithyou",
          info: "",
          groupProject: true
        }
      ]
    };
  }
}
</script>

<style>
html{
  background-image: url('assets/img/bg.jpg');

}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

li{
  list-style-type: none;
  /* margin: 1px; */
}
</style>
