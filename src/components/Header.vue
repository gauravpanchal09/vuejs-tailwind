<template>
  <!-- Sticky Header -->
  <header class="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <img class="h-8 w-auto object-contain" src="../assets/images/mywebaudit 1.png" alt="MyWebAudit" />
        </div>

        <div class="hidden lg:flex items-center space-x-4">
          <!-- Desktop Nav -->
          <nav class="hidden lg:flex items-center space-x-6">
            <button @click="scrollTo('heroSection')"
              class="font-poppins font-semibold text-[18px] leading-[100%] tracking-[0]">Home</button>
            <button @click="scrollTo('features')"
              class="font-poppins font-semibold text-[18px] leading-[100%] tracking-[0]">Features</button>
            <button @click="scrollTo('testimonials')"
              class="font-poppins font-semibold text-[18px] leading-[100%] tracking-[0]">Testimonials</button>
          </nav>

          <!-- Buttons -->
          <button class="px-6 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600">
            FREE TRIAL
          </button>
          <button class="px-6 py-2 border-2 border-green-500 text-green-500 font-bold rounded-lg hover:bg-green-50">
            LOGIN
          </button>
        </div>

        <!-- Mobile Toggle -->
        <button class="lg:hidden p-2 relative" @click="toggleMenu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="lg:hidden absolute top-full left-0 w-full bg-white border-t shadow-lg z-40">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <button @click="scrollTo('home'); toggleMenu()"
            class="block px-3 py-2 text-gray-700 hover:text-blue-600 font-semibold">Home</button>
          <button @click="scrollTo('features'); toggleMenu()"
            class="block px-3 py-2 text-gray-700 hover:text-blue-600 font-semibold">Features</button>
          <button @click="scrollTo('testimonials'); toggleMenu()"
            class="block px-3 py-2 text-gray-700 hover:text-blue-600 font-semibold">Testimonials</button>
          <div class="flex flex-col space-y-2 px-3 py-2">
            <button class="px-4 py-2 bg-green-500 text-white font-bold rounded-lg">FREE TRIAL</button>
            <button class="px-4 py-2 border-2 border-green-500 text-green-500 font-bold rounded-lg">LOGIN</button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

// Toggles the navigation menu on mobile devices
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

// Handles smooth scrolling when a navigation button is clicked
function scrollTo(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
</script>