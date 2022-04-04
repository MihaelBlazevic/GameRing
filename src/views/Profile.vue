<template>
  <div class="container">
    <div class="container razmak pozadina">
      <form>
        <div v-if="user" class="form-group razmak3">
          <label for="exampleInputusername">Username</label>
          <input
            v-model="usernamer"
            type="text"
            class="form-control"
            id="exampleInputusername"
            aria-describedby="usernameHelp"
            placeholder="Enter username"
          />
        </div>
        <div v-if="!user" class="form-group razmak3 text_color tekst">
          Username : {{ usernamer }}
        </div>
        <div v-if="user" class="form-group razmak3">
          <label for="exampleInputcountry">Country</label>
          <input
            v-model="countryr"
            type="text"
            class="form-control"
            id="exampleInputcountry"
            aria-describedby="countrylHelp"
            placeholder="Enter country"
          />
        </div>
        <div v-if="!user" class="form-group razmak3 text_color tekst">
          Country : {{ countryr }}
        </div>
        <div v-if="user" class="form-group razmak3">
          <label for="exampleInputage">Age</label>
          <input
            v-model="ager"
            type="number"
            class="form-control"
            id="exampleInputage"
            placeholder="age"
          />
        </div>
        <div v-if="!user" class="form-group razmak3 text_color tekst">
          Age : {{ ager }}
        </div>
        <div v-if="!user" class="form-check razmak3">
          <button
            @click.stop="myFunction"
            type="submit"
            class="btn btn-primary"
          >
            Edit
          </button>
        </div>
        <div v-if="user" class="form-check razmak3">
          <button
            @click.prevent="setProfile()"
            onsubmit="return false"
            type="submit"
            class="btn btn-primary"
          >
            Save
          </button>
        </div>
      </form>
    </div>
    <div class="container dirko">
      <div class="row">
        <div class="col-lg-3 pozadina">
          <form v-if="userA">
            <div class="form-group razmak3">
              <label for="exampleInputusername">Username</label>
              <input
                v-model="usernameA"
                type="text"
                class="form-control"
                id="exampleInputusername"
                aria-describedby="usernameHelp"
                placeholder="Enter username"
              />
            </div>
            <div class="form-group razmak3">
              <label for="exampleInputrank">Rank</label>
              <input
                v-model="rankA"
                type="text"
                class="form-control"
                id="exampleInputrank"
                aria-describedby="rankHelp"
                placeholder="Enter rank"
              />
            </div>
            <div class="form-group razmak3">
              <label for="examplepreference">Prefence</label>
              <input
                v-model="preferenceA"
                type="text"
                class="form-control"
                id="examplepreference"
                placeholder="preference"
              />
            </div>

            <div v-if="userA" class="form-check razmak3">
              <button
                @click.prevent="setApex()"
                onsubmit="return false"
                type="submit"
                class="btn btn-primary"
              >
                Save
              </button>
            </div>
          </form>
          <div v-if="!userA" class="form-group razmak3 text_color tekst">
            Username : {{ usernameA }} Rank : {{ rankA }} Preference :
            {{ preferenceA }}
          </div>
          <div v-if="!userA" class="form-check razmak3">
            <button
              type="submit"
              @click.stop="myFunctionA"
              class="btn btn-primary"
            >
              Edit
            </button>
          </div>
        </div>
        <div class="col-lg-1"></div>
        <div class="col-lg-3 pozadina">
          <form v-if="userL">
            <div class="form-group razmak3">
              <label for="exampleInputusername">Username</label>
              <input
                v-model="usernameL"
                type="text"
                class="form-control"
                id="exampleInputusername"
                aria-describedby="usernameHelp"
                placeholder="Enter username"
              />
            </div>
            <div class="form-group razmak3">
              <label for="exampleInputrank">Rank</label>
              <input
                v-model="rankL"
                type="text"
                class="form-control"
                id="exampleInputrank"
                aria-describedby="rankHelp"
                placeholder="Enter rank"
              />
            </div>
            <div class="form-group razmak3">
              <label for="examplepreference">Prefence</label>
              <input
                v-model="preferenceL"
                type="text"
                class="form-control"
                id="examplepreference"
                placeholder="preference"
              />
            </div>

            <div v-if="userL" class="form-check razmak3">
              <button
                @click.prevent="setLoL()"
                onsubmit="return false"
                type="submit"
                class="btn btn-primary"
              >
                Save
              </button>
            </div>
          </form>
          <div v-if="!userL" class="form-group razmak3 text_color tekst">
            Username : {{ usernameL }} Rank : {{ rankL }} Preference :
            {{ preferenceL }}
          </div>
          <div v-if="!userL" class="form-check razmak3">
            <button
              type="submit"
              @click.stop="myFunctionL"
              class="btn btn-primary"
            >
              Edit
            </button>
          </div>
        </div>

        <div class="col-lg-1"></div>
        <div class="col-lg-3 pozadina">
          <form v-if="userC">
            <div class="form-group razmak3">
              <label for="exampleInputusername">Username</label>
              <input
                v-model="usernameC"
                type="text"
                class="form-control"
                id="exampleInputusername"
                aria-describedby="usernameHelp"
                placeholder="Enter username"
              />
            </div>
            <div class="form-group razmak3">
              <label for="exampleInputrank">Rank</label>
              <input
                v-model="rankC"
                type="text"
                class="form-control"
                id="exampleInputrank"
                aria-describedby="rankHelp"
                placeholder="Enter rank"
              />
            </div>
            <div class="form-group razmak3">
              <label for="examplepreference">Prefence</label>
              <input
                v-model="preferenceC"
                type="text"
                class="form-control"
                id="examplepreference"
                placeholder="preference"
              />
            </div>

            <div v-if="userC" class="form-check razmak3">
              <button
                @click.prevent="setCSGO()"
                onsubmit="return false"
                type="submit"
                class="btn btn-primary"
              >
                Save
              </button>
            </div>
          </form>
          <div v-if="!userC" class="form-group razmak3 text_color tekst">
            Username : {{ usernameC }} Rank : {{ rankC }} Preference :
            {{ preferenceC }}
          </div>
          <div v-if="!userC" class="form-check razmak3">
            <button
              type="submit"
              @click.stop="myFunctionC"
              class="btn btn-primary"
            >
              Edit
            </button>
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
import store from "@/store.js";
let db = firebase.firestore();

