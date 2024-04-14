<script setup>
import NavbarComponent from '@/components/navbar/NavbarComponent.vue'
import CarouselImage from '@/components/carousel/CarouselImage.vue'
import SearchComponent from '@/components/SearchComponent/SearchComponent.vue'
import ButtonBack from '@/components/button/ButtonBack.vue'
import FooterComponent from '@/components/footer/FooterComponent.vue'
import { ref, onMounted } from 'vue'
import lontarServices from '@/services/lontarServices.js'

const props = defineProps({
  id: { required: true }
})
const lontar = ref(null)

onMounted(() => {
  // fetch data lontar through id
  lontarServices
    .getLontar(props.id)
    .then((response) => {
      lontar.value = response.data
    })
    .then((error) => {
      console.log(error)
    })
})
</script>
<template>
  <NavbarComponent />
  <header class="relative">
    <CarouselImage />
    <SearchComponent />
  </header>
  <main v-if="lontar" class="flex flex-col">
    <div class="flex justify-start items-center w-[1200px] mx-auto">
      <ButtonBack class="mt-4 hover:text-orangePastel hover:transition-all hover:delay-150" />
    </div>

    <section class="flex justify-center items-center flex-col mt-4">
      <div
        class="card w-[1200px] bg-base-100 bg-cover shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
      >
        <figure>
          <img
            class="w-[1200px] h-[600px] xxsm:rounded-t-2xl"
            src="../assets/Bhuana Purana.jpg"
            alt="Lontar"
          />
        </figure>
        <div class="card-body p-5 font-montserrat">
          <h2
            class="card-title bg-orangePastel w-fit p-2 rounded-t-lg font-montsMedium text-base border-b-4 border-solid border-b-mediumBlue"
          >
            Detail Deskripsi Lengkap Lontar
          </h2>
          <!-- title -->
          <div class="flex bg-lightSecondary p-4 font gap-5 font-montserrat mt-[-8px]">
            <div class="flex gap-20">
              <h2 class="card-title">Judul</h2>
              <h2 class="card-title">:</h2>
            </div>
            <h2 class="card-title">{{ lontar.title }}</h2>
          </div>
          <!-- type -->
          <div class="flex bg-white p-4 font gap-5 font-montserrat mt-[-8px]">
            <div class="flex space-x-6">
              <h2 class="card-title">Tipe Bahan</h2>
              <h2 class="card-title">:</h2>
            </div>
            <h2 class="card-title">{{ lontar.type }}</h2>
          </div>
          <!-- penulis -->
          <div class="flex bg-lightSecondary p-4 font gap-5 font-montserrat mt-[-8px]">
            <div class="flex space-x-16">
              <h2 class="card-title">Penulis</h2>
              <h2 class="card-title">:</h2>
            </div>
            <h2 class="card-title">{{ lontar.penulis }}</h2>
          </div>
          <!-- subjek -->
          <div class="flex bg-white p-4 font gap-5 mt-[-8px] font-montserrat">
            <div class="flex space-x-16">
              <h2 class="card-title">Subject</h2>
              <h2 class="card-title">:</h2>
            </div>
            <h2 class="card-title">{{ lontar.subject }}</h2>
          </div>
          <!-- klasifikasi -->
          <div class="flex bg-lightSecondary p-4 font gap-5 font-montserrat mt-[-8px]">
            <div class="flex space-x-10">
              <h2 class="card-title">Klasifikasi</h2>
              <h2 class="card-title">:</h2>
            </div>
            <h2 class="card-title">{{ lontar.klasifikasi }}</h2>
          </div>
          <!-- Penulis -->
          <div class="flex bg-white p-4 font gap-5 mt-[-8px] font-montserrat">
            <div class="flex space-x-16">
              <h2 class="card-title">Bahasa</h2>
              <h2 class="card-title">:</h2>
            </div>
            <h2 class="card-title">{{ lontar.bahasa }}</h2>
          </div>
          <!-- Collection -->
          <div class="flex bg-lightSecondary p-4 font gap-5 mt-[-8px] font-montserrat">
            <div class="flex space-x-9">
              <h2 class="card-title">Collaction</h2>
              <h2 class="card-title">:</h2>
            </div>
            <h2 class="card-title">{{ lontar.collaction }}</h2>
          </div>
          <!-- Panjang Lontar -->
          <div class="flex bg-white p-4 font gap-5 mt-[-8px] font-montserrat">
            <div class="flex space-x-14">
              <h2 class="card-title">Panjang</h2>
              <h2 class="card-title">:</h2>
            </div>
            <h2 class="card-title">{{ lontar.panjangLontar }}</h2>
          </div>
          <!-- Lebar Lontar -->
          <div class="flex bg-lightSecondary p-4 font gap-5 mt-[-8px] font-montserrat">
            <div class="flex space-x-20">
              <h2 class="card-title">Lebar</h2>
              <h2 class="card-title">:</h2>
            </div>
            <h2 class="card-title">{{ lontar.lebarLontar }}</h2>
          </div>
          <!-- Nama Tempat -->
          <div class="flex bg-white p-4 font gap-5 mt-[-8px] font-montserrat">
            <div class="flex space-x-16">
              <h2 class="card-title">Koleksi</h2>
              <h2 class="card-title">:</h2>
            </div>
            <h2 class="card-title">{{ lontar.namaTempat }}</h2>
          </div>
          <!-- Lokasi-->
          <div class="flex bg-lightSecondary p-4 font gap-5 mt-[-8px] font-montserrat">
            <div class="flex space-x-[70px]">
              <h2 class="card-title">Lokasi</h2>
              <h2 class="card-title">:</h2>
            </div>
            <h2 class="card-title">{{ lontar.location }}</h2>
          </div>
          <!-- Asal -->
          <div class="flex bg-white p-4 font gap-5 mt-[-8px] font-montserrat">
            <div class="flex space-x-24">
              <h2 class="card-title">Asal</h2>
              <h2 class="card-title">:</h2>
            </div>
            <h2 class="card-title">{{ lontar.asal }}</h2>
          </div>
        </div>
      </div>
    </section>
  </main>
  <FooterComponent />
</template>
