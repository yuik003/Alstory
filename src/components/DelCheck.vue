<template>
  <div id="aroundcheck" v-if="check" @click="clickcheck">
    <div id="checker">
      <div>削除？</div>
      <button v-if="check" @click="clickcheck">○</button>
      <button v-if="check" @click="clickcheck">×</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DelChecker',
  computed: {
    check() {
      return this.$store.state.check
    }
  },
  methods: {
    clickcheck() {
      if(this.$store.state.check == false) {
        this.$store.state.check = true
      } else {
        this.$store.state.check = false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#aroundcheck {
  width: 100vw;
  height: 100vh;
  background-color: rgba(88, 88, 88, 0.404);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  text-align: center;
  padding-top: 40vh;
}

#checker {
  width: 200px;
  height: 120px;
  background-color: rgb(255, 255, 255);
  box-shadow: 3px 3px 3px rgb(105, 105, 105);
  border-radius: 20px;
  text-align: center;
  display: inline-block;
}

#checker div {
  font-size: large;
  padding: 20px 0;
}

#checker button {
  width: 50px;
  height: 30px;
  background-color: rgba(255, 182, 133, 0.603);
  border-radius: 10px;
  line-height: 30px;
  margin: 0 20px;
}

</style>
