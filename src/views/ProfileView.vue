<template>
  <div class="ms-5 col-4">
  <table class="table table-success table-striped">

    <thead>
    <tr>
      <th colspan="2">Konto info</th>

    </tr>
    </thead>
    <tbody>
    <tr style="text-align:left; width: 20%">
      <th>Eesnimi:</th>
      <td> {{ contact.contactFirstName }}</td>
    </tr>
    <tr style="text-align:left; width: 20%">
      <th>Perekonnanimi</th>
      <td> {{ contact.contactLastName }}</td>
    </tr>
    <tr style="text-align:left; width: 20%">
      <th>Kontakttelefon:</th>
      <td>{{ contact.contactPhone }}</td>
    </tr>
    <tr style="text-align:left; width: 20%">
      <th>Asutus:</th>
      <td>{{ contact.contactInstitution }}</td>
    </tr>
    </tbody>
  </table>
    <div>
      <button v-on:click="navigateToAddNewOffer" class="btn btn-success" type="button">Lisa uus teenus</button>
      <button v-on:click="logOut" class="btn btn-success" type="button">Logi välja</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileView",
  data: function () {
    return {
      userId: Number(sessionStorage.getItem('userId')),
      contact:
          {
            // TODO: võiks lisada ka e-maili aadressi ning kuvada selle kasutaja staatilises infos
            // TODO: võimaldada kasutajal oma infot ka redigeerida?
            contactId: 0,
            contactFirstName: '',
            contactLastName: '',
            contactPhone: '',
            contactInstitution: ''
          }
    }

  },
  methods: {
    getContactInfo: function () {

      this.$http.get("/profile", {
            params: {
              userId: this.userId
            }
          }
      ).then(response => {
        this.contact = response.data
      }).catch(error => {
        console.log(error)
      })
    },
    navigateToAddNewOffer: function () {
      this.$router.push({
        name: 'stageOneRoute'
      })
    },

    logOut: function () {
      window.sessionStorage.removeItem('userId')
      this.$router.push({
        name: 'home'
      })
    }

  },
  beforeMount() {
    this.getContactInfo()
  }
}


</script>
