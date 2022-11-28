<template>
  <GradeCheckboxOptions :grades="grades"/>
</template>

<script>
import GradeCheckboxOptions from "@/components/GradeCheckboxOptions";

export default {
  name: "FilterGradeView",
  components: {GradeCheckboxOptions},
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

