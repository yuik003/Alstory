<template>
  <div id="contents">
    <div id="title">Album</div>
    <div class="subtitle">Sub title</div>

    <div id="main_cont">
      <div id="cont" v-for="(imgUrl, index) in imgUrls" :key="index">
        <container1 />
        <img class="image" :src="imgUrl" alt="image">
        <p class="date">date: {{ inpDate[index] }}</p>
        <p class="place">name: {{ inpName[index] }}</p>
      
        <div id="delete">
          <button @click="deleteImage(imgUrl)">
            <i class="el-icon-close"></i>
          </button>
        </div>

      </div>
    </div>
    <!-- <del-check v-if="check" /> -->
    <Footmenu />
  </div>
</template>

<script>
import firebase from "firebase/compat/app"
import "firebase/compat/storage"
import "firebase/compat/firestore"

import container1 from '../components/Container1.vue'
import Footmenu from '../components/Footmenu.vue'
// import DelCheck from '../components/DelCheck.vue'

export default {
  name: 'Album',
  components: {
    container1,
    Footmenu,
    // DelCheck
  },
  data() {
    return {
      imgUrls: [],
      resname: '',
      inpName: [],
      inpDate: []
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
    },
    inp: {
      get() {
        return this.$store.state.inp
      },
      set() {
        return this.$store.state.inp
      }
    },
  },
  mounted() {
    let storage = firebase.storage()
    // let db = firebase.firestore();
    let storageRef = storage.ref('users/user1/pictures/');
    let self = this;

    // let fields = db.collection('image-meta').get()
    // console.log(fields)

    storageRef.listAll().then(function(result) {
      result.items.forEach(function(ref) {
        ref.getDownloadURL()
        .then(res => {
          self.imgUrls.push(res);
          self.$store.state.count++;

          let db = firebase.firestore();
          storageRef.listAll().then(function(result) {
            // console.log(result)
            for(let i = 0; i < result.items.length; i++) {
              if(res.match(result.items[i].name)) {
                self.resname = result.items[i].name
                // console.log(self.resname)

                db.collection('image-meta').where('name', '==', self.resname).get()
                .then(snapshot => {
                  snapshot.forEach(doc => {
                    let datetime = new Date((doc.data().lastday.seconds) * 1000)
                    // console.log(`${doc.id}: ${doc.data().name}: ${datetime.toLocaleDateString()}`)

                    self.inpName.push(doc.data().name)
                    self.inpDate.push(datetime.toLocaleDateString())
                  })
                })
              }
            }
          })
        });
      })
    }).catch(function(error) {
      console.error(error);
    })
  },
  methods: {
    deleteImage(p) {
      let storage = firebase.storage()
      let storageRef = storage.ref('users/user1/pictures/')

      let db = firebase.firestore();
      let self = this


      storageRef.listAll().then(function(result) {
        // console.log(result)
        for(let i = 0; i < result.items.length; i++) {
          if(p.match(result.items[i].name)) {
            self.resname = result.items[i].name
          }
        }

        let desertRef = storage.ref('users/user1/pictures/' + self.resname);
        desertRef.delete().then(function() {
          }).catch(function(error) {
            console.error(error)
        });
        

        db.collection('image-meta').where('name', '==', self.resname).get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            // console.log(`${doc.id}: ${doc.data().name}`)
            db.collection('image-meta').doc(doc.id).delete().then(() => {
              console.log('kiemasita');
            }).catch((error) => {
              console.error('error', error);
            })
          })
        })
      })
      setTimeout( function() {
        this.$router.go({path: this.$router.currentRoute.path, force: true})
      }.bind(this),500)
    },
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
  margin: 154px 0 0 30px;
}

.input {
  font-size: small;
  position: absolute;
  top: 0;
  right: 0;
  margin: 136px 30px 0 30px;
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