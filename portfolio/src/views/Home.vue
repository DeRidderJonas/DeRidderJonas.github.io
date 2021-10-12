<template>
  <div class="home">
    <ul class="projectsList">
      <li
        v-for="project in projects"
        :key="project.project.name"
        class="projectLi"
        :class="{thick:project.wide}"
      >
        <WideProject
          v-if="project.wide"
          :Project="project.project"
          style="width: 80vw"
          class="wide-project"
        />
        <SmallProject v-else :Project="project.project" />
      </li>
    </ul>
  </div>
</template>

<script>
import WideProject from "@/components/WideProject.vue";
import SmallProject from "@/components/SmallProject.vue";

  export default {
    name: "home",
    components: {
      WideProject,
      SmallProject
    },
    data() {
      return {
        projects: [
          {
            project: {
              name: "WhatToDoWithYou",
              details: "/detail/whattodowithyou",
              img: "wtdwy0.png",
              link: "https://yoranfory.itch.io/whattodowithyou",
              linkText: "Link to itch.io",
              info:
                "In this group project, I was resposible for player movement, game mechanics, camera movement, technical aspects of animation, hazards<br/><br/>Made in C++ in Unreal 4.26.",
              groupProject: true,
              year: "2021",
              softwares: ["C++", "UE4"]
            },
            // wide: true
          },
          {
            project: {
              name: "Ambient Interactions using Smart Locations",
              GifInfo: {
                gif: "AmbientInteractionsDancingHumans.gif",
                img: "AmbientInteractionsDancingHumanStill.png"
              },
              link:
                "https://github.com/DeRidderJonas/AmbientInteractionsUsingSmartLocations",
              linkText: "Link to github",
              info:
                "This project was made for a module Gameplay Programming. In it, I explore Smart locations and how they can make the background of your environment look alive. <br/><br/> Made in C++ with SDL2 and Box2D.",
                year: "2020",
                softwares: ["C++", "SDL", "Box2D"]
            }
          },
          {
            project: {
              name: "Gameplay Programming Projects",
              GifInfo: {
                gif: "Flocking.gif",
                img: "Flocking.png"
              },
              link: "https://github.com/DeRidderJonas/GameplayProgramming",
              linkText: "Link to Github",
              info:
                "This project demonstrates different types of gameplay programming. It was made for a module called Gameplay Programming. <br/><br/> Made in C++ with SDL2 and Box2D.",
              year: "2020",
              softwares: ["C++", "SDL", "Box2D"]
            }
          },
          {
            project: {
              name: "Zombie game AI",
              GifInfo: {
                gif: "ZombieGameAI.gif",
                img: "ZombieGameAIStill.png"
              },
              link: "https://github.com/DeRidderJonas/ZombieGameAI",
              linkText: "Link to Github",
              info:
                "AI project for Zombie Game as an exam project for a module called Gameplay Programming. <br/><br/> Made in C++ with SDL2 and Box2D.",
              year: "2020",
              softwares: ["C++", "SDL", "Box2D"]
            }
          },
          {
            project: {
              name: "Super Paper Mario",
              img: "SPM.png",
              imgAlt: `<iframe title="vimeo-player" src="https://player.vimeo.com/video/434715976?h=033444bd85"
              width="450" height="260" frameborder="0" allowfullscreen></iframe>`,
              link:
                "https://www.digitalartsandentertainment.be/article/437/Programming+2%3A+2020+post+mortem",
              linkText: "Link to featured project on DAE website",
              info:
                "This game was made for a module called: Programming 2. <br/><br/>In it, I remade a part of Super Paper Mario. <br/><br/>Made in C++ and SDL2.",
              year: "2020",
              softwares: ["C++", "SDL"]
            }
          },
          {
            project: {
              name: "Minigin QBert",
              GifInfo: {
                gif: "QBert.gif",
                img: "QBertStill.png"
              },
              link: "https://github.com/DeRidderJonas/MiniginQBert",
              linkText: "Link to github",
              info:
                "This project contains both a 2D game engine and the game QBert. It was part of a module called Programming 4. <br/><br/>Made in C++ with SDL2.",
              year: "2021",
              softwares: ["C++", "SDL"]
            }
          },
          {
            project: {
              name: "Overcooked",
              img: "Overcooked.png",
              link: "https://github.com/DeRidderJonas/OverCooked",
              linkText: "Link to Github",
              info:
                "This project is an engine and a game made for a module called Graphics Programming 2. It was based on the Overlord engine and extended with features like Skinning, Shadow Mapping... <br/><br/>Made in C++ with DirectX.",
              year: "2021",
              softwares: ["C++", "DirectX"]
            }
          },
          {
            project: {
              name: "Rasterizer",
              GifInfo: {
                gif: "Rasterizer.gif",
                img: "Rasterizer.png"
              },
              link: "https://github.com/DeRidderJonas/Rasterizer",
              linkText: "Link to Github",
              info:
                "This project contains the DirectX rasterizer + a self-written rasterizer. Press R to switch between the 2. It was made for a module called Graphics Programming. <br/><br/>Made in C++ with DirectX and SDL2.",
              year: "2020",
              softwares: ["C++", "DirectX", "SDL"]
            }
          },
          {
            project: {
              name: "Raytracer",
              GifInfo: {
                gif: "Raytracer.gif",
                img: "Raytracer.png"
              },
              link: "https://github.com/DeRidderJonas/Raytracer",
              linkText: "Link to Github",
              info:
                "This project was made for a module called Graphics Programming. In it, the ray tracer allows for basic shapes, different Lambert materials and obj files. <br/><br/>Made in C++ with SDL2.",
                year: "2020",
                softwares: ["C++", "SDL"]
            }
          },
          {
            project: {
              name: "Hypixel Profile Viewer",
              img: "HypixelProfileViewer.png",
              link: "https://github.com/DeRidderJonas/HypixelProfileViewer",
              linkText: "Link to Github",
              info:
                "This project makes use of the Hypixel API. It shows the player's stats in the server. The project was made for a module called Tool Development. <br/><br/>Made in C# in MVVM.",
              year: "2021",
              softwares: ["C#"]
            }
          },
          {
            project: {
              name: "HLPR (WEB)",
              img: "HLPR.png",
              link: "https://www.nextapps.be/en/portfolio/hlpr-2/",
              linkText: "Link to company website",
              info:
                "Worked on this project during internship at NextApss. <br/><br/>Made in Vue.js",
              year: "2019",
              softwares: ["vue"]
            }
          },
          {
            project: {
              name: "Kurieus CMS (WEB)",
              img: "Kurieus.png",
              link:
                "https://play.google.com/store/apps/details?id=be.nextapps.kurieus&hl=en_US&gl=US",
              linkText: "Link to App download",
              info:
                "Worked on CMS for this app during internship at NextApps <br/><br/>Made in Vue.js",
              year: "2019",
              softwares: ["vue"]
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
  .thick {
    width: 100%;
  }
  .wide-project {
    margin: auto;
  }

  @media screen and (max-width: 1000px) {
    .projectLi {
      width: 90%;
    }
  }
</style>
