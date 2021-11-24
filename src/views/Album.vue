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
          <button @click="deleteImage(imgUrl)">
            <i class="el-icon-close"></i>
          </button>
        </div>

      </div>
    </div>
    <Footmenu />
  </div>
</template>

<script>
import axios from 'axios'

import firebase from "firebase/compat/app"
import "firebase/compat/storage"

import container1 from '../components/Container1.vue'
import Footmenu from '../components/Footmenu.vue'

export default {
  name: 'Album',
  components: {
    container1,
    Footmenu,
  },
  data() {
    return {
      imgUrls: [],
    }
  },
  computed: {
    count: {
      get() {
        return this.$store.state.count
      },
      set() {
        return this.$store.state.count
      }
    }
  },
  mounted() {
    console.log(this.$store.state.files)
    let storage = firebase.storage()
    let storageRef = storage.ref('users/user1/pictures/')
    let self = this //Promiseの中で使用するthisを事前に設定しておく。
    console.log(self.imgUrls);
    storageRef.listAll().then(function(result) {
      result.items.forEach(function(ref) {
        ref.getDownloadURL()
        .then(res => {
          self.imgUrls.push(res);
        })
        self.$store.state.count++;
      });
      console.log(self.$store.state.count)
    }).catch(function(error) {
      console.error(error);
    })
  },
  methods: {
    deleteImage(p) {
      console.log(p)
      let storage = firebase.storage()
    //   let desertRef = storage.ref().child().remove();
    // deleteImage() {
    //   let storage = firebase.storage()
      let desertRef = storage.ref('users/user1/pictures/' + this.$store.state.files.name);
      desertRef.delete().then(function() {
      }).catch(function(error) {
        console.error(error)
      });
    },
    dataSave() {
      this.$store.state.count += 1
      axios.post(
        'https://firestore.googleapis.com/v1/projects/alstory-44284/databases/(default)/documents/image-meta',
        {
          fields: {
            imageName: {
              stringValue: this.$store.state.files.name
            },
            imageDate:{
              stringValue: this.$store.state.files.lastMobifiedDate
            },
            count: {
              doubleValue: this.$store.state.count
            }
          }
        }
      )
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
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

#save {
  position: absolute;
  top: 100px;
  left: 0;
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