export default {
  name: "Profile",
  data: function () {
    return {
      usernamer: "",
      ager: "",
      countryr: "",
      user: false,
      usernamerA: "",
      rankA: "",
      preferenceA: "",
      userA: false,
      usernameL: "",
      rankL: "",
      preferenceL: "",
      userL: false,
      usernameC: "",
      rankC: "",
      preferenceC: "",
      userC: false,
    };
  },
  mounted() {
    this.getProfile();
    this.getApex();
    this.getLoL();
    this.getCSGO();
  },

  methods: {
    getProfile() {
      var docRef = db.collection("Profile").doc(store.User);
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            this.ager = doc.data().age;
            this.countryr = doc.data().country;
            this.usernamer = doc.data().username;
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    },
    getApex() {
      var docRef = db.collection("Apex").doc(store.User);
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            this.usernameA = doc.data().username;
            this.rankA = doc.data().rank;
            this.preferenceA = doc.data().preference;
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    },
    getLoL() {
      var docRef = db.collection("LoL").doc(store.User);
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            this.usernameL = doc.data().username;
            this.rankL = doc.data().rank;
            this.preferenceL = doc.data().preference;
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    },
    getCSGO() {
      var docRef = db.collection("CSGO").doc(store.User);
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            this.usernameC = doc.data().username;
            this.rankC = doc.data().rank;
            this.preferenceC = doc.data().preference;
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
          username: this.usernamer,
          age: this.ager,
          country: this.countryr,
        })

        .then((doc) => {
          console.log("Spremljeno! ", doc);
          this.user = false;
          this.getProfile();
        })
        .catch((e) => {
          console.error(e);
        });
    },
    setApex() {
      db.collection("Apex")
        .doc(store.User)
        .set({
          username: this.usernameA,
          rank: this.rankA,
          preference: this.preferenceA,
        })

        .then((doc) => {
          console.log("Spremljeno! ", doc);
          this.userA = false;
          this.getApex();
        })
        .catch((e) => {
          console.error(e);
        });
    },
    setLoL() {
      db.collection("LoL")
        .doc(store.User)
        .set({
          username: this.usernameL,
          rank: this.rankL,
          preference: this.preferenceL,
        })

        .then((doc) => {
          console.log("Spremljeno! ", doc);
          this.userL = false;
          this.getLoL();
        })
        .catch((e) => {
          console.error(e);
        });
    },
    setCSGO() {
      db.collection("CSGO")
        .doc(store.User)
        .set({
          username: this.usernameC,
          rank: this.rankC,
          preference: this.preferenceC,
        })

        .then((doc) => {
          console.log("Spremljeno! ", doc);
          this.userC = false;
          this.getCSGO();
        })
        .catch((e) => {
          console.error(e);
        });
    },
    myFunction(e) {
      e.preventDefault();
      this.user = true;
    },
    myFunctionA(e) {
      e.preventDefault();
      this.userA = true;
    },
    myFunctionL(e) {
      e.preventDefault();
      this.userL = true;
    },
    myFunctionC(e) {
      e.preventDefault();
      this.userC = true;
    },
  },
};
</script>

<style lang="scss">
.razmak2 {
  margin: 250px;
}

.razmak3 {
  margin: 50px;
}

.pado {
  margin: left 50px;
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

.popap {
  width: 50%;
  display: inline-block;
}

.center {
  margin-top: 100px;
}

.tekst {
  text-align: left;
}

.dirko {
  margin-left: 50px;
}
</style>
