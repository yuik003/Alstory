<template>
  <div id="app">
    <div id="head"></div>
    <router-view></router-view>
    <logbtn />
  </div>
</template>

<script>
import logbtn from './components/Logbtn.vue'

export default {
  name: 'App',
  components: {
    logbtn
  },
  datas() {
    return this.$store.state.dates
  }
}
</script>

<style>
#contents {
  background-color: #FFF4DE;
  padding-top: 60px;
  padding-bottom: 20px;
  /* position: relative; */
}

#app {
  width: 100vw;
  height: 100vh;
  background-color: #FFF4DE;
}

#head {
  width: 100%;
  height: 60px;
  background-color: #FFE3CA;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 1px 3px 3px rgb(180, 180, 180);
  z-index: 100;
  }

#title {
  line-height: 60px;
  font-size: large;
  position: fixed;
  top: 0;
  left: 50%;
  -webkit-transform: translate(-50%, 0);
  z-index: 100;
}

.subtitle {
  text-align: center;
  margin: 3vh 0 3vh 0;
}

#container span {
  width: 6px;
  height: 6px;
  border: 1px solid #9E9E9E;
  background-color: #C4C4C4;
  position: absolute;
  border-radius: 50%;
}

#container span:nth-child(1) {
  top: 6px;
  left: 8px;
}

#container span:nth-child(1) {
  top: 6px;
  left: 8px;
}

#container span:nth-child(2) {
  top: 6px;
  right: 8px;
}

#container span:nth-child(3) {
  bottom: 6px;
  left: 8px;
}

#container span:nth-child(4) {
  bottom: 6px;
  right: 8px;
}

#log_in {
  width: 100%;
  position: fixed;
  bottom: 26vh;
  }

</style>