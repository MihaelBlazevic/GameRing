<template>
  <div class="container">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8 pozadina razmak text_color">
        <div class="container razmak">
          WELCOME TO GAMERING
          <div class="slika razmak"></div>
          <div class="wrap">
            <button
              type="button"
              onclick="location.href = '/register'"
              class="btn mybutton"
            >
              Get Started
            </button>
            <br />
            <br />

            <a href="/Login"
              ><div class="text_color">Already have an account?</div></a
            >
          </div>
          <br />
        </div>
      </div>
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss">
.pozadina {
  border: none;
  border-top: 15px solid rgb(176, 106, 252);
  border-bottom: 15px solid rgb(176, 106, 252);
  border-left: 15px solid #212042;
  border-right: 15px solid #212042;
  background: #212042;
  color: #57557a;
}

.razmak {
  margin-top: 50px;
  margin-bottom: 50px;
}

.text_color {
  color: #42b983 !important;
  font-weight: bold;
}

.slika {
  background-color: #cccccc; /* Used if the image is unavailable */
  height: 500px; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}
* {
  outline: none;
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}
</style>
