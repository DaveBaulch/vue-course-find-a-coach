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
    <ul>
      <li v-for>

      </li>
    </ul>
  </section>
  </div>
</template>

<script>
  export default {
    computed: {
      filteredCoaches() {
        return this.$store.getters['coaches/coaches']
      }
    }
  }
</script>
