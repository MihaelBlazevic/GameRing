<template>
  <div class="container">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8 pozadina razmak text_color">
        <div class="container razmak font-weight-bold">
          <h1 class="sans">
            WELCOME TO <span style="color: #ffffff">GAMERING</span>
          </h1>
          <div class="razmak"></div>
          <div class="wrap">
            <div class="container razmak text_color">
              <h5>
                <span style="color: #ffffff">
                  This site was created with the goal to be a platform for you
                  to add all your gaming friends and be able to chat with them
                  and see their gaming goals so you can find your perfect gaming
                  buddy.</span
                >
              </h5>
              <div class="container razmak">
                <img class="m-4" src="@/assets/logo1.png" alt="logo" />
              </div>
              <h5>
                <span style="color: #ffffff">
                  Currently only 3 games will be supported but with future
                  updates we are planning on adding more community favorite
                  games.</span
                >
              </h5>
            </div>
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

.sans {
  font-family: "Comic Sans MS", "Comic Sans", cursive;
}
</style>
