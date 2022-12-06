<template>
  <div class="ms-5 col-4">
  <table class="table table-success table-striped">
    <thead>
    <tr>
      <th>Konto info:</th>
      <th> </th>

    </tr>
    </thead>
    <tbody>
    <tr>
      <th scope="row">Eesnimi:</th>
      <td> {{ contact.contactFirstName }}</td>
    </tr>
    <tr>
      <th scope="row">Perenimi</th>
      <td> {{ contact.contactLastName }}</td>
    </tr>
    <tr>
      <th scope="row">Kontakt telefon:</th>
      <td colspan="2">{{ contact.contactPhone }}</td>
    </tr>
    <tr>
      <th scope="row">Asutus:</th>
      <td colspan="2">{{ contact.contactInstitution }}</td>
    </tr>
    </tbody>
  </table>
    <div class="d-grid gap-2 d-md-block my-5">
      <button v-on:click="navigateToAddNewOffer" class="btn btn-success" type="button">Loo pakkumus</button>
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
    }

  },
  beforeMount() {
    this.getContactInfo()
  }
}


</script>

<style scoped>

</style>