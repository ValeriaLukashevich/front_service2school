<template>
  <div>
    <h3>Login</h3>
    <div class="button">


      <div>
        <span class="input-group-text" id="basic-addon1">email</span>
        <input v-model="email" type="text" class="form-control" placeholder="email" aria-label="email"
               aria-describedby="basic-addon1">
      </div>
      <div>
        <span class="input-group-text" id="basic-addon1">password</span>
        <input v-model="password" type="text" class="form-control" placeholder="password" aria-label="password"
               aria-describedby="basic-addon1">
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
      password: '',

      loginResponse: {
        userId: 0,
      },
      errorResponse: {
        message: '',
        errorCode: 0
      },
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
        this.loginResponse = response.data
        this.navigateToProfile();
      }).catch(error => {
        console.log(error)
      })
    },

    navigateToProfile: function () {
      console.log('Olen siin')
      sessionStorage.setItem('userId', this.loginResponse.userId);
      this.$router.push({
        name: 'profileRoute', query: {
          userId: this.userId
        }
      })
    }


  },


}

</script>

