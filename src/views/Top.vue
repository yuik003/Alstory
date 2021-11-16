<template>
  <div id="contents">
    <div id="title">TOP</div>
    <div class="subtitle">AlStory</div>

    <div class="container">
      <container1 />
      <img src="../assets/images/top1.jpeg" alt="top_picture">
    </div>

    <div class="sub2">なんかキャッチコピー的なもの</div>
    <logbtn />
    <Footmenu v-if="show" />
  </div>

</template>

<script>
import container1 from '../components/Container1.vue'
import logbtn from '../components/Logbtn.vue'
import Footmenu from '../components/Footmenu.vue'

export default {
  name: 'Top',
  components: {
    container1,
    logbtn,
    Footmenu
  },
  data: function() {
    return {
      show: false
    }
  },
}
</script>

<style scoped>
#contents {
  height: 100vh;
}

.container {
  width: 250px;
  margin: 0 auto;
  position: relative;
}

.container > img {
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
</style>