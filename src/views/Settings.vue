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
    <form ref="form" @submit.prevent="sendEmail">
      <div class="container razmak pozadina">
        <h1 class="sans text_color">Contact Us</h1>
        <br />
        <label for="email" class="text_color">Email</label>
        <br />
        <input
          type="text"
          id="email"
          name="user_email"
          placeholder="Used email or your account"
          required
        />
        <br />
        <label for="Topic" class="text_color">Topic</label>
        <br />
        <input
          type="text"
          id="Topic"
          name="Topic"
          placeholder="Area of your problem"
          required
        />
        <br />
        <label for="subject" class="text_color">Explanation</label>
        <br />
        <textarea
          id="subject"
          name="subject"
          placeholder="Tell us more.."
          style="height: 200px"
          required
        ></textarea>
        <br />
        <input type="submit" value="Send" class="btn mybutton" />
      </div>
    </form>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";
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
    ocisti() {
      document.getElementById("email").value = "";
      document.getElementById("Topic").value = "";
      document.getElementById("subject").value = "";
    },
    sendEmail() {
      emailjs
        .sendForm(
          "service_ixqyff9",
          "template_oe2ev8f",
          this.$refs.form,
          "VUTMjeDEZMfV03Z9x"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            this.ocisti();
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
};
</script>

<style>
.razmacic {
  margin: 50px;
}
input[type="text"],
select,
textarea {
  width: 50%; /* Full width */
  padding: 12px; /* Some padding */
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical; /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;

  padding: 20px;
}
</style>
