<template>
  <Disclosure as="nav" class="bg-darkBlue w-full fixed z-20" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-center md:justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center md:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-orangePastel focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orangePastel transition ease-in-out delay-300"
          >
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
            <!-- icon bars -->
            <font-awesome-icon
              v-if="!open"
              class="block h-6 w-6"
              aria-hidden="true"
              icon="fa-solid fa-bars"
            />
            <!-- icon close -->
            <font-awesome-icon
              v-else
              class="block h-6 w-6"
              icon="fa-solid fa-xmark"
              aria-hidden="true"
            />
          </DisclosureButton>
        </div>
        <div class="flex justify-center flex-shrink-0 items-center">
          <logo class="h-14 w-auto" />
        </div>
        <div class="flex items-center justify-center md:items-stretch md:justify-start">
          <div class="hidden md:ml-6 md:block">
            <div class="flex space-x-4 items-center">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[
                  item.current ? ' text-orangePastel ' : 'text-white hover:text-orangePastel',
                  'rounded-md px-3 py-2 text-sm font-medium'
                ]"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <DisclosurePanel class="md:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            item.current ? 'bg-gray-900 text-orangePastel ' : 'text-white hover:text-orangePastel',
            'block rounded-md px-3 py-2 xxsm:text-sm sm:text-base font-medium '
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import logo from '@/components/icons/logo.vue'

const navigation = [
  { name: 'Beranda', href: '#', current: true },
  { name: 'Sejarah Lontar', href: '#', current: false },
  { name: 'Koleksi Lontar', href: '#', current: false },
  { name: 'Tentang Kami', href: '#', current: false }
]
</script>
