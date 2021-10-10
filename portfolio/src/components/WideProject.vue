<template>
  <div class="full-project top-project">
    <img
      src="assets/img/GroupProjectSignature.png"
      alt="Group Project"
      v-if="Project.groupProject"
      class="GPSig"
    />
    <div class="actual-project">
      <h2>{{Project.name}}</h2>
      <div class="info">
        <div class="imageContainer">
          <img :src="'assets/img/' + Project.img" class="projectImg" />
          <div class="logoContainer">
            <p class="year">{{Project.year}}</p>
            <SoftwareLogo
              v-for="software in Project.softwares"
              :key="software"
              :software="software"
            />
          </div>
        </div>
        <div class="info-text">
          <p v-html="Project.info"></p>
          <a :href="Project.link" target="_blank">{{Project.linkText}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SoftwareLogo from "@/components/SoftwareLogo.vue";

  export default {
    components: {
      SoftwareLogo
    },
    props: {
      Project: Object
    }
  };
</script>

<style>
  .full-project {
    background-color: #808080d0;
    border-radius: 15px;
  }

  .top-project {
    height: 430px;
  }

  .actual-project {
    padding: 5px;
  }

  .info {
    display: flex;
    justify-content: space-evenly;
  }

  .info-text {
    width: 20%;
  }

  .GPSig {
    max-width: 15%;
    float: right;
  }

  .projectImg {
    width: 70%;
    border-radius: 15px;
  }

  h2 {
    text-decoration: underline;
  }

  .year {
    font-size: 1.3rem;
    font-weight: bold;
    margin-right: 5%;
  }

  .logoContainer {
    display: flex;
  }

  .logoContainer img {
    margin-top: auto;
    margin-bottom: auto;
  }

  .imageContainer {
    display: flex;
    flex-direction: column;
    align-items: left;
  }

  @media screen and (max-width: 1000px) {
    .top-project {
      height: auto;
    }

    .GPSig {
      max-width: 15%;
    }

    .info {
      display: flex;
      flex-direction: column;
      margin: 5px;
    }

    .projectImg {
      width: 95%;
      height: auto;
      margin: auto;
    }

    .info-text {
      width: 95%;
    }
  }
</style>
