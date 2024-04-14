<script setup>
import CardLontar from '@/components/cardLontar/CardLontar.vue'
import lontarServices from '@/services/lontarServices'
import { ref, onMounted } from 'vue'

const lontars = ref(null)
onMounted(() => {
  lontarServices
    .getLontars()
    .then((response) => {
      lontars.value = response.data
    })
    .then((error) => {
      console.log(error)
    })
})
</script>
<template>
  <div>
    <CardLontar v-for="lontar in lontars" :key="lontar.id" :lontar="lontar" />
  </div>
</template>
