<template>
  <div>
    <select class="form-select" aria-label="Default select example">
      <option selected disabled value="0">--Linn--</option>
      <option v-for="city in citiesDropdownInputs" >{{ city.cityName }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "DropdownView",
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
    getcitiesDropdownInputs: function () {
      this.$http.get("/test")
          .then(response => {
            this.citiesDropdownInputs = response.data
          })
          .catch(error => {
            console.log(error)
          })
    },
  },
  beforeMount() {
    this.getcitiesDropdownInputs()
  }
}
</script>

<style scoped>

</style>