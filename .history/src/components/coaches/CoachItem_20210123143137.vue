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
      <router
    </div>
  </li>
</template>