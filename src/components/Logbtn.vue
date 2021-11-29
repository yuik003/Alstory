
<template>
  <div id="login">

    <div v-if="user" key="login">
      <router-link to="/"><button id="logout" @click="logOut">ログアウト</button></router-link>
    </div>

    <div v-else key="logout" id="log_in">
      <button @click="logIn" class="log_btn">ログイン</button>
    </div>

  </div>
</template>

<script>
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/database"

export default {
  name: 'logbtn',
  computed: {
    user: {
      get() {
        return this.$store.state.user
      },
      set() {
        return this.$store.state.user
      }
    }
  },

  created() {
    JSON.parse(localStorage.getItem(this.$store.state.user))
    firebase.auth().onAuthStateChanged(user => {
      this.user = user ? user : {}
      // if(user) {

      // }
    })
  },

  methods: {
    logIn() {
      var provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider)
      .then(obj => {
        console.log('Create account: ' + obj.user.email)
        this.$store.state.user = true
        localStorage.setItem(this.$store.state.user, true)
      })
      .catch(error => {
        alert(error.message)
      })
    },
    logOut() {
      firebase.auth().signOut()
      this.$store.state.user = false
    },

    childAdded(snap) {
      const images = snap.val()
      this.user.push({
        key: snap.key,
        image: images.image
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#login {
  width: 100vw;
  height: auto;
  text-align: center;
}

.log_btn {
  width: 100px;
  /* margin: 10vh auto 0; */
  padding: 0.2em;
  text-align: center;
  background-color: #C4C4C4;
  border: 2px solid #9E9E9E;
}

#logout {
  width: 80px;
  height: 30px;
  line-height: 28px;
  font-size: small;
  background-color: #fff3e9;
  border: 2px solid #ff7700;
  color: #ff7700;
  position: fixed;
  top: 15px;
  right: 15px;
  z-index: 100;
}


</style>
