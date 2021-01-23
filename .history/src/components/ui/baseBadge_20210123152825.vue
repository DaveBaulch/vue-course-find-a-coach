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
        return this.title.toUperCase()
      }
    }
</script>

<style scoped>

</style>