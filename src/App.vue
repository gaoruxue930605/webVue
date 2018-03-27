<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
   <Button></Button>
    <router-view/>
  </div>
</template>

<script>
import { Button, Table } from 'iview';
Vue.component('Button', Button);
Vue.component('Table', Table);
export default {
  name: "App",
};
</script>
<style>
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
