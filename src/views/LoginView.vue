
<template>
  <div>
    <h3>Login</h3>
    <div class="button">


      <div class="w-50">
        <span class="input-group-text mb-3" id="basic-addon1">email</span>
        <input v-model="email" type="text" class="form-control" placeholder="email" aria-label="email" aria-describedby="basic-addon1">
      </div>
      <div class="w-25">
        <span class="input-group-text" id="basic-addon1">password</span>
        <input v-model="password" type="text" class="form-control" placeholder="password" aria-label="password" aria-describedby="basic-addon1">
      </div>
      <button v-on:click="login" type="button" class="btn btn-primary">logi sisse</button>



    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      this.$http.get("/login", {
            params: {
              email: this.email,
              password: this.password
            }
          }
      ).then(response => {
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
  }
}
</script>

<style scoped>

</style>