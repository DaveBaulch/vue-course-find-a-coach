<template>
  <button>
    <slot></slot>
  </button>
  <router-link>
    <slot></slot>
  </router-link>
</template>

<script>
  export default {
    props: {
      link: {
        type:Boolean
      }
    }
  }
</script>

<style scoped>

</style>