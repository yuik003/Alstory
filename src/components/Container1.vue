<template>
    <div id="container">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
</template>

<script>
export default {
  name: 'container1',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#container {
  width: 250px;
  height: 180px;
  margin: 0 auto;
  text-align: center;
  background-color: #D9D9D9;
  box-shadow: 3px 3px 3px rgb(180, 180, 180);
  position: relative;
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
</style>
