<template>
  <div style="width: 500px; margin: auto">
    <h3>Muuda oma teenust</h3>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Teenuse nimi</span>
      </div>
      <input v-model="offerUpdate.name" type="text" class="form-control"
             aria-label="Username" aria-describedby="basic-addon1">
    </div>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">Teenuse kirjeldus</span>
      </div>
      <textarea v-model="offerUpdate.description" class="form-control"
                aria-label="Username"></textarea>
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Teenuse hind õpilase kohta</span>
      </div>
      <input v-model="offerUpdate.pricePerStudent" type="number" class="form-control" aria-label="Username"
             aria-describedby="basic-addon1">
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Õpilaste arv min</span>
      </div>
      <input v-model="offerUpdate.studentsMin" type="number" class="form-control" aria-label="Username"
             aria-describedby="basic-addon1">
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Õpilaste arv max</span>
      </div>
      <input v-model="offerUpdate.studentsMax" type="number" class="form-control" aria-label="Username"
             aria-describedby="basic-addon1">
    </div>
    <div>
      <select v-model="offerUpdate.cityId" class="form-select" aria-label="Default select example">
        <option selected disabled value="0">--Linn--</option>
        <option v-for="city in citiesDropdownInputs" :key="city.cityId" :value="city.cityId">{{
            city.cityName
          }}
        </option>
      </select>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Aadress</span>
        </div>
        <input v-model="offerUpdate.address" type="text" class="form-control" aria-label="Username"
               aria-describedby="basic-addon1">
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Telefoninumber</span>
        </div>
        <input v-model="offerUpdate.phone" type="number" class="form-control" aria-label="Username"
               aria-describedby="basic-addon1">
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Lisainfo</span>
        </div>
        <input v-model="offerUpdate.additionalInfo" type="text" class="form-control" aria-label="Username"
               aria-describedby="basic-addon1">
      </div>
      <AlertError :message="errorResponse.message"/>
      <button v-on:click="navigateBack" class="btn btn-success m-1" type="button">Tagasi</button>
      <button v-on:click="toChangeOffer" class="btn btn-success m-1" type="button">Salvesta</button>
    </div>

  </div>
</template>

<script>
import AlertError from "@/components/alert/AlertError";

export default {
  name: "ChangeOfferInfoView",
  components: {AlertError},
  data: function () {
    return {
      citiesDropdownInputs: [
        {
          cityId: 0,
          cityName: ''
        }
      ],
      offerId: Number(sessionStorage.getItem('offerId')),
      offerUpdate: {
        userId: 0,
        name: '',
        description: '',
        pricePerStudent: 0,
        studentsMin: 0,
        studentsMax: 0,
        cityId: 0,
        cityName: '',
        address: '',
        phone: 0,
        additionalInfo: ''
      },
      errorResponse: {
        message: '',
        errorCode: 0
      }
    }
  },

  methods: {
    getCitiesDropdownInputs: function () {
      this.$http.get("/views/db")
          .then(response => {
            this.citiesDropdownInputs = response.data
          })
          .catch(error => {
            console.log(error)
          })
    },
    toChangeOffer: function () {
      this.errorResponse.message = ''
      if (this.offerUpdate.name.length == 0 || this.offerUpdate.description.length == 0 ||
          this.offerUpdate.pricePerStudent.length == 0 || this.offerUpdate.studentsMin.length == 0 ||
          this.offerUpdate.studentsMax.length == 0 || this.offerUpdate.address.length == 0 ||
          this.offerUpdate.phone.length == 0) {
        this.displayRequiredFieldsNotFilledAlert();
      } else {
        this.changeOffer()
      }
    },

    getOfferInfo: function () {

      this.$http.get("/home/detail", {
            params: {
              offerId: this.offerId,
            }
          }
      ).then(response => {
        this.offerUpdate = response.data
      }).catch(error => {
        console.log(error)
      })

    },

    changeOffer: function () {
      this.$http.put("/home/change-offer", this.offerUpdate, {
            params: {
              offerId: this.offerId,
            }
          }
      ).then(response => {
        this.navigateToOffer()
      }).catch(error => {
        console.log(error)
      })
    },

    navigateToOffer: function () {
      this.$router.push({
        name: 'detailViewRoute'
      })
    },
    navigateBack: function () {
      this.$router.push({
        name: 'detailViewRoute'
      })
    },

  },
  displayRequiredFieldsNotFilledAlert: function () {
    this.errorResponse.message = 'Täida kõik väljad';
  },


  beforeMount() {
    this.getOfferInfo()
    this.getCitiesDropdownInputs()
  }
}
</script>

