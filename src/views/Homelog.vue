<template>
  <div class="container">
    <p>
      <span>GameRing</span>
      <a
        class="btn btn-primary razmak stajl button"
        style="background-color: #42b983"
        href="#!"
        role="button"
      >
        <i class="fas fa-user"></i>
        <router-link to="/Profile">Profile</router-link>
      </a>
      <br />
      <a
        class="btn btn-primary razmak stajl button"
        style="background-color: #42b983"
        href="#!"
        role="button"
      >
        <i class="far fa-comment-alt"></i>
        <router-link to="/Chat">Chat</router-link> </a
      ><br />
      <a
        class="btn btn-primary razmak stajl button"
        style="background-color: #42b983"
        href="#!"
        role="button"
      >
        <i class="fas fa-cog"></i>
        <router-link to="/Settings">Settings</router-link>
      </a>
    </p>
  </div>
</template>

<script>
export default {
  name: "Homelog",
};
</script>

<style lang="scss">
body {
  font: 400 1em/1.5 "Neuton";
  background: #19123b;
  color: rgba(255, 255, 255, 0.25);
  text-align: center;
  margin: 0;
}

p {
  text-transform: uppercase;
  letter-spacing: 0.5em;
  display: inline-block;
  border: 4px double rgba(255, 255, 255, 0.25);
  border-width: 4px 0;
  padding: 1.5em 0em;
  position: absolute;
  top: 18%;
  left: 50%;
  width: 40em;
  margin: 0 0 0 -20em;

  span {
    font: 700 4em/1 "Oswald", sans-serif;
    letter-spacing: 0;
    padding: 0.25em 0 0.325em;
    display: block;
    margin: 0 auto;
    text-shadow: 0 0 80px rgba(255, 255, 255, 0.5);

    /* Clip Background Image */

    background: url(https://i.imgur.com/GsPJKbz.png) repeat-y;
    -webkit-background-clip: text;
    background-clip: text;

    /* Animate Background Image */

    -webkit-text-fill-color: transparent;
    -webkit-animation: aitf 80s linear infinite;

    /* Activate hardware acceleration for smoother animations */

    -webkit-transform: translate3d(0, 0, 0);
    -webkit-backface-visibility: hidden;
  }
}

/* Animate Background Image */

@-webkit-keyframes aitf {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

.stajl {
  font-family: "Quicksand";
  border-radius: 10px;
  height: 50px;
  width: 250px;
  line-height: 2;
  box-sizing: border-box;
  font-size: 20px;
}

.button:hover {
  color: #013220;
}
.button:active {
  background-color: #3c824e;
  box-shadow: 0 5px #666;
  transform: translate(4px);
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  color: black;
}
</style>
