<template>
  <div class="about">
    <div class="info">
      <p>I've been writing code since <span class="bold">2016</span>. My first bachelor's degree was in Applied Computer Science, I majored as a <span class="bold">Software and System Engineer</span>. There I learned coding as well as Networking, Operating Systems, Databases, Web Development...</p>
      <p>After that degree, I wanted to keep learning so I went for a second Bachelor's degree in <span class="bold">Digital Arts and Entertainment</span> (DAE) as a Game Developer. During my time at DAE, I've come to realise I love making NPCs do things, see them mess up completely and ultimatly do what they're actually supposed to do... That's why I prefer <span class="bold">Gameplay Programming</span> and <span class="bold">AI</span> over most other branches in the gaming industry.</p>
    </div>
    <img src="assets/img/Profile.jpg" alt="Profile" class="profile" />
  </div>
</template>

<style scoped>
  .about {
    background-color: #808080d0;
    width: 90%;
    margin: auto;
    border-radius: 15px;
    display: flex;
    align-items: center;
  }

  .info {
    width: 40%;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    flex-direction: column;
  }

  .profile {
    width: 25%;
    border-radius: 15px;
    margin-left: auto;
    margin-right: 2%;
  }

  .bold{
    font-weight: bold;
  }
</style>
