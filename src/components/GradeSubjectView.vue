<template>
  <div>
    <GradeCheckboxOptions :grades="grades"/>
    <SubjectCheckboxOptions :subjects="subjects"/>
    <br/>
    <div>
    <button type="button" class="btn btn-success">Tagasi</button>
    <button v-on:click="createOffer" type="button" class="btn btn-success">Edasi</button>
    </div>
  </div>

</template>

<script>
import GradeCheckboxOptions from "@/components/GradeCheckboxOptions";
import SubjectCheckboxOptions from "@/views/SubjectCheckboxOptions";

export default {
  name: "GradeSubjectView",
  components: {SubjectCheckboxOptions, GradeCheckboxOptions},
  data: function () {
    return {
      grades: [
        {
          gradeId: 0,
          gradeNumber: 0,
          isSelected: false
        }
      ],
      subjects: [
        {
          subjectId: 0,
          subjectName: '',
          isSelected: false

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
    },
    createOffer: function () {
      this.$http.post("/some/path", this.somePayloadDtoObject
      ).then(response => {
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },

  },
  beforeMount() {
    this.getGradeCheckbox()
    this.getSubjectCheckbox()
  }
}

</script>

