<template>
<div class="col-3 mx-3 my-3">
  <h3>Sisesta oma pakkumus.</h3>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1">Pakkumuse nimi</span>
    </div>
    <input type="text" class="form-control" placeholder="Pakkumuse nimi" aria-label="Username" aria-describedby="basic-addon1">
  </div>
  <div class="input-group">
    <div class="input-group-prepend">
      <span class="input-group-text">Pakkumuse kirjeldus</span>
    </div>
    <textarea class="form-control" aria-label="Pakkumuse kirjaldus"></textarea>
  </div>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1">Pakkumuse hind õpilase kohta</span>
    </div>
    <input type="text" class="form-control" placeholder="Pakkumuse hind õpilase kohta" aria-label="Username" aria-describedby="basic-addon1">
  </div>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1">Õpilaste arv min</span>
    </div>
    <input type="text" class="form-control" placeholder="Õpilaste arv min" aria-label="Username" aria-describedby="basic-addon1">
  </div>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1">Õpilaste arv max</span>
    </div>
    <input type="text" class="form-control" placeholder="Õpilaste arv max" aria-label="Username" aria-describedby="basic-addon1">
  </div>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1">Telefoninumber</span>
    </div>
    <input type="text" class="form-control" placeholder="Telefoninumber" aria-label="Username" aria-describedby="basic-addon1">
  </div>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1">Aadress</span>
    </div>
    <input type="text" class="form-control" placeholder="Aadress" aria-label="Username" aria-describedby="basic-addon1">
  </div>
  <div>
    <select class="form-select" aria-label="Default select example">
      <option selected disabled value="0">--Linn--</option>
      <option v-for="city in citiesDropdownInputs">{{ city.cityName }}</option>
    </select>
  </div>
  <div class="d-grid gap-2 d-md-block my-5">
    <button class="btn btn-primary mx-1" type="button">Button</button>
    <button v-on:click="" class="btn btn-primary" type="button">Edasi</button>
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
      ]
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
  },
  beforeMount() {
    this.getCitiesDropdownInputs()
  }
}
</script>

<style scoped>

</style>