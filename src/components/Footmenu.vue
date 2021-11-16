<template>
  <div id="menu">
    <div id="out_hamb" v-if="show" @click="clickshow"></div>
    <div id="hamb_menu" @click="clickshow">
      <span></span>
      <span></span>
    </div>
    
    <transition name="fade">
      <div id="foot" v-if="show">
        <router-link to="/slide"><button><i class="el-icon-files"></i><br>slide</button></router-link>
        <router-link to="/album"><button><i class="el-icon-menu"></i><br>album</button></router-link>
        <button><input type="file" raccept="image/*"><i class="el-icon-upload2"></i><br>upload</button>
      </div>
    </transition> 
  </div>
</template>

<script>

export default {
  name: 'footmenu',
  computed: {
    show() {
      return this.$store.state.show
    }
  },
  methods: {
    clickshow() {
      if(this.$store.state.show == false) {
        this.$store.state.show = true
      } else {
        this.$store.state.show = false
      }
    } 
  }
}
</script>


<style>
#out_hamb {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
}

/* hambmenu */
#hamb_menu {
  position: fixed;
  right: 15px;
  bottom: 17px;
  width: 55px;
  height: 50px;
  line-height: 6px;
  padding: 18px 16px;
  background-color: #FFE3CA;
  box-shadow: 2px 3px 3px rgb(180, 180, 180);
  border-radius: 15px;
}

#hamb_menu span {
    display: inline-block;
    width: 24px;
    border-bottom: 2px solid #FF7A00;
}

#hamb_menu span:nth-of-type(2) {
  transform: translateY(-9px) rotate(90deg);
}

/* footermenu animation */

#foot {
width: 100vw;
height: 80px;
background-color: rgb(255,255,255);
z-index: 100;
position: fixed;
bottom: 0;
left: 0;
}

#foot {
  display: flex;
  text-align: center;
}

#foot a {
  width: 33%;
  list-style: none;
  line-height: 23px;
  margin: 8px 0;
  padding: 10px 0;
  color: rgb(88, 35, 0);
  font-size: small;
}

#foot button:nth-child(3) {
  width: 33%;
  list-style: none;
  line-height: 22px;
  margin: 8px 0;
  padding: 10px 0;
  color: rgb(88, 35, 0);
  font-size: small;
  position: relative;
}

button i {
  font-size: x-large;
}

a {
  text-decoration: none;
}

input {
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}


a:link, a:visited, a:hover, a:active {
  color: rgb(88, 35, 0);
}

a:nth-of-type(2) {
border-left: 1px solid rgba(112, 112, 112, 0.3);
border-right: 1px solid rgba(112, 112, 112, 0.3);
}

.fade-enter-active, .fade-leave-active {
  transform: translate(0px, 0px);
  transition: transform 300ms;
}

.fade-enter, .fade-leave-to {
  transform: translateY(80px);
} 

</style>