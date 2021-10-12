<template>
  <div class="small-project full-project actual-project">
    <img
      src="assets/img/GroupProjectSignature.png"
      alt="Group Project"
      v-if="Project.groupProject"
      class="GPSig"
    />
    <h2>
      <router-link v-if="Project.details" :to="Project.details">{{Project.name}} -></router-link>
      <span v-else>{{Project.name}}</span>
    </h2>
    <div class="info">
      <div class="imageContainer">
        <pauseableGif v-if="Project.GifInfo" :GifInfo="Project.GifInfo" />
        <div v-if="Project.imgAlt" v-html="Project.imgAlt" class="projectImg-alt"></div>
        <img
          v-if="Project.img && !Project.imgAlt"
          :src="'assets/img/' + Project.img"
          class="projectImg"
        />
        <img
          :src="'assets/img/' + Project.img"
          class="projectImg projectImg-backup"
          :style="[Project.imgAlt ? {} : {'display':'none'}]"
        />
        <div class="logoContainer">
          <p class="year">{{Project.year}}</p>
          <SoftwareLogo v-for="software in Project.softwares" :key="software" :software="software" />
        </div>
      </div>
      <div class="info-text info-text-small">
        <p v-html="Project.info"></p>
        <a :href="Project.link" target="_blank">{{Project.linkText}}</a>
      </div>
    </div>
  </div>
</template>

<script>
  import pauseableGif from "@/components/PausableGif.vue";
  import SoftwareLogo from "@/components/SoftwareLogo.vue";

  export default {
    components: {
      pauseableGif,
      SoftwareLogo
    },
    props: {
      Project: Object
    }
  };
</script>

<style scoped>
  .small-project {
    height: 400px;
  }
  .info-text-small {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  img {
    max-height: 260px;
    width: auto;
    max-width: 458px;
  }

  .projectImg-backup {
    display: none;
  }

  .imageContainer {
    display: flex;
    flex-direction: column;
    align-items: left;
  }

  .year {
    font-size: 1.3rem;
    font-weight: bold;
    margin-right: 8%;
    line-height: 0;
  }

  .logoContainer {
    display: flex;
  }

  .logoContainer img {
    margin-top: auto;
    margin-bottom: auto;
  }

  h2 a {
    color: #172f47;
  }

  a {
    color: #70b4b1;
  }

  @media screen and (max-width: 1000px) {
    .small-project {
      height: auto;
    }

    img {
      width: 95%;
      height: auto;
    }

    .projectImg-alt {
      display: none;
    }

    .projectImg-backup {
      display: inline;
    }

    .logoContainer {
      max-height: 40px;
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>
