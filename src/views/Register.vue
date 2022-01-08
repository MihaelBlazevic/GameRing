<template>
 <div class="about">
 <h1>This is a Register page</h1>
 <div class="container">
 <div class="row">
 <div class="col-sm"></div>
 <div class="col-sm">
 <form>
 <div class="form-group">
 <label for="exampleInputEmail1">Email address</label>
 <input type="email" v-model="email" class="form-control"
id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter
email" />
 
 </div>
 <br>
 <div class="form-group">
 <label for="exampleInputPassword1">Password</label>
 <input type="password" v-model='password' class="form-control"
id="exampleInputPassword1" placeholder="Password" />
 </div>
 <br>
 <div class="form-group">
 <label for="exampleInputPassword2">Repeat password</label>
 <input type="password" v-model="passwordRepeat" class="form-control"
id="exampleInputRepeatPassword2" placeholder="Password" />
 </div>
 <br>
 <button type="button" @click="register" class="btn btn-primary">Submit</button>
 </form>
 </div>
 <div class="col-sm"></div>
 </div>
 </div>
 </div>
</template>
<script>
import { firebase } from '@/firebase.js';

export default{
    name: 'Register',
    data(){
        return{
            password:'',
            passwordRepeat:'',
            email:'',
        };
    },
    methods: {
        register() { 
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
         function(){
             console.log('Registered!');
         }).catch(function(error){
                console.error('Error', error);
         }   
         ); 
        },
    },
};
</script>
