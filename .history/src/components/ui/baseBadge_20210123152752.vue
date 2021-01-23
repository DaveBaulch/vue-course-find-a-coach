<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
  export default {
    props: ['type']
  }
</script>

<style scoped>

</style>