<template>
  <div style="width: 500px; margin: auto">
  <div>
    <div class="input-group input-group-lg">
      <span class="input-group-text">Eesnimi:</span>
      <input v-model="contactRequest.firstName" type="text" class="form-control" aria-label="Sizing example input">
    </div>
    <div class="input-group input-group-lg">
      <span class="input-group-text" id="inputGroup-sizing-lg">Perekonnanimi:</span>
      <input v-model="contactRequest.lastName" type="text" class="form-control" aria-label="Sizing example input">
    </div>
    <div class="input-group input-group-lg">
      <span class="input-group-text" id="inputGroup-sizing-lg">Asutuse nimi:</span>
      <input v-model="contactRequest.institution" type="text" class="form-control" aria-label="Sizing example input">
    </div>
    <div class="input-group input-group-lg">
      <span class="input-group-text" id="inputGroup-sizing-lg">Kontakttelefon:</span>
      <input v-model="contactRequest.phone" type="text" class="form-control" aria-label="Sizing example input">
    </div>
    <button v-on:click="navigateBack" type="button" class="btn btn-success m-1">Tagasi</button>
    <button v-on:click="addNewContact" type="button" class="btn btn-success m-1">Salvesta</button>
  </div>
  </div>
</template>

<script>

export default {
  name: "CreateAccountSecondView",
  data: function () {
    return {
      contactRequest: {
        firstName: '',
        lastName: '',
        phone: '',
        institution: '',
        userId: Number(sessionStorage.getItem('userId'))
      },
      contactResponse: {
        firstName: '',
        lastName: '',
        phone: '',
        institution: '',
      },
      errorResponse: {
        message: '',
        errorCode: 0
      },
    }

  },
  methods: {
    addNewContact: function () {
      this.$http.post("/contact", this.contactRequest
      ).then(response => {
        this.contactResponse = response.data;
        this.navigateToProfile()
      }).catch(error => {
        console.log(error)
      })
    },


    navigateToProfile: function () {
      // sessionStorage.setItem('userId', this.newUserResponse.userId)
      this.$router.push({
        name: 'profileRoute'
      })
    },

    navigateBack: function () {

      this.$router.push({
        name: 'newAccount1Route'
      })

    }
  }
}
</script>




















