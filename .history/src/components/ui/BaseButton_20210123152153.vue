<template>
  <button v-if="!link">
    <slot></slot>
  </button>
  <router-link v-else :to="to">
    <slot></slot>
  </router-link>
</template>

<script>
  export default {
    props: {
      mode: {
        type: String,
        type: String,

      },
      link: {
        type:Boolean,
        type: String,

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