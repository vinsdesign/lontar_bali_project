<script setup>
import LogoIcon from '@/components/icons/logo.vue'
import LogoInstiki from '@/components/icons/LogoInstiki.vue'
</script>
<template>
  <footer class="w-full bg-darkBlue xxsm:px-4 xsm:px-8 sm:px-12 px-16 py-8 mt-16 text-white">
    <a href="#beranda"> <LogoIcon /> </a>
    <div
      class="flex justify-between flex-wrap lg:justify-between lg:gap-5 xl:justify-between 2xl:flex 2xl:justify-between gap-3"
    >
      <section class="">
        <h1 class="xxsm:text-lg lg:text-xl font-bold hover:text-orangePastel duration-500">
          Naskah Lontar
        </h1>
        <p class="2xl:w-[500px] xl:w-[400px] lg:w-[250px] lg:text-lg xxsm:text-base text-justify">
          Website Lontar Bali merupakan website mesin pencari naskah lontar Bali yang digunakan
          untuk pelestarian dalam bentuk digitalisasi budaya.
        </p>
      </section>
      <section class="">
        <h1 class="text-xl font-bold xxsm:text-lg lg:text-xl hover:text-orangePastel duration-500">
          Kontak
        </h1>
        <div class="flex items-center gap-2 mt-1 hover:text-orangePastel duration-500">
          <font-awesome-icon icon="fa-solid fa-envelope" class="xxsm:h-4 xxsm:w-4 lg:h-5 lg:w-5" />
          <a href="#"><p class="font-medium xxsm::text-base lg:text-lg">Lontarbali@email.com</p></a>
        </div>
        <div class="flex items-start mt-4 gap-2 hover:text-orangePastel duration-500">
          <font-awesome-icon icon="fa-solid fa-map-pin" class="xxsm:h-4 xxsm:w-4 lg:h-5 lg:w-5" />
          <a href="#"
            ><p class="xxsm::text-base lg:text-lg font-medium xxsm:w-[260px] lg:w-[400px]">
              Jl. Veteran, Paket Agung, Kec. Buleleng, Kabupaten Buleleng, Bali 81118
            </p>
          </a>
        </div>
      </section>
      <section class="">
        <h1 class="text-lg lg:text-xl text-left font-bold hover:text-orangePastel duration-500">
          Partner Kami
        </h1>
        <a href="https://instiki.ac.id/">
          <LogoInstiki Color="000" />
        </a>
      </section>
    </div>
    <p class="text-center mt-8 xxsm:text-base hover:text-orangePastel duration-500">
      Copyright © 2023. By Mahasiswa INSTIKI
    </p>
  </footer>
</template>
