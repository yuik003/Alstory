<template>
  <div id="uploader">
    <button><input type="file" ref="preview" @change="uploadFile"><i class="el-icon-upload2"></i><br>upload</button>
  </div>
</template>

<script>
import firebase from "firebase/compat/app"
import "firebase/compat/storage"
import "firebase/compat/firestore"

export default {
  name: 'upload',
  computed: {
    files: {
      get() {
        return this.$store.state.files
      },
      set() {
        return this.$store.state.files
      }
    },
  },
  methods: {
    uploadFile(p) {
      this.$store.state.count++
      const file = p.target.files[0]

      const storageRef = firebase.storage().ref('users/user1/pictures/' + file.name)

      const db = firebase.firestore();
      let docId = db.collection('image-meta').doc().id;

      db.collection('image-meta').doc(docId).set({
        docid: docId,
        name: file.name,
        lastday: file.lastModifiedDate,
        id: this.$store.state.count
      })


      storageRef.put(file).then(() => {
        firebase.storage().ref('users/user1/pictures/' + file.name).getDownloadURL().then(() => {
          setTimeout( function() {
            this.$router.go({path: this.$router.currentRoute.path, force: true})
          }.bind(this),1000)
        }).catch((error) => { 
            console.log(error)
        })
      })
    },
  }
}
</script>

<style scoped>
#save {
  position: absolute;
  top: 50px;
  left: 0;
}
</style>