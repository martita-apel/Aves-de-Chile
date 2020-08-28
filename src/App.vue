<template>
  <div id="app">
    <Navbar class="navbar" />
    <b-overlay :show="overlay" rounded="md">
      <router-view />
    </b-overlay>
  </div>
</template>

<script>
// @ is an alias to /src
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Navbar from "@/components/Navbar.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Navbar,
  },
  computed: {
    ...mapState(["overlay"]),
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
.navbar {
  margin: 0;
  padding: 0;
}
</style>
