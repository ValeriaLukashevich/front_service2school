<template>
  <div>
    <div class="input-group input-group-lg">
      <span class="input-group-text">Email:</span>
      <input v-model="newUserRequest.email" type="text" class="form-control" aria-label="Sizing example input">
    </div>
    <div class="input-group input-group-lg">
      <span class="input-group-text" id="inputGroup-sizing-lg">Parool:</span>
      <input v-model="newUserRequest.password" type="password" class="form-control" aria-label="Sizing example input">
    </div>
    <div class="input-group input-group-lg">
      <span class="input-group-text" id="inputGroup-sizing-lg">Kinnita parool:</span>
      <input type="password" class="form-control" aria-label="Sizing example input">
    </div>
    <br>
    <button v-on:click="addNewUser" type="button" class="btn btn-primary">Edasi</button>
  </div>
</template>

<script>
export default {
  name: "CreateAccountFirstView",
  data: function () {
    return {
      newUserRequest: {
        email: '',
        password: '',
      },
      newUserResponse: {
        userId: 0,
      }
    }
  },

  methods: {

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
    }

  }
}
</script>
