<script setup>
import NavbarComponent from '@/components/navbar/NavbarComponent.vue'
import CarouselImage from '@/components/carousel/CarouselImage.vue'
import SearchComponent from '@/components/SearchComponent/SearchComponent.vue'
import FooterComponent from '@/components/footer/FooterComponent.vue'
</script>

<template>
  <NavbarComponent />
  <header class="relative">
    <CarouselImage />
    <SearchComponent />
  </header>
  <main></main>
  <FooterComponent />
</template>
