<template>
  <div id="contents">
    <div id="title">Slide Show</div>
    <div class="subtitle">Randomly display 5 photos</div>
    <div id="slide_cont">

      <el-carousel id="slide" :interval="2000" type="card" direction="vertical" height="260px">
        <el-carousel-item v-for="(imgUrl, key) in limitUrls" :key="key">
          <img class="medium" :src="imgUrl" alt="ダウンロード画像">
        </el-carousel-item>
      </el-carousel>

    <Footmenu />
    
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app"
import "firebase/compat/storage"

import Footmenu from '../components/Footmenu.vue'

export default {
  name: 'slide',
  components: {
    Footmenu
  },
  data() {
    return {
      counter: 0,
      imgUrls: [],
    }
  },
  mounted() {
    let storage = firebase.storage()
    let storageRef = storage.ref('users/user1/pictures')
    let self = this
    storageRef.listAll().then(function(result) {
      result.items.forEach(function(ref) {
        ref.getDownloadURL()
        .then(res => {
          self.imgUrls.push(res);
        })
      })
    })
  },
  computed: {
    limitUrls() {
      return this.imgUrls.slice(0,5)
    }
  }
}
</script>


<style scoped>
#contents {
  margin: 0 5vw;
}

#slide_cont {
  margin-top: 10vh;
}


img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.el-carousel {
  height: 61vh;
}

.el-carousel__item {
  width: 100%;
  height: 100%;
}

.is-active {
  height: 38vh;
  padding: 15px;
  background-color: #686868;
}

#container {
  width: 62vw;
  height: 22vh;
  margin-top: 5vh;
}

</style>