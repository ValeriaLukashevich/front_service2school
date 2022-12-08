<template>

  <div id="app">
    <div v-if="loginDisplay">

      <nav>
        <router-link to="/" type="button" class="btn btn-outline-success m-1">Kodu</router-link>
        <router-link to="/about" type="button" class="btn btn-outline-success m-1">Teenused</router-link>
        <router-link to="/loginRequest" type="button" class="btn btn-outline-success m-1">Login</router-link>
      </nav>
    </div>
    <div v-else>
      MINGI JAMA
      <nav>
        <router-link to="/" type="button" class="btn btn-outline-success m-1">Kodu</router-link>
        <router-link to="/about" type="button" class="btn btn-outline-success m-1">Teenused</router-link>
        <router-link to="/profile" type="button" class="btn btn-outline-success m-1">Konto</router-link>
      </nav>

    </div>


    <!--      <router-link to="/profile" v-if="true" type="button" class="btn btn-outline-success m-1">Konto</router-link>-->

    <!--      <router-link to="/loginRequest" v-else type="button" class="btn btn-outline-success m-1">Login</router-link>-->


    <!--        <button v-if="displayLoginButton" v-on:click="login" type="button" class="btn btn-outline-success m-1">Login</button>-->
    <!--        <button v-if="displayAccountButton" v-on:click="navigateToAccount" type="button" class="btn btn-outline-success m-1">Konto</button>-->


    <router-view @updateStatusEvent="updateStatus"/>
  </div>


</template>
<script>
document.title = "Service 2 School";
export default {

  data() {
    return {
      loginDisplay: true,
      userId: sessionStorage.getItem('userId')
    }
  },

  methods: {
    updateStatus: function () {
      this.userId = sessionStorage.getItem('userId')
      this.loginDisplay = this.userId == null
    }
  },

  beforeMount() {
    this.updateStatus()
  }
}
</script>


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