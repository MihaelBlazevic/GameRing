<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm pozadina razmak">
          <form>
            <div class="form-group">
              <img class="m-4" src="@/assets/logo1.png" alt="logo" />
              <br />
              <label class="text_color" for="exampleInputEmail1"
                >Email address<br /><br
              /></label>
              <input
                type="email"
                v-model="username"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
              />
            </div>
            <br />
            <div class="form-group">
              <label class="text_color" for="exampleInputPassword1"
                >Password <br /><br
              /></label>

              <input
                type="password"
                v-model="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <br />
            <br />
            <button type="button" @click="login()" class="btn mybutton">
              Submit
            </button>
            <br />
            <br />
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { firebase } from "@/firebase";
import store from "@/store.js";

export default {
  email: "login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.log("login..." + this.username);

      firebase
        .auth()
        // provjerava informacije u .auth dali userpostoji te ako da nas signina
        .signInWithEmailAndPassword(this.username, this.password)
        .then((result) => {
          console.log("Upsješna prijava", result);
          //pamti email registriranog usera
          store.User = this.username;
          console.log(store.User);
          //vodi na page Homelog
          this.$router.replace({ name: "Homelog" });
        })
        //ispis greške u slučaju neuspjeha
        .catch(function (e) {
          console.error("Greška", e);
        });
    },
  },
};
</script>

<style lang="scss">
.razmak {
  margin-top: 50px;
}
.text_color {
  color: #42b983 !important;
  font-weight: bold;
}
.pozadina {
  border: none;
  border-top: 15px solid rgb(176, 106, 252);
  border-bottom: 15px solid rgb(176, 106, 252);
  border-left: 15px solid #212042;
  border-right: 15px solid #212042;
  background: #212042;
  color: #57557a;
}

.mybutton {
  background-color: #42b983;
  &:hover {
    background-color: rgb(47, 151, 108);
  }
}
</style>
