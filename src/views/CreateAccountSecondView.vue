<template>
  <div>
    <div class="input-group input-group-lg">
      <span class="input-group-text">Eesnimi:</span>
      <input type="text" class="form-control" aria-label="Sizing example input">
    </div>
    <div class="input-group input-group-lg">
      <span class="input-group-text" id="inputGroup-sizing-lg">Perekonnanimi:</span>
      <input type="text" class="form-control" aria-label="Sizing example input">
    </div>
    <div class="input-group input-group-lg">
      <span class="input-group-text" id="inputGroup-sizing-lg">Asutuse nimi:</span>
      <input type="text" class="form-control" aria-label="Sizing example input">
    </div>
    <div class="input-group input-group-lg">
      <span class="input-group-text" id="inputGroup-sizing-lg">Kontakttelefon:</span>
      <input type="text" class="form-control" aria-label="Sizing example input">
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
      this.$http.post("/some/path", this.contactRequest
      ).then(response => {
        // ÕNNELIK SÕNuMi SAATMINE
        // kurtsume siit välja navigate to next page
        console.log(response.data)
      }).catch(error => {
        console.log(error)
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




















