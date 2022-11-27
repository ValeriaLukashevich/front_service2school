<template>
  <div>
    <p class="text-start">Millistele klassidele sobib:</p>
    <div v-for="grade in grades" class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
      <label class="form-check-label" for="flexCheckDefault">
        {{ grade.gradeNumber }}
      </label>
    </div>

  </div>
</template>

<script>
export default {
  name: "FilterGradeView",
  data: function () {
    return {
      grades: [
        {
          gradeId: 0,
          gradeNumber: 0
        }
      ]
    }
  },
  methods: {
    getGradeCheckbox: function () {
      this.$http.get('/filter/grade')
          .then(result => {
            this.grades = result.data
          })
          .catch(error => {
            alert('viga')
            console.log(error)
          })
    }
  },
  beforeMount() {
    this.getGradeCheckbox()
  }
}

</script>

<style scoped>

</style>