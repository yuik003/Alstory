<template>
<!-- このログイン画面不要に -->
  <div id="contents">
    <div id="title">Login</div>
    <div class="subtitle">Google 認証</div>
    <div id="log_cont">
      <container1></container1>
      <div id=log_inp>
        <div class="log">Googleアカウントでログイン</div>
        <div class="log">
          <div>・メールアドレス</div>
          <input type="text">
        </div>
        <div class="log">
          <div>・パスワード</div>
          <input type="text">
          <div class="log_btn">ログイン</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import container1 from '../components/Container1.vue'

export default {
  name: 'login',
  components: {
    container1,
  }
}
</script>

<style scoped>
#contents {
  height: 100vh;
}

#log_cont {
  width: 250px;
  height: 250px;
  margin: 0 auto;
  position: relative;
}

#container {
  height: 100%;
}

#log_inp {
  position: absolute;
  top: 0;
  left: 0;
  padding-left: 20px;
  padding-top: 18px;
  line-height: 28px;
}

.log {
  margin-bottom: 8px;
}

.log input {
  width: 98%;
  height: auto;
  padding: 0 0.7em;
  border: 1px solid rgb(0,0,0);
  background-color: rgb(255,255,255);
  border-radius: 10px;
}

.log_btn {
  width: 90px;
  text-align: center;
  background-color: #C4C4C4;
  border: 1px solid #9E9E9E;
  position: absolute;
  right: 0;
  margin-top: 18px;
  margin-right: 8px;
  border-radius: 10px;
}

</style>