<template>
  <div id="app">
    <the-header />
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: {
    TheHeader
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

.routr-enter-from {
  opacity: 0;
  transform
}

.route-leave-to {
}

.route-enter-active {
}

.route-leave-active {
}

.route-enter-to {
}

.route-leave-from {
}
</style>
