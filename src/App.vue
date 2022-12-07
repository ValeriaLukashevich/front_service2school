<template>

  <div id="app">
    <nav>
      <router-link to="/" type="button" class="btn btn-outline-success m-1">Kodu</router-link>
      <router-link to="/about" type="button" class="btn btn-outline-success m-1">Teenused</router-link>

      <router-link to="/profile" type="button" class="btn btn-outline-success m-1">Konto</router-link>

      <router-link to="/loginRequest"  type="button" class="btn btn-outline-success m-1">Login</router-link>
<!--      <router-link to="/profile" v-if="true" type="button" class="btn btn-outline-success m-1">Konto</router-link>-->

<!--      <router-link to="/loginRequest" v-else type="button" class="btn btn-outline-success m-1">Login</router-link>-->


<!--        <button v-if="displayLoginButton" v-on:click="login" type="button" class="btn btn-outline-success m-1">Login</button>-->
<!--        <button v-if="displayAccountButton" v-on:click="navigateToAccount" type="button" class="btn btn-outline-success m-1">Konto</button>-->




    </nav>
    <router-view />
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
      displayLoginButton: true,
      displayAccountButton: false,
    }
  },
  created() {
    this.setRequestUser();
  },

methods: {
  setRequestUser() {
    this.requestUser = window.sessionStorage.getItem('userId')
  },

  login() {
  this.displayLoginButton = false
  this.displayAccountButton = true
    this.$router.push({
      name: 'loginRoute'
    })
  },

  navigateToAccount() {
  this.displayLoginButton = false
    this.$router.push({
      name: 'loginRoute'
    })
  }
}
}
</script>