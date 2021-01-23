<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
  export default {
    props: ['type', 'title'],
    computed
  }
</script>

<style scoped>

</style>