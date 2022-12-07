<template>
  <div>
    <div class="col-2">
    <p class="text-start">Millistele ainetele sobib:</p>
    <div v-for="subject in subjects" :key="subject.subjectName" class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
      <label class="form-check-label" for="flexCheckDefault">
        {{ subject.subjectName }}
      </label>
    </div>

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