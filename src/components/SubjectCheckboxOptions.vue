<template>
  <div>
        <p class="text-start">Millistele õppeainetele teenus sobib:</p>
    <div v-for="subject in subjects" :key="subject.subjectName" class="form-check">
      <input v-model="subject.isSelected" class="form-check-input" type="checkbox" id="flexCheckDefault">
      <label class="form-check-label" for="flexCheckDefault">
        {{ subject.subjectName }}
      </label>
    </div>
    </div>
  </template>
<script>
export default {
  name: 'SubjectCheckboxOptions',
  props: {
    subjects: {}
  }
}
</script>