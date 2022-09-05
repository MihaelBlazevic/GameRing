<template>
  <div class="container">
    <div class="form-group">
      <label class="text_color" for="exampleInputPassword1">
        <br /><br
      /></label>

      <input
        type="email"
        v-model="search"
        class="form-control"
        id="exampleInputPassword1"
        placeholder="Enter the email of the user you wish to see."
      />
    </div>
    <button type="button" @click="searchUser()" class="btn mybutton razmak3">
      Search
    </button>
    <div class="container razmak pozadina">
      <div class="razmak sans naslov"></div>
      <form>
        <div v-if="!user" class="form-group razmak3 text_color tekst">
          Username : {{ usernamer }}
        </div>

        <div v-if="!user" class="form-group razmak3 text_color tekst">
          Country : {{ countryr }}
        </div>

        <div v-if="!user" class="form-group razmak3 text_color tekst">
          Age : {{ ager }}
        </div>
      </form>
    </div>
    <div class="container dirko">
      <div class="row">
        <div class="col-lg-3 pozadina">
          <div class="razmak sans naslov">Apex Legends</div>

          <div v-if="!userA" class="form-group razmak3 text_color tekst">
            Username : {{ usernamerA }}
          </div>
          <div v-if="!userA" class="form-group razmak3 text_color tekst">
            Rank : {{ rankA }}
          </div>
          <div v-if="!userA" class="form-group razmak3 text_color tekst">
            Preference : {{ preferenceA }}
          </div>
        </div>
        <div class="col-lg-1"></div>
        <div class="col-lg-3 pozadina">
          <div class="razmak sans naslov">League of Legends</div>

          <div v-if="!userL" class="form-group razmak3 text_color tekst">
            Username : {{ usernameL }}
          </div>
          <div v-if="!userL" class="form-group razmak3 text_color tekst">
            Rank : {{ rankL }}
          </div>
          <div v-if="!userL" class="form-group razmak3 text_color tekst">
            Preference : {{ preferenceL }}
          </div>
        </div>

        <div class="col-lg-1"></div>
        <div class="col-lg-3 pozadina">
          <div class="razmak sans naslov">CSGO</div>

          <div v-if="!userC" class="form-group razmak3 text_color tekst">
            Username : {{ usernameC }}
          </div>
          <div v-if="!userC" class="form-group razmak3 text_color tekst">
            Rank : {{ rankC }}
          </div>
          <div v-if="!userC" class="form-group razmak3 text_color tekst">
            Preference : {{ preferenceC }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// importovi
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import store from "@/store.js";
// daje pristup database na firebaseu
let db = firebase.firestore();

export default {
  name: "Finder",
  data: function () {
    return {
      search: "",
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
    this.getApex();
    this.getLoL();
    this.getCSGO();
  },

  methods: {
    //trazi usera preko upisanog emaila te ako nade upise njegove podatke u polja gdje treba
    searchUser() {
      var docRef = db.collection("Profile").doc(this.search);
      docRef
        .get()
        .then((doc) => {
          // ako trazeni user postoji u colletionu "Profile" ispise njegove podatke pomocu funkcija   this.getApex(); ,this.getLoL(); , this.getCSGO(); i
          if (doc.exists) {
            console.log(doc.data());
            this.usernamer = doc.data().username;
            this.countryr = doc.data().country;
            this.ager = doc.data().age;
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
      this.getApex();
      this.getLoL();
      this.getCSGO();
    },
    //citanje informacija iz collection "Apex"
    getApex() {
      var docRef = db.collection("Apex").doc(this.search);
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            this.usernamerA = doc.data().username;
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
    //citanje informacija iz collection "LoL"
    getLoL() {
      var docRef = db.collection("LoL").doc(this.search);
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
    //citanje informacija iz collection "CSGO"
    getCSGO() {
      var docRef = db.collection("CSGO").doc(this.search);
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
  margin-bottom: 50px;
}
.naslov {
  color: white;
  font-weight: bold;
  font-size: 20px;
}
</style>
