<template>
  <div>
  <div>
    <h1>Minu konto info:</h1>
    <h2>

    </h2>
  </div>
  </div>
</template>

<script>
export default {
  name: "ProfileView",
  data: function () {
    return {
      contact: [
        {
          contactId: 0,
          contactFirstName: '',
          contactLastName: '',
          contactPhone: '',
          contactInstitution: '',

        }
      ]
    }

  },
  methods: {
    getContactInfo: function () {
      this.$http.get("/contact")
          .then(response => {
            this.contact = response.data
          })
          .catch(error => {
            console.log(error)
          })
    },
    beforeMount() {
      this.getContactInfo()
    }
  }
}
</script>

<style scoped>

</style>