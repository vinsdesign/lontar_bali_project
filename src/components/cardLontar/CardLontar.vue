<script setup>
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
      class="card card-side w-[1000px] h-[180px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
    >
      <div class="card-body">
        <h2 class="card-title font-montsBold">{{ lontar.title }}</h2>
        <h2 class="font-montsMedium">
          {{ lontar.penulis }} | {{ lontar.tahunLontar }} | {{ lontar.asal }}
        </h2>
        <p class="font-montserrat">
          Detail Deskripsi Lengkap Lontar, judul lontar : {{ lontar.title }}, tipe bahan:
          {{ lontar.type }}, subjek: {{ lontar.subject }}, klasifikasi: {{ lontar.klasifikasi }} ,
          bahasa: {{ lontar.bahasa }},
          <a href="" class="text-mediumBlue font-montsMedium">Selengkapnya..</a>
        </p>
      </div>
      <figure>
        <img class="w-96" src="../../assets/Tulis_Lontar.jpg" alt="Lontar" />
      </figure>
    </div>
  </div>
</template>
