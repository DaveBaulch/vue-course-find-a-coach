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
    <ul v-if="hasCoachwes">
      <li v-for="coach in filteredCoaches" :key="coach.id">
        {{ coach.firstName }}
      </li>
    </ul>
  </section>
  </div>
</template>

<script>
  export default {
    computed: {
      filteredCoaches() {
        return this.$store.getters['coaches/coaches'];
      }
    }
  }
</script>
