<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}</h4>
    <div>
      <span v-for="area in areas" :key="area">
        
      </span>
    </div>
  </li>
</template>