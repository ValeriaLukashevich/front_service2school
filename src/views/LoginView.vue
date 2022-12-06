<template>
  <div>

    <div>
      <AlertError :message="errorResponse.message"/>

      <div style="width: 300px; margin: auto">
        Sisesta e-mail:
        <input v-model="email" type="text" class="form-control" placeholder="email" aria-label="email"
               aria-describedby="basic-addon1">
      </div>

      <div style="width: 300px; margin: auto">
        Siseta parool:
        <input v-model="password" type="password" class="form-control" placeholder="password" aria-label="password"
               aria-describedby="basic-addon1">
                <button v-on:click="login" type="button" class="btn btn-primary m-2">Logi sisse</button>
        <button v-on:click="navigateToCreateAccountFirst" type="button" class="btn btn-primary">Loo konto</button>
      </div>
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
