<template>
  <div>

    <div class="ms-5 col-4">
      <AlertError :message="errorResponse.message"/>

      <div class="w-50">
        <span class="input-group-text mb-3" id="basic-addon1">email</span>
        <input v-model="email" type="text" class="form-control" placeholder="email" aria-label="email"
               aria-describedby="basic-addon1">
      </div>
      <div class="w-50">
        <span class="input-group-text" id="basic-addon1">password</span>
        <input v-model="password" type="password" class="form-control" placeholder="password" aria-label="password"
               aria-describedby="basic-addon1">
      </div>
      <button v-on:click="login" type="button" class="btn btn-success">Logi sisse</button>
      <br> <br>
      <button v-on:click="navigateToCreateAccountFirst" type="button" class="btn btn-success">Loo konto</button>


    </div>
  </div>
</template>

<script>
import AlertError from "@/components/alert/AlertError";

export default {
  name: "Login",
  components: {AlertError},
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
      this.errorResponse.message = ''
      if (this.email.length == 0 || this.password.length == 0) {
        this.displayRequiredFieldsNotFilledAlert();
      } else {
        this.loginRequest();
      }
    },

    displayRequiredFieldsNotFilledAlert: function () {
      this.errorResponse.message = 'Täida kõik väljad';
    },

    loginRequest: function () {
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
      sessionStorage.setItem('userId', this.loginResponse.userId);
      this.$router.push({
        name: 'profileRoute', query: {
          userId: this.userId
        }
      })
    },

    navigateToCreateAccountFirst: function () {
      this.$router.push({
        name: 'newAccount1Route'

      })
    }


  },

}
</script>
