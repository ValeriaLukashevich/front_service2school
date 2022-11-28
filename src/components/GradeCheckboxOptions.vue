<template>
  <div>
    <p class="text-start">Millistele klassidele sobib:</p>
    <div v-for="grade in grades" :key="grade.gradeId" class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
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
