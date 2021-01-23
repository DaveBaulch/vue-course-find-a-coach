<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
  export default {
    props: ['type', 'title'],
    computed: {
      text() {
        return this.title.toUPperCase
      }
    }
</script>

<style scoped>

</style>