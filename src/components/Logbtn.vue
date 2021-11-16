
<template>
  <div id="login">

    <div v-if="user.uid" key="login">
      <button id="logout" @click="logOut">ログアウト</button>
      <!-- <p id="userID">user：{{user.email}}</p> -->
    </div>

    <div v-else key="logout">
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
  data() {
    return {
      user: {},
    }
  },

    created() {
    firebase.auth().onAuthStateChanged(user => {
      this.user = user ? user : {}
      const ref_image = firebase.database().ref('image')
      if (user) {
        this.tweetList = []
        //childAddedアイテムのリストを取得するか、アイテムのリストへの追加がないかをリッスンする
        //limitToLast後方からn件取得
        ref_image.limitToLast(20).on('child_added', this.childAdded);
      } else {
        ref_image.limitToLast(20).off('child_added', this.childAdded);
      }
      })
    },

  methods: {
    logIn() {
      var provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider)
      .then(obj => {
        console.log('Create account: ' + obj.user.email)
      })
      .catch(error => {
        alert(error.message)
      })
    },
    logOut() {
      firebase.auth().signOut()
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#login {
  text-align: center;
}

.log_btn {
  width: 100px;
  margin: 10vh auto 0;
  padding: 0.2em;
  text-align: center;
  background-color: #C4C4C4;
  border: 2px solid #9E9E9E;
}

/* #userID {
  position: absolute;
  bottom: 5px;
  left: 10px;
  font-size: small;
} */

</style>
