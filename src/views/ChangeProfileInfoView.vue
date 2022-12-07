<template>
  <div style="width: 500px; margin: auto">
    <div>
      <AlertError :message="errorResponse.message"/>
      <div class="input-group input-group-lg">
        <span class="input-group-text">Eesnimi:</span>
        <input v-model="contactUpdate.firstName" type="text" class="form-control" aria-label="Sizing example input">
      </div>
      <div class="input-group input-group-lg">
        <span class="input-group-text" id="inputGroup-sizing-lg">Perekonnanimi:</span>
        <input v-model="contactUpdate.lastName" type="text" class="form-control" aria-label="Sizing example input">
      </div>
      <div class="input-group input-group-lg">
        <span class="input-group-text" id="inputGroup-sizing-lg">Asutuse nimi:</span>
        <input v-model="contactUpdate.institution" type="text" class="form-control" aria-label="Sizing example input">
      </div>
      <div class="input-group input-group-lg">
        <span class="input-group-text" id="inputGroup-sizing-lg">Kontakttelefon:</span>
        <input v-model="contactUpdate.phone" type="text" class="form-control" aria-label="Sizing example input">
      </div>

      <button v-on:click="toChangeContact" type="button" class="btn btn-success m-1">Salvesta</button>
    </div>
  </div>
</template>

<script>
import AlertError from "@/components/alert/AlertError";

export default {
  name: "ChangeProfileInfoView",
  components: {AlertError},
  data: function () {
    return {
      userId: Number(sessionStorage.getItem('userId')),
      contactUpdate: {
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
    toChangeContact: function () {
      this.errorResponse.message = ''
      if (this.contactUpdate.firstName.length == 0 || this.contactUpdate.lastName.length == 0 ||
          this.contactUpdate.institution.length == 0 || this.contactUpdate.phone.length == 0) {
        this.displayRequiredFieldsNotFilledAlert();
      } else {
        this.changeContact()
      }
    },
    getContactInfo: function () {

      this.$http.get("/profile", {
            params: {
              userId: this.userId
            }
          }
      ).then(response => {
        this.contactUpdate = response.data
      }).catch(error => {
        console.log(error)
      })
    },

    changeContact: function () {
      this.$http.put("/change",  this.contactUpdate, {
            params: {
              userId : this.userId,
            }
          }
      ).then(response => {
        this.navigateToProfile()
      }).catch(error => {
        console.log(error)
      })
    },

    navigateToProfile: function () {
      this.$router.push({
        name: 'profileRoute'
      })
    },


    displayRequiredFieldsNotFilledAlert: function () {
      this.errorResponse.message = 'Täida kõik väljad';
    },
  },
  beforeMount() {
    this.getContactInfo()
  }
}
</script>

