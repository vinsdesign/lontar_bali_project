<script setup>
import CardLontar from '@/components/cardLontar/CardLontar.vue'
import lontarServices from '@/services/lontarServices'
import { ref, onMounted } from 'vue'
const props = defineProps({
  page: {
    required: true
  }
})

const lontars = ref(null)
onMounted(() => {
  lontarServices
    .getLontars(2, props.page)
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
