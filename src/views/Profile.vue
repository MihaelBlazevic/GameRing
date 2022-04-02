<template>
  <div class="cointainer">
    <div class="container center razmak2 pozadina">
      <div class="row">
        <div class="col-lg razmak tekstljevo text_color">Username:</div>
      </div>
      <div class="row">
        <div class="col-lg razmak tekstljevo text_color">Age:</div>
      </div>

      <div class="row">
        <div class="col-lg razmak tekstljevo text_color">Country:</div>
        <div class="row">
          <div class="col-lg">
            <a
              class="btn btn-primary razmak stajl button"
              style="background-color: #42b983"
              href="#!"
              role="button"
            >
              <form>
                <input
                  type="submit"
                  value="Add"
                  @click.prevent="setProfile()"
                  onsubmit="return false"
                />
              </form>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
let db = firebase.firestore();

export default {
  name: "Profile",
  data: function () {
    return {
      Username: "",
      Age: "",
      Country: "",
    };
  },

  methods: {
    getProfile() {
      var docRef = db.collection("Profile").doc(store.User);
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            this.age = doc.data().Age;
            this.country = doc.data().Country;
            this.username = doc.data().Username;
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    },

    setProfile() {
      db.collection("Profile")
        .doc(store.User)
        .set({
          username: this.username,
          age: this.age,
          country: this.country,
        })
        .then((doc) => {
          console.log("Spremljeno! ", doc);
        })
        .catch((e) => {
          console.error(e);
        });
    },
  },
};
</script>

<style lang="scss">
.razmak2 {
  margin: 150px;
}

.tekstljevo {
  text-align: left;
}
.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.center {
  margin: auto;
  width: 50%;

  padding: 10px;
}
</style>
