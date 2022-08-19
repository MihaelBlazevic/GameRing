<template>
  <div>
    <div class="container razmak pozadina">
      <button
        type="button"
        @click="passwordReset()"
        class="btn mybutton razmacic"
      >
        Reset password
      </button>
    </div>
  </div>
</template>

<script>
import { firebase } from "@/firebase";
import store from "@/store.js";

export default {
  name: "Settings",

  methods: {
    passwordReset() {
      firebase
        .auth()
        .sendPasswordResetEmail(store.User)
        .then(() => {
          // Password reset email sent!
          // ..
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ..
        });
    },
  },
};
</script>

<style>
.razmacic {
  margin: 50px;
}
</style>
