<template>
  <div>
    <ul class="projectsList">
      <li v-for="project in projects" :key="project.project.name" class="projectLi">
        <SmallProject :Project="project.project" />
      </li>
    </ul>
  </div>
</template>

<script>
  import SmallProject from "@/components/SmallProject.vue";

  export default {
    components: {
      SmallProject
    },
    data() {
      return {
        projects: [
          {
            project: {
              name: "Portal 2 Turret",
              img: "PortalTurret.png",
              link: "https://skfb.ly/o6wOr",
              linkText: "Link to sketchfab",
              info:
                "This 3D model was made for a module called: 3D 4 Games. <br/><br/>Made in 3Ds Max and Substance Painter.",
                year: "2021",
                softwares: ["3DS", "SP"]
            }
          },
          {
            project: {
              name: "Science Center",
              img: "ScienceCenter.png",
              imgAlt: `<iframe width="450" height="260" src="https://www.youtube.com/embed/cF5uhhTUBRA"
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                    encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
              link: "https://youtu.be/9KOyP-OqGcs",
              linkText: "Link to level walktrough",
              info:
                "This level was made for a module called: Environments. <br/><br/>Made in Unreal Engine 4.26.",
              year: "2020",
              softwares: ["UE4"]
            }
          },
          {
            project: {
              name: "City Scene - Bangkok",
              img: "cityScene.png",
              imgAlt: `<div class="sketchfab-embed-wrapper">
                    <iframe title="De Ridder Jonas - City Scene Bangkok" width="450" height="240" frameborder="0"
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
              info:
                "This city scene was made for a module called: 3D 1. <br/><br/>Made in 3Ds Max.",
                year: "2020",
                softwares: ["3DS"]
            }
          }
        ]
      };
    }
  };
</script>

<style scoped>
  .projectsList {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
    padding: 0;
  }
  .projectLi {
    list-style-type: none;
    margin: 11px 7px;
    width: 45%;
    /* height: 500px; */
  }

  @media screen and (max-width: 1000px) {
    .projectLi {
      width: 90%;
    }
  }
</style>
