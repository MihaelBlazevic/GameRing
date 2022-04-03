<template>
  <div class="cointainer">
    <div class="row razmak">
      <div class="col-lg-5"></div>
      <div class="col-lg-1 pozadina">
        <div class="wrapper pozadina">
          <div class="box box2"></div>
        </div>
      </div>
      <div class="col-lg-5"></div>
    </div>
    <div class="container center pozadina">
      <div class="row">
        <div class="col-lg"></div>
      </div>

      <div class="row">
        <div class="col-lg razmak2 tekstljevo text_color">
          Username:
          <input
            id="username"
            placeholder="username"
            class="popap"
            style="display: none"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-lg razmak2 tekstljevo text_color">
          Age:
          <input
            id="age"
            placeholder="age"
            class="popap"
            style="display: none"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-lg razmak2 tekstljevo text_color">
          Country:
          <input
            id="country"
            placeholder="country"
            class="popap"
            style="display: none"
          />
        </div>
        <div class="row">
          <div class="col-lg">
            <a
              class="btn btn-primary razmak2 stajl button"
              style="background-color: #42b983"
              href="#!"
              role="button"
              onclick="myFunction()"
            >
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

<script type="text/javascript">
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
    myFunction() {
      console.log("prof");
      document.querySelector("#username").style.display = "inline-block";
      document.querySelector("#age").style.display = "inline-block";
      document.querySelector("#country").style.display = "inline-block";
    },
  },
};
</script>

<style lang="scss">
.razmak2 {
  margin: 25px;
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

.box {
  width: auto;
  height: 100px;
  background: white;
}

.box1 img {
  object-fit: cover;
}

.box2 img {
  object-fit: contain;
}

.box3 img {
  object-fit: fill;
}
</style>
