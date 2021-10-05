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
            linkText: "Link to itch.io",
			info: "In this group project, I was resposible for player movement, game mechanics, camera movement, technical aspects of animation, hazards, UI and player feedback<br/><br/>The project was made in 12 weeks in a group consisting of 2 programmers and 3 artists.",
            groupProject: true
          },
          wide: true
        },
		{
		   project:{
			name: "Super Paper Mario",
			imgAlt: `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/434715976?h=033444bd85" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
<p><a href="https://vimeo.com/434715976">DAE_2020_PROG2_De_Ridder_Jonas_Super_Paper_Mario</a> from <a href="https://vimeo.com/daehowest">Digital Arts and Entertainment</a> on <a href="https://vimeo.com">Vimeo</a>.</p>`,
			link: "https://www.digitalartsandentertainment.be/article/437/Programming+2%3A+2020+post+mortem",
			linkText: "Link to featured project on DAE website"
		   }
		},
        {
          project:{
            name:"Portal 2 Turret",
            img: "PortalTurret.png",
            link: "https://skfb.ly/o6wOr",
			linkText: "Link to sketchfab",
            info: "This 3D model was made for a module called: 3D 4 Games."
          }
        },
		{
			project:{
				name: "Science Center",
				imgAlt: `<iframe width="560" height="315" src="https://www.youtube.com/embed/cF5uhhTUBRA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
				link: "https://youtu.be/9KOyP-OqGcs",
				linkText: "Link to level walktrough",
				info: "This level was made for a module called: Environments"
			}
		},
		{
			project:{
				name: "City Scene",
				imgAlt: `<div class="sketchfab-embed-wrapper"> <iframe title="De Ridder Jonas - City Scene Bangkok" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/db0ff4153f074c9396edf2c5b434e1b9/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/de-ridder-jonas-city-scene-bangkok-db0ff4153f074c9396edf2c5b434e1b9?utm_medium=embed&utm_campaign=share-popup&utm_content=db0ff4153f074c9396edf2c5b434e1b9" target="_blank" style="font-weight: bold; color: #1CAAD9;"> De Ridder Jonas - City Scene Bangkok </a> by <a href="https://sketchfab.com/JonasDeRidder?utm_medium=embed&utm_campaign=share-popup&utm_content=db0ff4153f074c9396edf2c5b434e1b9" target="_blank" style="font-weight: bold; color: #1CAAD9;"> JonasDeRidder </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=db0ff4153f074c9396edf2c5b434e1b9" target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>`,
				link: "https://skfb.ly/6SZA7",
				linkText: "Link to sketchfab",
				info: "This city scene was made for a module called: 3D 1"
			}
		},
		{
			project:{
				name: "HLPR",
				img: "HLPR.png",
				link: "https://www.nextapps.be/en/portfolio/hlpr-2/",
				linkText: "Link to company website",
				info: "Worked on this project during internship at NextApss"
			}
		},
		{
			project:{
				name: "Kurieus CMS",
				img: "Kurieus.png",
				link: "https://play.google.com/store/apps/details?id=be.nextapps.kurieus&hl=en_US&gl=US",
				linkText: "Link to App download",
				info: "Worked on CMS for this app during internship at NextApps"
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
  margin: 5px;
}
</style>
