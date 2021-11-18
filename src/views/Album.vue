<template>
  <div id="contents">
    <div id="title">Album</div>
    <div class="subtitle">Sub title</div>
    <!-- <reload @click="oddeven" /> -->
    <!-- <div id="reloader">
      <button class="reload" @click="oddeven()"><i class="el-icon-refresh"></i></button>
    </div> -->

    <div id="main_cont">
      <div id="cont" v-for="(imgUrl, key) in imgUrls" :key="key">
        <container1 />
        <img class="image" :src="imgUrl" alt="image">
        <p class="date">date: 20**/**/**</p>
        <p class="place">place: ＠＠公園</p>
      
        <div id="delete">
          <button @click="deleteImage()">
            <i class="el-icon-close"></i>
          </button>
        </div>

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
      },
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
    },
    deleteImage() {
      let storage = firebase.storage()
      let desertRef = storage.ref('users/user1/pictures/');
      desertRef.delete().then(function() {
      }).catch(function(error) {
        console.error(error)
      });
    }
  }
}
</script>

<style scoped>
#main_cont {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
}

#cont {
  width: 182px;
  height: 100%;
  position: relative;
}

#cont:nth-child(odd) {
  margin-left: 5px;
}

#cont:nth-child(even) {
  margin-right: 5px;
}



#container {
  width: 160px;
  height: 180px;
  margin-bottom: 20px;
}

.image {
  position: absolute;
  top: 0;
  left: 26px;
  margin-top: 20px;
  width: 130px;
  height: 56%;
  object-fit: cover;
}

.date {
  font-size: small;
  position: absolute;
  top: 0;
  left: 0;
  margin: 136px 0 0 30px;
}

.place {
  font-size: small;
  position: absolute;
  top: 0;
  left: 0;
  margin: 153px 0 0 30px;
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
  top: 20px;
  right: 20px;
}

#delete {
  position: absolute;
  font-size: small;
  top: 2px;
  left: 30px;
}

#delete i {
  font-size: small;
}

@media screen and (min-width: 414px) {
  #cont:nth-child(odd) {
    margin-left: 15px;
    margin-right: 20px;
  }

  #cont:nth-child(even) {
    margin-right: 15px;
  }
}

/* @media screen and (min-width: 600px) {
  #cont:nth-child(odd) {
    margin-left: 15px;
  }

  #cont:nth-child(even) {
    margin-right: 15px;
  }
} */

</style>