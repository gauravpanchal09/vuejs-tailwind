<template>
  <div class="bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden">
    <!-- Text -->
    <div class="p-[50px] flex-1">
      <div class="">
        <h3 class="text-xl font-bold text-[#0a1c3e] mb-3 font-poppins">{{ title }}</h3>
        <p class="text-gray-600 mb-6">{{ truncate(description) }}</p>
        <a href="#"
          class="underline decoration-[#308DD3] decoration-2 underline-offset-4 text-blue-600 font-bold flex items-center gap-1 text-[#308DD3] ">
          VIEW ALL SUCCESS STORIES →
        </a>
      </div>
    </div>

    <!-- Image + overlay -->
    <div class="relative h-48">
      <img :src="image" alt="author" class="w-full h-full object-cover" />
      <div class="absolute bottom-4 left-4 text-white">
        <p class="font-bold">{{ name }}</p>
        <p class="text-sm opacity-80">{{ company }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  description: String,
  name: String,
  company: String,
  image: String,
});

// Helper function for truncation
function truncate(text) {
  console.log(text);
  const words = text.split(" ");
  return words.length > 50 ? words.slice(0, 50).join(" ") + "..." : text;
}

</script>
