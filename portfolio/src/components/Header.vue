<template>
  <header>
    <h1>Jonas De Ridder</h1>
    <h3 style="margin-bottom: 25px">
      Game Developer<br class="extraBr"/>
      <span class="studyInfo">AI and Gameplay Programmer</span>
    </h3>
    <h3>
      Software and System Engineer
    </h3>
    <div class="profile-info">
      <p class="location">@Belgium</p>
      <ul id="nav">
        <li>
          <router-link to="/">Projects</router-link>
        </li>
        <li>
          <router-link to="/OtherProjects">Non-coding projects</router-link>
        </li>
        <li>
          <router-link to="/about">About Me</router-link>
        </li>
      </ul>
      <ul class="links">
        <li>
          <a href="https://www.linkedin.com/in/jonasderidder64/" target="_blank">
            <img src="@/assets/img/LI-In-Bug.png" alt="LinkedIn" />
          </a>
        </li>
        <li>
          <a href="https://github.com/DeRidderJonas" target="_blank">
            <img src="@/assets/img/github.png" alt="Github" />
          </a>
        </li>
        <li>
          <a href="mailto:jonasderidder64@gmail.com">
            <img src="@/assets/img/mail.png" alt="Mail to" />
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
  header {
    width: 95%;
    margin: 25px auto auto auto;
    border-radius: 20px;
    background-color: #111d;
    padding: 1px;
    color: #d0d0d0;
  }

  .profile-info {
    display: flex;
  }

  .location {
    margin-left: 5%;
    width: 8%;
    color: #3e73b3;
  }

  .links {
    list-style-type: none;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    width: 8%;
    padding: 0;
    margin-left: auto;
    margin-right: 5%;
  }

  img {
    border-radius: 2px;
    height: 25px;
    width: auto;
  }

  h1 {
    font-size: 2.8rem;
  }

  h3 {
    font-size: 2rem;
    margin: 5px;
  }

  .studyInfo {
    font-size: 0.9rem;
    color: #3e73b3;
    margin-left: 5px;
  }

  .extraBr {
      display: none;
  }

  @media screen and (max-width: 1000px) {
    .links {
      width: 90%;
      margin-top: 35px;
    }

    .profile-info {
        flex-direction: column;
    }

    #nav {
        width: 90%;
        padding-left: 0;
        padding-top: 20px;
    }

    .extraBr {
        display: inline;
    }

    .location {
        display: none;
    }
  }

  #nav {
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
    width: 84%;
    margin: auto;
  }

  #nav a {
    font-weight: bold;
    color: white;
  }

  #nav a.router-link-exact-active {
    color: #3e73b3;
  }
</style>
