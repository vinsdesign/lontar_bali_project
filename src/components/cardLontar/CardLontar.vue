<script setup>
import { RouterLink } from 'vue-router'
defineProps({
  lontar: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="flex justify-center items-center mt-5">
    <div
      class="xxsm:card md:card md:card-side xxsm:w-[250px] xsm:w-[280px] base:w-[360px] sm:w-[560px] md:w-[650px] md:h-[180px] lg:w-[800px] lg:h-[180px] xl:w-[900px] xl:h-[180px] 2xl:w-[1000px] 2xl:h-[200px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] xxsm:flex items-center"
    >
      <div class="card-body xxsm:order-2 md:order-none xxsm:text-center lg:text-left xxsm:p-5">
        <h2
          class="xl:card-title text-darkBlue font-montsBold xxsm:text-center xxsm:text-lg base:text-xl xl:text-2xl"
        >
          {{ lontar.title }}
        </h2>
        <h2 class="font-montsMedium text-mediumBlue xl:text-lg">
          {{ lontar.penulis }} | {{ lontar.tahunLontar }} | {{ lontar.asal }}
        </h2>
        <p class="font-montserrat text-justify xl:text-md">
          Detail Deskripsi Lengkap Lontar, judul lontar : {{ lontar.title }}, tipe bahan:
          {{ lontar.type }}, subjek: {{ lontar.subject }}, klasifikasi: {{ lontar.klasifikasi }} ,
          bahasa: {{ lontar.bahasa }},
          <RouterLink
            :to="{ name: 'detail-lontar', params: { id: lontar.id } }"
            class="text-orangePastel font-montsMedium"
            >Selengkapnya.</RouterLink
          >
        </p>
      </div>
      <figure class="xxsm:order-1 md:order-none">
        <img
          class="xxsm:w-96 sm:w-[700px] md:w-96 xxsm:rounded-t-2xl md:rounded-r-2xl lg:rounded-r-2xl"
          src="../../assets/Tulis_Lontar.jpg"
          alt="Lontar"
        />
      </figure>
    </div>
  </div>
</template>
