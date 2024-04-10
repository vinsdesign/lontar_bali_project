<template>
  <div class="relative w-full h-full">
    <div class="carousel w-full h-full relative">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="carousel-item w-full"
        @click="handleImageClick(index)"
      >
        <img
          :src="getImagePath(image)"
          class="w-full bg-cover xxsm:h-[220px] xsm:h-[250px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]"
        />
      </div>
    </div>
    <!-- <div class="absolute bottom-[5%] w-full flex justify-center items-center gap-2">
      <a
        v-for="(image, index) in images"
        :key="index"
        :href="'#item' + (index + 1)"
        class="xxsm:w-5 xxsm:h-2 base:w-7 base:h-3 md:w-9 md:h-3 lg:w-10 lg:h-3 bg-white btn-circle border-gray-400"
        :class="{
          active: index + 1 === currentIndex
        }"
        @click="goToImage(index)"
      ></a>
    </div> -->
  </div>
</template>

<script>
import bg1 from '../../assets/bg-header(1).jpg'
import bg2 from '../../assets/bg-header(2).jpg'
import bg3 from '../../assets/bg-header(3).jpg'

export default {
  setup() {
    let currentIndex = 0
    const images = [bg1, bg2, bg3]

    const getImagePath = (imageName) => {
      return imageName
    }

    const handleImageClick = (index) => {
      currentIndex = index

      scrollCarouselToIndex(index)
    }

    const goToImage = (index) => {
      currentIndex = index

      scrollCarouselToIndex(index)
      startAutoChange()
      return currentIndex
    }

    const scrollCarouselToIndex = (index) => {
      const carouselElement = document.querySelector('.carousel')
      const carouselItemWidth = carouselElement.offsetWidth
      carouselElement.scrollLeft = carouselItemWidth * index
    }

    let intervalId = null
    const startAutoChange = () => {
      clearInterval(intervalId)
      intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length
        scrollCarouselToIndex(currentIndex)
      }, 5000)
    }

    const stopAutoChange = () => {
      clearInterval(intervalId)
    }

    startAutoChange()

    return {
      images,
      getImagePath,
      handleImageClick,
      goToImage,
      startAutoChange,
      stopAutoChange,
      currentIndex
    }
  }
}
</script>
<style>
.active {
  background-color: #f9b17a;
}
</style>
