<template>
    <div firebase id="firebase">
		{{ users }}
      <ul is="transition-group">
        <li v-for="user in users" class="user" :key="user['.key']">
          <span>{{user.name}} - {{user.email}}</span>
          <button v-on:click="removeUser(user)">X</button>
        </li>
      </ul>
      <form id="form" v-on:submit.prevent="addUser">
        <input v-model="newUser.name">
        <input v-model="newUser.email">
        <input type="submit" value="Add User">
      </form>
      <ul class="errors">
        <li v-show="!validation.name">Name cannot be empty.</li>
        <li v-show="!validation.email">Please provide a valid email address.</li>
      </ul>
    </div>
</template>


<script>
import Vue from 'vue'
import firebase from 'firebase'
import VueFire from 'vuefire'
Vue.use( VueFire )

var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// Setup Firebase
var config = {
  apiKey: "AIzaSyAi_yuJciPXLFr_PYPeU3eTvtXf8jbJ8zw",
  authDomain: "vue-demo-537e6.firebaseapp.com",
  databaseURL: "https://vue-demo-537e6.firebaseio.com",

    //apiKey: 		"AIzaSyA3N0C_CMU-e_2u044J1wofjYbRxEKKV_s",
    //authDomain: 	"vueglass-email-signup.firebaseapp.com",
    //databaseURL: 	"https://vueglass-email-signup.firebaseio.com",
    //projectId: 		"vueglass-email-signup",
    //storageBucket: 	"vueglass-email-signup.appspot.com",
    //messagingSenderId: "1044699624102"
}

console.log(1)
firebase.initializeApp( config );
console.log(2)
var usersRef = firebase.database().ref('users');
console.log(3)


export default {
	name:		"Firebase",

	//props:		{ users: { default: () => [] } },

	created()	{ console.log("created firebase",this) },
	mounted()	{ console.log("Firebase mounted",this) },

  // initial data
	data()		{ ;;return {
		newUser: {
		  name: '',
		  email: ''
		},
					};;
				},
  // https://github.com/vuejs/vuefire
  firebase: {
    users: usersRef
  },
  // computed property for form validation state
  computed: {
    validation: function () {
      return {
        name: !!this.newUser.name.trim(),
        email: emailRE.test(this.newUser.email)
      }
    },
    isValid: function () {
      var validation = this.validation
      return Object.keys(validation).every(function (key) {
        return validation[key]
      })
    }
  },
  // methods
  methods: {
    addUser: function () {
      if (this.isValid) {
        usersRef.push(this.newUser)
        this.newUser.name = ''
        this.newUser.email = ''
      }
    },
    removeUser: function (user) {
      usersRef.child(user['.key']).remove()
    }
  }
}
console.log(3)

</script>


<style>
#firebase 				{ font-family: Helvetica, Arial, sans-serif; }

#firebase ul 			{ padding: 0; }

#firebase .user 		{ height: 30px; line-height: 30px; padding: 10px; }
#firebase .user 		{ border-top: 1px solid #eee; overflow: hidden; transition: all .25s ease; }
#firebase .user:last-child 	{ border-bottom: 1px solid #eee; }

#firebase .v-enter, .v-leave-to { height: 0; padding-top: 0; padding-bottom: 0; border-top-width: 0; border-bottom-width: 0; }

#firebase .errors 		{ color: #f00; }
<style>
