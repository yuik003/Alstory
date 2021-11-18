<template>
  <div id="uploader">
    <button><input type="file" ref="preview" @change="uploadFile"><i class="el-icon-upload2"></i><br>upload</button>
  </div>
</template>

<script>
import firebase from "firebase/compat/app"
import "firebase/compat/storage"

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
  mounted() {
    console.log(this.$store.state.files)

  },
  methods: {
    uploadFile(p) {
      console.log(this.$refs.preview.files[0]);
      const file = p.target.files[0]
      const storageRef = firebase.storage().ref('users/user1/pictures/' + file.name)

            storageRef.put(file).then(() => {
        // アップロードした画像のURLを取得
        firebase.storage().ref('users/user1/pictures/' + file.name).getDownloadURL().then((url) => {
          // アップロードした画像のURLと画像名をDBに保存
            this.$store.dispatch('user/uploadImage', { id: this.id, name: file.name, url: url })
            this.$store.state.files.push(file)
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