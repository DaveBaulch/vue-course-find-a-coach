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
    {{  filteredCoaches}}

    </ul>
    <h3 v-else>No coaches found</h3>
  </section>
  </div>
</template>

<script>
  import CoachItem from '../../components/coaches/CoachItem.vue'

  export default {
    components: {
      CoachItem
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

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .controls {
    display: flex;
    justify-content: space-between;
  }
</style>