<template>
<div>
  <section>
    FILTER
  </section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register a coach</router-link>
    </div>
    <ul v-if="hasCoaches">
      <coach-item></coach-item>
    </ul>
    <h3 v-else>No coaches found</h3>
  </section>
  </div>
</template>

<script>
  import  CoachItem from '../../components/coaches/CoachItem.vue'

  export default {
    components: {
      CoachOItem
    },
    computed: {
      filteredCoaches() {
        return this.$store.getters['coaches/coaches'];
      },
      hasCoaches() {
        return this.$store.getters['coaches/hasCoaches'];
      }
    }
  }
</script>
