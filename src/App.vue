<template>

  <div id="app">
    <nav>
      <router-link to="/" type="button" class="btn btn-outline-success">Kodu</router-link>
      <router-link to="/about" type="button" class="btn btn-outline-success">Teenused</router-link>

      <router-link to="/profile" v-if="requestUser"  type="button" class="btn btn-outline-success">Konto</router-link>

      <router-link to="/loginRequest" v-else type="button" class="btn btn-outline-success">Login</router-link>

    </nav>
    <router-view/>
  </div>


</template>
<script>
export default {

  data() {
    return {
      requestUser: null,
    }
  },
  created() {
    this.setRequestUser();
  },
methods: {
  setRequestUser() {
    this.requestUser = window.sessionStorage.getItem('userId')
  }
}
}
</script>
<!--<style>-->
<!--#app {-->
<!--  font-family: Avenir, Helvetica, Arial, sans-serif;-->
<!--  -webkit-font-smoothing: antialiased;-->
<!--  -moz-osx-font-smoothing: grayscale;-->
<!--  text-align: center;-->
<!--  color: #2c3e50;-->
<!--}-->

<!--nav {-->
<!--  padding: 30px;-->
<!--}-->

<!--nav a {-->
<!--  font-weight: bold;-->
<!--  color: #2c3e50;-->
<!--}-->

<!--nav a.router-link-exact-active {-->
<!--  color: #42b983;-->
<!--}-->
<!--</style>-->