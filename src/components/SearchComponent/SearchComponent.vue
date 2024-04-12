<template>
  <!-- header -->

  <header
    class="flex flex-col justify-center items-center absolute xxsm:top-[35%] xxsm:right-[10%] xsm:top-[35%] xsm:right-[9%] base:top-[35%] base:right-[19%] sm:top-[40%] sm:right-[19%] md:top-[40%] md:right-[23%] lg:top-[40%] lg:right-[27%] xl:top-[40%] xl:right-[26%] 2xl:top-[40%] 2xl:right-[25%]"
  >
    <h1
      class="text-white font-medium xxsm:text-sm xsm:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl xxsm:mb-0"
    >
      Mulai Eksplorasi
      <span class="font-bold text-orangePastel">Pencarian Lontar</span>
    </h1>
    <form action="" class="">
      <div class="flex m-0 drop-shadow-[1px_4px_43.4px_rgba(0,0,0,0.50)]">
        <div class="relative flex items-center text-light-secondary focus-within:text-mediumBlue">
          <font-awesome-icon
            icon="fa-solid fa-magnifying-glass"
            class="absolute xxsm:h-3 xxsm:w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6 xxsm:mt-2 xxsm:ml-3 mt-5 ml-5 text-mediumBlue"
            name="search"
          />
          <input
            type="text"
            placeholder="Cari Lontar"
            name="cari"
            autocomplete="off"
            aria-label="Cari Lontar"
            class="mt-5 xxsm:mt-2 xxsm:pl-12 px-16 placeholder-darkSecondary focus:placeholder-lightBlue xxsm:w-[200px] xxsm:h-9 sm:text-xl xsm:w-[250px] xsm:h-9 sm:w-[350px] sm:h-10 md:text-xl lg:text-2xl md:w-[300px] md:h-[50px] lg:w-[400px] lg:h-[55px] xl:w-[500px] xl:h-[60px] 2xl:w-[700px] 2xl:h-[70px] rounded-s-[15px] border-none ring-2 ring-mediumBlue focus:ring-orangePastel focus:ring-2"
          />
        </div>
        <button
          type="submit"
          class="bg-mediumBlue xxsm:mt-2 xxsm:text-base sm:px-3 xsm:text-lg xxsm:px-3 xsm:px-3 sm:text-xl md:text-2xl xl:text-3xl md:w-[100px] md:h-[50px] lg:w-[110px] lg:h-[55px] xl:w-[120px] xl:h-[60px] 2xl:w-[120px] 2xl:h-[70px] mt-5 text-orangePastel text-[24px] rounded-r-[15px] ring-2 ring-mediumBlue"
        >
          Cari
        </button>
      </div>
    </form>
  </header>
  <!-- end header -->
</template>
