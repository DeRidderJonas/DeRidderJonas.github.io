<template>
  <div id="app">
    <Header style="margin-bottom: 50px"/>
    <ul class="projectsList">
      <li v-for="project in projects" :key="project.project.name" class="projectLi" :class="{thick:project.wide}">
        <WideProject v-if="project.wide" :Project="project.project" style="width: 80vw" class="wide-project"/>
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
            name: "WhatToDoWithYou (GAME)",
            img: "whattodowithyou.jpg",
            link: "https://yoranfory.itch.io/whattodowithyou",
            linkText: "Link to itch.io",
            info: "In this group project, I was resposible for player movement, game mechanics, camera movement, technical aspects of animation, hazards, UI and player feedback<br/><br/>The project was made in 12 weeks in a group consisting of 2 programmers and 3 artists. <br/><br/>Made in Unreal 4.26.",
            groupProject: true
          },
          wide: true
        },
		{
          project:{
      name: "Super Paper Mario (GAME)",
      img: "SPM.png",
      imgAlt: `<iframe title="vimeo-player" src="https://player.vimeo.com/video/434715976?h=033444bd85"
        width="450" height="320" frameborder="0" allowfullscreen></iframe>`,
			link: "https://www.digitalartsandentertainment.be/article/437/Programming+2%3A+2020+post+mortem",
      linkText: "Link to featured project on DAE website",
      info: "This game was made for a module called: Programming 2. <br/><br/>In it, I remade a part of Super Paper Mario. <br/><br/>Made in C++ and SDL2."
		}
		},
        {
          project:{
            name:"Portal 2 Turret (ASSET)",
            img: "PortalTurret.png",
            link: "https://skfb.ly/o6wOr",
			linkText: "Link to sketchfab",
            info: "This 3D model was made for a module called: 3D 4 Games. <br/><br/>Made in 3Ds Max and Substance Painter."
          }
        },
		{
			project:{
        name: "Science Center (LEVEL)",
        img: "ScienceCenter.png",
        imgAlt: `<iframe width="450" height="320" src="https://www.youtube.com/embed/cF5uhhTUBRA"
          title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
          encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
				link: "https://youtu.be/9KOyP-OqGcs",
				linkText: "Link to level walktrough",
				info: "This level was made for a module called: Environments. <br/><br/>Made in Unreal Engine 4.26."
			}
		},
		{
			project:{
        name: "City Scene - Bangkok (LEVEL)",
        img: "cityScene.png",
        imgAlt: `<div class="sketchfab-embed-wrapper">
          <iframe title="De Ridder Jonas - City Scene Bangkok" width="450" height="280" frameborder="0"
          allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay;
          fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered
          web-share src="https://sketchfab.com/models/db0ff4153f074c9396edf2c5b434e1b9/embed">
          </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
          <a href="https://sketchfab.com/3d-models/de-ridder-jonas-city-scene-bangkok-db0ff4153f074c9396edf2c5b434e1b9?utm_medium=embed&utm_campaign=share-popup&utm_content=db0ff4153f074c9396edf2c5b434e1b9"
          target="_blank" style="font-weight: bold; color: #1CAAD9;"> De Ridder Jonas - City Scene Bangkok </a> by <a
          href="https://sketchfab.com/JonasDeRidder?utm_medium=embed&utm_campaign=share-popup&utm_content=db0ff4153f074c9396edf2c5b434e1b9"
          target="_blank" style="font-weight: bold; color: #1CAAD9;"> JonasDeRidder </a> on <a
          href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=db0ff4153f074c9396edf2c5b434e1b9"
          target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>`,
				link: "https://skfb.ly/6SZA7",
				linkText: "Link to sketchfab",
				info: "This city scene was made for a module called: 3D 1. <br/><br/>Made in 3Ds Max."
			}
		},
		{
			project:{
				name: "HLPR (WEB)",
				img: "HLPR.png",
				link: "https://www.nextapps.be/en/portfolio/hlpr-2/",
				linkText: "Link to company website",
				info: "Worked on this project during internship at NextApss. <br/><br/>Made in Vue.js"
			}
		},
		{
			project:{
				name: "Kurieus CMS (WEB)",
				img: "Kurieus.png",
				link: "https://play.google.com/store/apps/details?id=be.nextapps.kurieus&hl=en_US&gl=US",
				linkText: "Link to App download",
				info: "Worked on CMS for this app during internship at NextApps <br/><br/>Made in Vue.js"
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
.projectsList{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  padding: 0;
}
.projectLi{
  list-style-type: none;
  margin: 11px 7px;
  width: 45%;
  /* height: 500px; */
}
.thick{
  width: 100%;
}
.wide-project{
  margin: auto;
}

@media screen and (max-width: 1000px) {
  .projectLi{
    width: 90%;
  }
}
</style>
