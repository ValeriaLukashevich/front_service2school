<template>
  <div>
    <p class="text-start">Millistele klassidele teenus sobib:</p>
    <div v-for="grade in grades" :key="grade.gradeId" class="form-check">
      <input v-model="grade.isSelected" class="form-check-input" type="checkbox" id="flexCheckDefault">
      <label class="form-check-label" for="flexCheckDefault">
        {{ grade.gradeNumber }}
      </label>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GradeCheckboxOptions',
  props: {
    grades: {}
  }
}
</script>
