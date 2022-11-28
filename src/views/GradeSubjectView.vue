<template>
  <div>s
    <GradeCheckboxOptions :grades="grades"/>
    <div>
      <p class="text-start">Millistele ainetele sobib:</p>
      <div v-for="subject in subjects" class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
          {{ subject.subjectName }}
        </label>

      </div>
    </div>
    <br/>
    <div>
    <button type="button" class="btn btn-success">Tagasi</button>
    <button type="button" class="btn btn-success">Edasi</button>
    </div>
  </div>

</template>

<script>
import GradeCheckboxOptions from "@/components/GradeCheckboxOptions";

export default {
  name: "GradeSubjectView",
  components: {GradeCheckboxOptions},
  data: function () {
    return {
      grades: [
        {
          gradeId: 0,
          gradeNumber: 0
        }
      ],
      subjects: [
        {
          subjectId: 0,
          subjectName: ''
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
    },
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
    this.getGradeCheckbox()
    this.getSubjectCheckbox()
  }
}

</script>

