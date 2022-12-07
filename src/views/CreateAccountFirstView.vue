<template>
  <div style="width: 500px; margin: auto">
    <AlertError :message="errorResponse.message"/>
    <div class="input-group input-group-lg">
      <span class="input-group-text">E-mail:</span>
      <input v-model="newUserRequest.email" type="text" class="form-control" aria-label="Sizing example input">
    </div>
    <div class="input-group input-group-lg">
      <span class="input-group-text" id="inputGroup-sizing-lg">Parool (min 3 sümbolit):</span>
      <input v-model="newUserRequest.password" type="password" class="form-control" aria-label="Sizing example input">
    </div>
    <div class="input-group input-group-lg">
      <span class="input-group-text" id="inputGroup-sizing-lg">Kinnita parool:</span>
      <input type="password" class="form-control" aria-label="Sizing example input">
    </div>
    <br>
    <button v-on:click="createNewAccount" type="button" class="btn btn-success">Edasi</button>
  </div>
</template>


<script>

import AlertError from "@/components/alert/AlertError";

export default {
  name: "CreateAccountFirstView",
  components: {AlertError},
  data: function () {
    return {
      newUserRequest: {
        email: '',
        password: '',
      },
      newUserResponse: {
        userId: 0,
      },
      errorResponse: {
        message: '',
        errorCode: 0
      },
    }
  },

  methods: {
    createNewAccount: function () {
      this.errorResponse.message = ''
      if (this.newUserRequest.email.length == 0 || this.newUserRequest.password.length == 0) {
        this.displayRequiredFieldsNotFilledAlert();
      } else if (this.newUserRequest.email.length < 2 || this.newUserRequest.password.length < 2) {
        this.displayTooShortEmailAndPassword();
      } else {
        this.addNewUser()
      }
    },


    addNewUser: function () {
      this.$http.post("/profile", this.newUserRequest
      ).then(response => {
        this.newUserResponse = response.data
        this.navigateToCreateAccountSecond()
      }).catch(error => {
        console.log(error)
      })
    },


    navigateToCreateAccountSecond: function () {
      sessionStorage.setItem('userId', this.newUserResponse.userId)
      this.$router.push({
        name: 'newAccount2Route'
      })
    },

    displayRequiredFieldsNotFilledAlert: function () {
      this.errorResponse.message = 'Täida kõik väljad';
    },

    displayTooShortEmailAndPassword() {
      this.errorResponse.message = 'Liiga lühike kasutaja email ja/või parool';
    }
  }
}
</script>
