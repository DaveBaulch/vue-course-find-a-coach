<template>
  <section>
    <base-card>
      <header>
        <h2>Requests receieved</h2>
      </header>
      <ul></ul>
      <h3>You haven't received any requests yet</h3>
    </base-card>
  </section>
</template>

<script>
import BaseBadge from '../../components/ui/Basecard.vue';
export default {
  components: { BaseBadge }
};
</script>
