<template>
  <div id="app">
    <!-- Image and text -->
    <nav class="navbar navbar-light boja_nav outline">
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
      <div class="text_left text_color">
        <router-link to="/" class="text_color">Home</router-link> |
        <router-link to="/Login" class="text_color">Login</router-link> |

        <router-link to="/Register" class="text_color">Register</router-link>
        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;
        <!--easter egg ooops naso si me-->
        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
      </div>
      <div></div>
    </nav>
    <router-view />
  </div>
</template>

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


