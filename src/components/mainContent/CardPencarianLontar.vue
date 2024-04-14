<script setup>
import CardLontar from '@/components/cardLontar/CardLontar.vue'
import { ref } from 'vue'

const lontars = ref([
  {
    id: 1,
    title: 'Bhasma',
    type: 'Daun Ronta',
    penulis: 'Pedanda Anyar',
    subject: 'Mantra',
    klasifikasi: 'Weda',
    bahasa: 'Bahasa Kawi',
    collaction: '15',
    tahunLontar: '22/05/1962',
    panjangLontar: '50 cm',
    lebarLontar: '3.5 cm',
    namaTempat: 'Gedong Kirtya',
    location: 'Jalan Veteran No 20 Singaraja',
    asal: 'Belah Batuh Gianyar'
  },
  {
    id: 2,
    title: 'Puja Daha',
    type: 'Daun Ronta',
    penulis: 'Pekak Tjahou',
    subject: 'Mantra',
    klasifikasi: 'Weda',
    bahasa: 'Bahasa Kawi',
    collaction: '10',
    tahunLontar: '03/04/1929',
    panjangLontar: '46 cm',
    lebarLontar: '3.5 cm',
    namaTempat: 'Gedong Kirtya',
    location: 'Jalan Veteran No 20 Singaraja',
    asal: 'Abiansemal Badung'
  },
  {
    id: 3,
    title: 'Puja Daha Pasilih',
    type: 'Daun Ronta',
    penulis: 'Ida Nyoman Rai',
    subject: 'Mantra',
    klasifikasi: 'Weda',
    bahasa: 'Bahasa Kawi',
    collaction: '41',
    tahunLontar: '-',
    panjangLontar: '37 cm',
    lebarLontar: '3.5 cm',
    namaTempat: 'Gedong Kirtya',
    location: 'Jalan Veteran No 20 Singaraja',
    asal: 'Banjar Ulapan Belah Kiuh Gianyar'
  },
  {
    id: 4,
    title: 'Pitra Puja',
    type: 'Daun Ronta',
    penulis: 'Pedanda Wayan Carik',
    subject: 'Mantra',
    klasifikasi: 'Weda',
    bahasa: 'Bahasa Kawi',
    collaction: '38',
    tahunLontar: '-',
    panjangLontar: '38 cm',
    lebarLontar: '3.5 cm',
    namaTempat: 'Gedong Kirtya',
    location: 'Jalan Veteran No 20 Singaraja',
    asal: 'Denpasar'
  },
  {
    id: 5,
    title: 'Puja Purwaka',
    type: 'Daun Ronta',
    penulis: 'Pedanda Budha Tusan',
    subject: 'Mantra',
    klasifikasi: 'Weda',
    bahasa: 'Bahasa Kawi',
    collaction: '7',
    tahunLontar: '-',
    panjangLontar: '50 cm',
    lebarLontar: '3.5 cm',
    namaTempat: 'Gedong Kirtya',
    location: 'Jalan Veteran No 20 Singaraja',
    asal: 'Banjar Angkan Klungkung'
  },
  {
    id: 6,
    title: 'Sawa Wedana',
    type: 'Daun Ronta',
    penulis: 'Pedanda Budha Tusan',
    subject: 'Mantra',
    klasifikasi: 'Weda',
    bahasa: 'Bahasa Kawi',
    collaction: '11',
    tahunLontar: '04/07/1930',
    panjangLontar: '50 cm',
    lebarLontar: '3.5 cm',
    namaTempat: 'Gedong Kirtya',
    location: 'Jalan Veteran No 20 Singaraja',
    asal: 'Banjar Angkan Klungkung'
  },
  {
    id: 7,
    title: 'Kramaning Sembah',
    type: 'Daun Ronta',
    penulis: 'Ida Wayan Alit',
    subject: 'Sesana/moral',
    klasifikasi: 'Agama',
    bahasa: 'Bahasa Kawi',
    collaction: '4',
    tahunLontar: '25/07/1931',
    panjangLontar: '50 cm',
    lebarLontar: '3.5 cm',
    namaTempat: 'Gedong Kirtya',
    location: 'Jalan Veteran No 20 Singaraja',
    asal: 'Pagutan Cakra Negara'
  },
  {
    id: 8,
    title: 'Dasasila',
    type: 'Daun Ronta',
    penulis: 'Pan Ceteg',
    subject: 'Sesana/moral',
    klasifikasi: 'Agama',
    bahasa: 'Bahasa Kawi',
    collaction: '28',
    tahunLontar: '25/07/1931',
    panjangLontar: '50 cm',
    lebarLontar: '3.5 cm',
    namaTempat: 'Gedong Kirtya',
    location: 'Jalan Veteran No 20 Singaraja',
    asal: 'Pasut'
  }
])
</script>
<template>
  <div>
    <CardLontar v-for="lontar in lontars" :key="lontar.id" :lontar="lontar" />
  </div>
</template>
