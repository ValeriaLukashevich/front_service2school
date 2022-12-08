<template>
  <div>

    <table class="table" style="width: 400px; alignment: center; margin: auto">
      <tr class="align-text-top">
        <td class="">
        <GradeCheckboxOptions :grades="checkBoxesRequest.grades"/>
        </td>
        <td>
          <SubjectCheckboxOptions :subjects="checkBoxesRequest.subjects"/>
        </td>
      </tr>
    </table>
    <div>
      <button v-on:click="backAddOfferStageOneView" class="btn btn-success m-1" type="button">Tagasi</button>
      <button v-on:click="addGradeSubjectToOffer" class="btn btn-success m-1" type="button">Edasi</button>
    </div>
  </div>

</template>

<script>
import GradeCheckboxOptions from "@/components/GradeCheckboxOptions.vue";
import SubjectCheckboxOptions from "@/components/SubjectCheckboxOptions.vue";

export default {
  name: "GradeSubjectView",
  components: {SubjectCheckboxOptions, GradeCheckboxOptions},
  data: function () {
    return {
      checkBoxesRequest: {
        offerId: Number(sessionStorage.getItem('offerId')),
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
      // checkboxesResponse: {
      //   offerId: 0

      // }
    }
  },
  methods: {
    getGradeCheckbox: function () {
      this.$http.get('/filter/grade')
          .then(result => {
            this.checkBoxesRequest.grades = result.data
          })
          .catch(error => {
            alert('viga')
            console.log(error)
          })
    },
    getSubjectCheckbox: function () {
      this.$http.get("/filter/subject")
          .then(result => {
                this.checkBoxesRequest.subjects = result.data
              }
          )
          .catch(error => {
                alert('Viga!')
                console.log('Midagi läks valesti')
              }
          )
    },
    addGradeSubjectToOffer: function () {
      this.$http.post("/home/offer/grade/subject", this.checkBoxesRequest
      ).then(response => {
        this.navigateToAddPicture()
      }).catch(error => {
        console.log(error)
      })
    },
    navigateToAddPicture: function () {
      this.$router.push({
        name: 'pictureRoute'
      })
    },
    backAddOfferStageOneView: function() {
      this.$router.push({
        path: '/stageOne'
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

<style>

td {
  text-align: left;
}

</style>

