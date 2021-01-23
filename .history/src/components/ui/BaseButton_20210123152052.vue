<template>
  <button v-if="!link">
    <slot></slot>
  </button>
  <router-link v-else>
    <slot></slot>
  </router-link>
</template>

<script>
  export default {
    props: {
      link: {
        type:Boolean,
        required: false,
        default: false
      },
      to: {
        type: String,
        required: false,
        default: false
      }
    }
  }
</script>

<style scoped>

</style>