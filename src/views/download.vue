<template>
<!-- テストページのため不要 -->
  <div id="img">
    <!-- <div id="img_disp" v-for="(imgUrl, key) in imgUrls" :key="key">
      <img id="image" :src="imgUrl" alt="ダウンロード画像" />
    </div> -->
    <Upload />
  </div>
</template>


<script>
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

import Upload from '../components/Upload.vue'

export default {
  components: {
    Upload
  },
  data() {
    return {
      imgUrls: [],
    }
  },
  mounted: function() {
    let storage = firebase.storage()
    let storageRef = storage.ref('pictures')
    let self = this //Promiseの中で使用するthisを事前に設定しておく。
    storageRef.listAll().then(function(result) {
      result.items.forEach(function(ref) {
        ref.getDownloadURL()
        .then(res => {
          self.imgUrls.push(res);
          console.log(res);
        })
      });
    }).catch(function(error) {
      console.error(error);
    })
  },
}
</script>

<style scoped>
#img {
  margin-top: 60px;
}

#image {
  width: 30%;
}
</style>