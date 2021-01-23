<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}</h4>
    <div>
      <span v-for="area in areas" :key="area">
        {{ area }}
      </span>
    </div>
    <div class="actions">
      <router-link :to="coachContactLink">Contact</router-link>
      <router-link :to="coachDetailsLink">View Details</router-link>
    </div>
  </li>
</template>

<script>
  export default {
    props: ['id', 'firstName', 'lastName', 'rate', 'area'],
    computed: {
      fullName() {
        return this.firstName + '' + this.lastName
      },
      coachContactLink() {
        return this.$route.path + '/' + this.id + /contact/
      },
      coachDetailsLink() {
        return this.$route.path + '/' + this.id // current route path /coaches/c1
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