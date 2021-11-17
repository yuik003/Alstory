<template>
  <div id="contents">
    <div id="title">Album</div>
    <div class="subtitle">Sub title</div>
    <!-- <reload @click="oddeven" /> -->
    <div id="reloader">
      <button class="reload" @click="oddeven()"><i class="el-icon-menu"></i></button>
    </div>

    <div id="main_cont">
      <div id="cont" v-for="(imgUrl, key) in imgUrls" :key="key">
        <container1 />
        <img class="image" :src="imgUrl" alt="ダウンロード画像">
        <p class="date">date: 20**/**/**</p>
        <p class="place">place: ＠＠公園</p>
      </div>

<!-- 奇数枚の時に空白のコンテナを表示 -->
      <div id="cont" v-if="odd">
        <container1 />
      </div>

    </div>
    <Footmenu />
  </div>
</template>

<script>
import firebase from "firebase/compat/app"
import "firebase/compat/storage"

import container1 from '../components/Container1.vue'
import Footmenu from '../components/Footmenu.vue'
// import reload from '../components/reload.vue'

export default {
  name: 'Album',
  components: {
    container1,
    Footmenu,
    // reload
  },
  data() {
    return {
      imgUrls: [],
      params: {
      }
    }
  },
  computed: {
    odd() {
      return this.$store.state.odd
    },
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
          console.log(res);
        })
      });
    }).catch(function(error) {
      console.error(error);
    })
  },
  methods: {
    oddeven() {
      if(this.imgUrls.length % 2 != 0) {
        this.$store.state.odd = true
      } else {
        this.$store.state.odd = false
      }
    }
  }
}
</script>

<style scoped>
  /* レスポンシブの場合変更必要 */

#main_cont {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: flex-start; */
  justify-content: space-around;
}

#cont {
  width: 182px;
  height: 100%;
  position: relative;
  text-align: center;
}

#cont:nth-child(odd) {
  margin-left: 5px;
}

#cont:nth-child(even) {
  margin-right: 5px;
}

/* レスポンシブの場合変更必要ここまで
奇数偶数で空白の値が異なってしまうのでガタガタになる */

#container {
  width: 160px;
  height: 180px;
  margin-bottom: 20px;
}

.image {
  position: absolute;
  top: 0;
  left: 26px;
  margin-top: 15px;
  width: 130px;
  height: 56%;
  object-fit: cover;
}

.image:nth-of-type(even) {
  position: absolute;
  top: 0;
  right: 0;
}

.date {
  font-size: small;
  position: absolute;
  top: 0;
  left: 0;
  margin: 132px 0 0 30px;
}

.date:nth-of-type(even) {
  position: absolute;
  top: 0;
  left: 0px;
}

.place {
  font-size: small;
  position: absolute;
  top: 0;
  left: 0;
  margin: 150px 0 0 30px;
}

#userID {
  display: none;
}

input {
  height: 100px;
}

#reloader {
  display: flex;
  margin-top: 60px;
  position: absolute;
  top: 10px;
  right: 10px;
}

</style>