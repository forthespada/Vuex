<template>
  <div id="app">
    <my-add1></my-add1>
    <div>----------------</div>
<!--    <my-sub1></my-sub1>-->
    <my-sub2></my-sub2>
  </div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'
import Addition1 from "./components/Addition1";
import Subtraction from "./components/Subtraction";
import Subtraction2 from "./components/Subtraction2";

export default {
  name: 'App',
  components: {
    HelloWorld,
    'my-add1':Addition1,
    'my-sub1':Subtraction,
    'my-sub2':Subtraction2
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
