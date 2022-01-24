<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light boja_nav outline">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          &nbsp;&nbsp;&nbsp;
          <img
            src="@/assets/logo1.png"
            width="auto"
            height="50"
            class="d-inline-block align-top"
            alt=""
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link v-if="!store.User" to="/" class="text_color px-2"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                v-if="!store.User"
                to="/Login"
                class="text_color px-2"
                >Login</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                v-if="!store.User"
                to="/Register"
                class="text_color px-2"
                >Register</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                v-if="store.User"
                to="/Homelog"
                class="text_color px-2"
                >Homelog</router-link
              >
            </li>
            <li class="nav-item">
              <a
                href="#"
                v-if="store.User"
                @click="logout()"
                class="text_color px-2"
                >Logout</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { firebase } from "@/firebase";
import LoginVue from "./views/Login.vue";
import store from "@/store.js";

export default {
  data() {
    return {
      store,
    };
  },
  setup() {},
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Login" });
        });
    },
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("***", user.email);
        store.User = user.email;
      } else {
        console.log("No user");
        store.User = null;
      }
    });
  },
};
</script>


<style lang="scss" >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983 !important;
    }
  }
}
.boja_nav {
  background-color: #212042;
}
.text_left {
  text-align: left;
}
.outline {
  border-bottom: 3px solid rgb(176, 106, 252);
}
.text_color {
  color: #42b983 !important;
  font-weight: bold;
}
</style>


