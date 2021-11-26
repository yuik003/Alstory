<template>
  <div id="contents">
    <div id="title">TOP</div>
    <div class="subtitle">AlStory</div>

    <div class="containerT">
      <container1 />
      <img src="../assets/images/top1.jpeg" alt="top_picture">
    </div>

    <div class="sub2">なんかキャッチコピー的なもの</div>
    <!-- <logbtn /> -->
    <div v-if="user">
      <div id="here_anime">
        <div id="here" class="animate__animated animate__bounce"><i class="el-icon-bottom"></i></div>
      </div>
      <Footmenu />
    </div>
  </div>

</template>

<script>
import container1 from '../components/Container1.vue'
// import logbtn from '../components/Logbtn.vue'
import Footmenu from '../components/Footmenu.vue'

export default {
  name: 'Top',
  components: {
    container1,
    // logbtn,
    Footmenu
  },
  computed: {
    user: {
      get() {
        return this.$store.state.user
      },
      set() {
        return this.$store.state.user
      }
    }
  }
}
</script>

<style scoped>
#contents {
  height: 100vh;
}

.containerT {
  width: 250px;
  margin: 0 auto;
  position: relative;
}

.containerT > img {
  width: auto;
  height: 140px;
  margin: 20px;
  position: absolute;
  top: 0;
  left: 0;
}

.sub2 {
  margin-top: 8vh;
  text-align: center;
}

.subtitle {
  padding: 2vh 0;
}

#here {
  color: #FF7A00;
  font-size: xx-large;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 12px;
  position: fixed;
  right: 22px;
  bottom: 80px;
}

#here_anime {
  width: 40px;
  height: 40px;
  position: fixed;
  right: 22px;
  bottom: 80px;
  z-index: 10;
  background-color: #FFF4DE;
  animation: fadeout 1s ease 5s 1 forwards;
  }

@keyframes fadeout {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

</style>