<template>
  <div id="app">
    <Header/>
    <ul>
      <li v-for="project in projects" :key="project.project.name">
        <WideProject v-if="project.wide" :Project="project.project" style="width: 80vw"/>
        <SmallProject v-else :Project="project.project"/>
      </li>
    </ul>
    <!-- <router-view/> -->
  </div>
</template>

<script>
  import Header from '@/components/Header.vue';
  import WideProject from '@/components/WideProject.vue';
  import SmallProject from '@/components/SmallProject.vue';
export default {
  components:{
    Header, WideProject, SmallProject
  },
  data(){
    return {
      projects: [
        {
          project:  {
            name: "WhatToDoWithYou",
            img: "whattodowithyou.jpg",
            link: "https://yoranfory.itch.io/whattodowithyou",
            info: "In this group project, I was resposible for player movement, game mechanics, camera movement, technical aspects of animation, hazards, UI and player feedback<br/><br/>The project was made in 12 weeks in a group consisting of 2 programmers and 3 artists.",
            groupProject: true
          },
          wide: true
        },
        {
          project:{
            name:"Portal 2 Turret",
            img: "PortalTurret.png",
            link: "https://skfb.ly/o6wOr",
            info: "This 3D model was made for a module called: 3D 4 Games.",
            includePortalProj: true
          }
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

ul{
  display: flex;
  flex-wrap: wrap;
}

li{
  list-style-type: none;
  /* margin: 1px; */
}
</style>
