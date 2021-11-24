<template>
  <div id="reloader">
    <button class="reload" @click="reset()"><i class="el-icon-menu"></i></button>
  </div>
</template>

<script>
export default {
  name: 'reload',
  methods: {
    reset() {
      // reloadする処理
      this.$router.go({path: this.$router.currentRoute.path, force: true})
    }
  }
}
</script>

<style scoped>
#reloader {
  display: flex;
  margin-top: 60px;
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>