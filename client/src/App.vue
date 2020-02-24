<template>
  <div id="app">
    <!-- <h1>Halo</h1> -->
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
/* eslint-disable */
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
