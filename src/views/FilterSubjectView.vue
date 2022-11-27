<template>

  <div>
    <p class="text-start">Millistele ainetele sobib:</p>
    <div v-for="subject in subjects" class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
      <label class="form-check-label" for="flexCheckDefault">
        {{ subject.subjectName }}
      </label>

    </div>
  </div>

</template>

<script>
export default {
  name: "FilterSubjectView",
  data: function () {
    return {
      subjects: [
        {
          subjectId: 0,
          subjectName: ''
        }
      ]
    }
  },
  methods: {
    getSubjectCheckbox: function () {
      this.$http.get("/filter/subject")
          .then(result => {
                this.subjects = result.data
              }
          )
          .catch(error => {
                alert('Viga!')
                console.log('Midagi läks valesti')
              }
          )
    }
  },
  beforeMount() {
    this.getSubjectCheckbox()
  }
}
</script>

<style scoped>

</style>