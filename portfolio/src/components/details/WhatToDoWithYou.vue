<template>
  <div class="detailPage">
    <h3>What To Do With You</h3>
    <div class="first">
      <div>
        <p>
          The project was made in 10 weeks in a group of 2 programmers:
          <span
            class="bold"
          >Jonas De Ridder (me)</span>,
          <a href="https://eliasdeherdt.com/" target="_blank">Elias De Herdt</a> and 3 artists:
          <a href="https://www.artstation.com/yoran_fory" target="_blank">Yoran Fory</a>, Rebecca Bonjé, Seppe Hauspie.
        </p>
        <p>In the game, you play as someone who recently died and the afterlife didn't know whether to place you in Heaven or in Hell. In order to figure this out you get to play as an Angel and as a Demon, using their abilities to traverse through the levels.</p>
        <p>The purpose of the game is to first of all: finish it. Once you accomplish that, you can focus on trying to complete the game faster and faster.</p>
      </div>
      <img src="@/assets/img/whattodowithyou.jpg" alt="Banner img" class="banner" />
    </div>
    <br />
    <div class="second">
      <iframe
        id="ytGP"
        width="560"
        height="284"
        src="https://www.youtube.com/embed/3lu0qpHDLZQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div>
        <p>
          The game was made in Unreal Engine 4.26 in
          <span class="bold">C++</span>. I was responsible for implenting the technical sides of these mechanics:
        </p>
        <ul>
          <li>
            Player
            <ul>
              <li>
                Movement
                <ul>
                  <li>Basic movement</li>
                  <li>Angel Ability: Dash</li>
                  <li>Angel Ability: Throw Halo</li>
                  <li>Demon Ability: Hook & Swing</li>
                </ul>
              </li>
              <li>Skeletal Mesh and Animation swapping</li>
              <li>Player feedback
                  <ul>
                      <li>Particle systems</li>
                      <li>Sound effects</li>
                  </ul>
              </li>
            </ul>
          </li>
          <li>Hazards
              <ul>
                  <li>Reset level objects</li>
              </ul>
          </li>
          <li>Leaderboard</li>
        </ul>
      </div>
    </div>

    <div class="imgContainer">
        <img src="@/assets/img/wtdwy0.png" alt="gameplay screenshot">
        <img src="@/assets/img/wtdwy1.png" alt="gameplay screenshot">
        <img src="@/assets/img/wtdwy2.png" alt="gameplay screenshot">
        <img src="@/assets/img/wtdwy3.png" alt="gameplay screenshot">
    </div>
  </div>
</template>

<script>

export default {
}
</script>

<style scoped>
  .detailPage {
    background-color: #808080d0;
    width: 90%;
    margin: auto;
    border-radius: 15px;
  }

  h3 {
    padding-top: 10px;
    font-size: 2.3rem;
    text-decoration: underline;
  }

  ul {
    list-style-type: disc;
    text-align: left;
  }

  .banner {
    height: 300px;
    border-radius: 3px;
    margin-right: 15px;
    margin-bottom: 10px;
  }

  .bold {
    font-weight: bold;
  }

  .first {
    display: flex;
  }

  .first div {
    width: 30%;
    margin: auto;
  }

  .second {
    display: flex;
    text-align: left;
    margin-bottom: 15px;
  }

  .second div {
    margin-left: 15px;
  }

  #ytGP {
    margin-left: 45px;
  }

  .imgContainer {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
  }

  .imgContainer img {
      width: 45%;
      margin-bottom: 20px;
  }
</style>
