<template>
  <div id="contents">
    <div id="title">Slide mode</div>
    <div class="subtitle">~~~</div>
    <div id="slide_cont">

      <el-carousel id="slide" :interval="1500" type="card" direction="vertical" height="260px">
        <el-carousel-item v-for="(imgUrl, key) in limitUrls" :key="key">
          <img class="medium" :src="imgUrl" alt="ダウンロード画像">
        </el-carousel-item>
      </el-carousel>

      <div>
        <!-- <container1 /> -->

      </div>
    <Footmenu />
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app"
import "firebase/compat/storage"

// import container1 from '../components/Container1.vue'
import Footmenu from '../components/Footmenu.vue'

export default {
  name: 'slide',
  components: {
    // container1,
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
    let self = this //Promiseの中で使用するthisを事前に設定しておく。
    storageRef.listAll().then(function(result) {
      result.items.forEach(function(ref) {
        ref.getDownloadURL()
        .then(res => {
          self.imgUrls.push(res);
          // console.log(res);
        })
      // }).catch(function(error) {
      //   console.error(error);
      })
    })
  },

  created() {

  },

  computed: {
    limitUrls() {
      return this.imgUrls.slice(0,3)
    }
  }
}
</script>


<style scoped>
#contents {
  margin: 0 5vw;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


/* carousel */
.el-carousel {
  height: 51vh;
  /* margin-bottom: 2vh; */
}

.el-carousel__item {
  width: 100%;
  height: 73%;
}

.is-active {
  height: 30vh;
  padding: 5px;
  background-color: #525252;
}

#container {
  width: 62vw;
  height: 22vh;
  margin-top: 5vh;
}

#login .log_btn {
  display: none;
}

</style>