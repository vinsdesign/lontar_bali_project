<script setup>
import DatabaseIcon from '@/components/icons/DatabaseIcon.vue'
import BookIcon from '@/components/icons/DatabaseIcon.vue'
import SaveBookIcon from '@/components/icons/SaveBookIcon.vue'
</script>

<template>
  <!-- Informasi Data Lontar -->
  <section>
    <h1
      class="text-center xxsm:text-base xsm:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-darkBlue text-[30px] mt-10"
    >
      Informasi Data Lontar
    </h1>
    <p
      class="text-center text-darkSecondary xxsm:text-sm xsm:text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl"
    >
      Berikut informasi lengkap terkait data lontar
    </p>
    <div
      class="flex xxsm:flex-col xsm:flex-col xxsm:gap-3 xsm:gap-5 sm:flex-col sm:gap-5 md:flex-col lg:flex-row justify-center items-center mt-5 md:gap-5 gap-16"
    >
      <a href="#"
        ><section
          class="bg-darkBlue text-center p-4 xxsm:w-[280px] xsm:w-[450px] sm:w-[500px] md:w-[500px] lg:w-[300px] xl:w-[350px] flex flex-col items-center"
        >
          <DatabaseIcon />
          <p class="text-white text-lg hover:text-orangePastel duration-500">
            <span class="font-bold">2000</span> Data Lontar Terdigitalisasi
          </p>
        </section></a
      >
      <a href="#">
        <section
          class="bg-mediumBlue p-4 xxsm:w-[280px] xsm:w-[450px] sm:w-[500px] md:w-[500px] lg:w-[300px] xl:w-[350px] flex flex-col items-center"
        >
          <BookIcon />
          <p class="text-white text-lg text-center hover:text-orangePastel duration-500">
            <span class="font-bold">2000</span> Data Lontar Terdigitalisasi
          </p>
        </section>
      </a>
      <a href="#">
        <section
          class="bg-lightBlue p-4 xxsm:w-[280px] xsm:w-[450px] sm:w-[500px] md:w-[500px] lg:w-[300px] xl:w-[350px] flex flex-col items-center"
        >
          <SaveBookIcon />
          <p class="text-white text-center text-lg hover:text-orangePastel duration-500">
            <span class="font-bold">2000</span> Data Lontar Terdigitalisasi
          </p>
        </section>
      </a>
    </div>
  </section>
  <!-- end informasi Data Lontar -->
</template>
