<script setup>
import CardLontar from '@/components/cardLontar/CardLontar.vue'
</script>
<template>
  <div v-for="item in items" :key="item">
    <CardLontar />
  </div>
</template>
