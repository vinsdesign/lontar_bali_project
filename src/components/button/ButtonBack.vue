<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <RouterLink :to="{ name: 'koleksi-lontar' }">
    <button class="rounded-2xl py-2 px-5 bg-lightBlue text-white font-montsSemiBold">
      <font-awesome-icon icon="fa-solid fa-angle-left" /> Kembali
    </button>
  </RouterLink>
</template>
