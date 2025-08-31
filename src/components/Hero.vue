<template>
  <section
    class="relative bg-[#14114A] bg-[url('./assets/images/bg.png')] bg-cover bg-center text-white h-auto pt-[10em] pb-[10em] hero-bg"
    id="heroSection">
    <div class="relative z-10 container mx-auto px-4 lg:px-12 py-12 lg:py-15">
      <div class="grid lg:grid-cols-2 gap-10 items-center">

        <!-- LEFT CONTENT -->
        <div class="space-y-6 text-center lg:text-left">
          <h1 class="font-poppins font-bold text-3xl md:text-4xl lg:text-[46px] leading-snug">
            Audits that help your agency close more deals.
          </h1>
          <p class="text-base md:text-lg text-gray-200 max-w-lg mx-auto lg:mx-0">
            Build trust faster and close more—and bigger—deals with beautiful, actionable, and easy to understand
            website audits.
          </p>

          <!-- Email Signup Component -->
          <EmailSignup />
        </div>

        <!-- RIGHT IMAGE + BADGE -->
        <div class="flex justify-center lg:justify-center relative">
          <img class="w-72 md:w-96 lg:w-[420px] relative z-10" src="../assets/images/Group520.png" alt="Customer" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import EmailSignup from "./EmailSignup.vue";
</script>