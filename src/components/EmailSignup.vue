<template>

  <div class="text-white px-4 sm:px-0">
    <div class="max-w-4xl mx-auto">
      <!-- Top row: Email + Try button View success -->
      <div class="flex flex-col md:flex-row items-center md:items-stretch md:space-x-4 space-y-4 md:space-y-0">
        <!-- Email Form -->
        <form @submit.prevent="submitForm" class="flex w-full md:max-w-xl">
          <input v-model="email" type="email" placeholder="&nbsp;&nbsp;Email" class="flex-1 rounded-l-lg border border-gray-300 text-gray-800 bg-white 
                   focus:ring-2 focus:ring-green-500 focus:outline-none
                   w-full sm:w-[250px] md:w-[400px] lg:w-[400px]" aria-label="Email address" />
          <button type="submit" class=" bg-[#82b440] text-white font-semibold 
                   rounded-r-lg hover:bg-[#6fa035] transition-colors text-[14px]">
            &nbsp; TRY FOR FREE &nbsp;
          </button>
        </form>

        <!-- Secondary CTA -->
        <button type="button" class="flex items-center justify-center text-center font-semibold 
                  text-white uppercase tracking-wide hover:opacity-80 transition
                  w-full md:w-auto text-[14px] ">
          <span class="">OR VIEW SUCCESS STORIES</span>
          <svg class="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 
                  01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 
                  1 0 010-1.414z" />
          </svg>
        </button>

      </div>

      <!-- Bottom text -->
      <p class="text-gray-300 mt-6 text-left text-sm sm:text-base">
        Runs on ALL popular website platforms from WordPress and Wix to Shopify and Magento.
      </p>

      <!-- Messages -->
      <p v-if="error" class="text-red-400 mt-2 text-sm sm:text-base">{{ error }}</p>
      <p v-if="success" class="text-green-400 mt-2 text-sm sm:text-base">
        ✅ Thanks! We’ll be in touch.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const error = ref("");
const success = ref(false);

function submitForm() {
  error.value = "";
  success.value = false;

  if (!email.value || !email.value.includes("@")) {
    error.value = "Please enter a valid email";
    return;
  }

  setTimeout(() => {
    success.value = true;
    email.value = "";
  }, 600);
}
</script>
