<template>

  <div id="app">
    <nav>
      <router-link to="/" type="button" class="btn btn-outline-success m-1">Kodu</router-link>
      <router-link to="/about" type="button" class="btn btn-outline-success m-1">Teenused</router-link>

      <router-link to="/profile" v-if="requestUser" type="button" class="btn btn-outline-success m-1">Konto</router-link>

      <router-link to="/loginRequest" v-else type="button" class="btn btn-outline-success m-1">Login</router-link>

    </nav>
    <router-view/>
  </div>


</template>

<style>
#app {
  text-align: center;
  max-width: 960px;
  margin: auto;
}

nav {
  padding: 30px;
}
</style>

<script>
document.title = "Service 2 School";
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