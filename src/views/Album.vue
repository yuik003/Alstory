<template>
  <div id="contents">
    <div id="title">My Album</div>
    <!-- <div class="subtitle">~~~</div> -->

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
    <Footmenu />
  </div>
</template>

<script>
import firebase from "firebase/compat/app"
import "firebase/compat/storage"
import "firebase/compat/firestore"

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
    let storageRef = storage.ref('users/user1/pictures/');
    let self = this;


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
  margin-top: 30px;
}

#cont {
  width: 170px;
  height: 100%;
  position: relative;
}

#container {
  width: 150px;
  height: 200px;
  margin-bottom: 20px;
}

.image {
  position: absolute;
  top: 0;
  left: 20px;
  margin-top: 20px;
  width: 130px;
  height: 51%;
  object-fit: cover;
}

.date {
  font-size: 0.7em;
  position: absolute;
  top: 0;
  left: 0;
  margin: 136px 0 0 25px;
}

.place {
  width: 75%;
  font-size: 0.7em;
  position: absolute;
  top: 0;
  left: 0;
  margin: 154px 0 0 25px;
  overflow-wrap: break-word;
}

#delete {
  position: absolute;
  top: 0px;
  left: 26px;
}

#delete i {
  font-size: 0.9em;
}

@media screen and (max-width: 279px) {
  #cont {
    margin: 0 auto;
  }
}

@media screen and (min-width: 280px) and (max-width: 319px) {
  #cont {
    width: 139px;
    margin: 0 0px;
}

  #container {
    width: 128px;
}

  .image {
    left: 15px;
    width: 105px;
  }

    .date {
    margin-left: 15px;
  }

  .place {
    margin-left: 15px;
  }

  #delete {
    left: 22px;
  }
}

@media screen and (min-width: 320px) and (max-width: 359px) {
  #cont {
    width: 153px;
    margin: 0 3px;
}

  #container {
    width: 143px;
}

  .image {
    left: 15px;
    width: 123px;
  }

    .date {
    margin-left: 17px;
  }

  .place {
    margin-left: 17px;
  }

  #delete {
    left: 23px;
  }
}

@media screen and (min-width: 360px) and (max-width: 374px) {
  #cont:nth-child(odd) {
    margin-left: 7px;
    margin-right: 6px;
  }

  #cont:nth-child(even) {
    margin-right: 7px;
  }
}

@media screen and (min-width: 375px) and (max-width: 410px) {
  #cont {
    width: 175px;
    margin: 0 6px
}

  #container {
    width: 160px;
}

  .image {
    left: 23px;
    width: 135px;
  }
}

@media screen and (min-width: 411px) {
  #cont {
    width: 182px;
}

  #container {
    width: 170px;
}

  .image {
    left: 23px;
    width: 135px;
  }
}

@media screen and (min-width: 411px) and (max-width: 413px) {
  #cont:nth-child(odd) {
    margin-left: 13px;
    margin-right: 20px;
  }

  #cont:nth-child(even) {
    margin-right: 13px;
  }
}

@media screen and (min-width: 414px) and (max-width: 539px) {

  #cont:nth-child(odd) {
    margin-left: 15px;
    margin-right: 20px;
  }

  #cont:nth-child(even) {
    margin-right: 15px;
  }
}

@media screen and (min-width: 540px) {
  #cont {
    width: 163px;
    margin: 0 8px;
}

  #container {
    width: 98%;
}

  .image {
    left: 12px;
    width: 136px;
  }

  .date {
    margin-left: 17px;
  }

  .place {
    margin-left: 17px;
  }

  #delete {
    top: 0px;
    left: 20px;
  }
}


@media screen and (min-width: 768px) {
  #cont {
    width: 170px;
    margin: 0 11px;
}

  .image {
    left: 13px;
    width: 145px;
  }
}

@media screen and (min-width: 1024px) {
  #cont {
    width: 182px;
}

  .image {
    width: 155px;
  }
}

</style>