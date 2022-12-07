<template>
  <div style="width: 500px; margin: auto">
    <h3>Sisesta oma teenus.</h3>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Teenuse nimi</span>
      </div>
      <input v-model="addOfferFirstStageRequest.name" type="text" class="form-control" placeholder="Teenuse nimi"
             aria-label="Username" aria-describedby="basic-addon1">
    </div>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">Teenuse kirjeldus</span>
      </div>
      <textarea v-model="addOfferFirstStageRequest.description" class="form-control" placeholder="Teenuse kirjeldus"
                aria-label="Username"></textarea>
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Teenuse hind õpilase kohta</span>
      </div>
      <input v-model="addOfferFirstStageRequest.pricePerStudent" type="text" class="form-control"
             placeholder="Teenuse hind õpilase kohta" aria-label="Username" aria-describedby="basic-addon1">
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Õpilaste arv min</span>
      </div>
      <input v-model="addOfferFirstStageRequest.studentsMin" type="text" class="form-control"
             placeholder="Õpilaste arv min" aria-label="Username" aria-describedby="basic-addon1">
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Õpilaste arv max</span>
      </div>
      <input v-model="addOfferFirstStageRequest.studentsMax" type="text" class="form-control"
             placeholder="Õpilaste arv max" aria-label="Username" aria-describedby="basic-addon1">
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Aadress</span>
      </div>
      <input v-model="addOfferFirstStageRequest.address" type="text" class="form-control" placeholder="Aadress"
             aria-label="Username" aria-describedby="basic-addon1">
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Telefoninumber</span>
      </div>
      <input v-model="addOfferFirstStageRequest.phone" type="text" class="form-control" placeholder="Telefoninumber"
             aria-label="Username" aria-describedby="basic-addon1">
    </div>
    <div>
      <select v-model="addOfferFirstStageRequest.cityId" class="form-select" aria-label="Default select example">
        <option selected disabled value="0">--Linn--</option>
        <option v-for="city in citiesDropdownInputs" :key="city.cityId" :value="city.cityId">{{ city.cityName }}</option>
      </select>

      <button class="btn btn-success m-1" type="button">Tagasi</button>
      <button v-on:click="createNewOfferFirstStage" class="btn btn-success m-1" type="button">Edasi</button>
    </div>

  </div>
</template>

<script>
export default {
  name: "AddOfferStageOneView",
  data: function () {
    return {
      citiesDropdownInputs: [
        {
          cityId: 0,
          cityName: ''
        }
      ],
      addOfferFirstStageRequest: {
        userId: Number(sessionStorage.getItem('userId')),
        cityId: 0,
        name: '',
        description: '',
        pricePerStudent: 0,
        studentsMin: 0,
        studentsMax: 0,
        address: '',
        phone: 0
      },
      addOfferFirstStageResponse: {
        offerId: 0
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
    createNewOfferFirstStage: function () {
      this.errorResponse.message = ''
      if (this.addOfferFirstStageRequest.name.length == 0 || this.addOfferFirstStageRequest.description.length == 0 ||
          this.addOfferFirstStageRequest.pricePerStudent.length == 0 || this.addOfferFirstStageRequest.studentsMin.length == 0 ||
      this.addOfferFirstStageRequest.studentsMax.length == 0 || this.addOfferFirstStageRequest.address.length == 0 ||
          this.addOfferFirstStageRequest.phone.length == 0
    ) {
        this.displayRequiredFieldsNotFilledAlert();
      } else {
        this.addNewOffer()
      }
    },
    addNewOffer: function () {
      this.$http.post("/home/offer", this.addOfferFirstStageRequest
      ).then(response => {
       this.addOfferFirstStageResponse = response.data
       this.navigateToSecondStage()
      }).catch(error => {
        console.log(error)
      })
    },
    navigateToSecondStage: function () {
      sessionStorage.setItem('offerId', this.addOfferFirstStageResponse.offerId)
      this.$router.push({
        name: 'gradeSubjectRoute'
      })
    },
    displayRequiredFieldsNotFilledAlert: function () {
      this.errorResponse.message = 'Täida kõik väljad';
    },
  },
  beforeMount() {
    this.getCitiesDropdownInputs()
  }
}
</script>
