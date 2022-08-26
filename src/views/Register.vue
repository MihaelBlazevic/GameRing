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
                v-model="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
              />
            </div>
            <br />
            <div class="form-group">
              <label class="text_color" for="exampleInputPassword1"
                >Password <br />
                (minimum 6 letters )<br /><br
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
            <div class="form-group">
              <label class="text_color" for="exampleInputPassword2"
                >Repeat password<br /><br
              /></label>
              <input
                type="password"
                v-model="passwordRepeat"
                class="form-control"
                id="exampleInputRepeatPassword2"
                placeholder="Password"
              />
            </div>
            <br />
            <button type="button" @click="register" class="btn mybutton">
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
let db = firebase.firestore();

export default {
  name: "Register",
  data() {
    return {
      password: "",
      passwordRepeat: "",
      email: "",
    };
  },
  methods: {
    async register() {
      if (this.password === this.passwordRepeat) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            console.log("Registered!");
            this.$router.replace({ name: "Homelog" });
          })
          .catch(function (error) {
            console.error("Error", error);
          });
      } else {
        console.log("Repeatpassword not matching");
      }
    },
  },
};
</script>

<style lang="scss">
body {
  background-color: #19123b;
}
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
.logo {
}
.mybutton {
  background-color: #42b983;
  &:hover {
    background-color: rgb(47, 151, 108);
  }
}
</style>
