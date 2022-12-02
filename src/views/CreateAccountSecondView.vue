<template>
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
    <button v-on:click="navigateBack" type="button" class="btn btn-primary">Tagasi</button>
    <button v-on:click="addNewContact" type="button" class="btn btn-primary">Salvesta</button>
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
      }
    }

  },
  methods: {
    addNewContact: function () {
      this.$http.post("/contact", this.contactRequest
      ).then(response => {
        // ÕNNELIK SÕNuMi SAATMINE

        this.navigateToProfile()
        console.log(response.data)
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




















