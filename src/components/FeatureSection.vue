<template>
  <section class="relative w-full py-16 bg-white" id="features">
    <!-- Heading -->
    <div class="text-center max-w-2xl mx-auto mb-12 px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-[#1f2278]">
        How is My Web Audit different?
      </h2>
      <p class="text-lg text-gray-600 mt-4">
        We help you close more deals. Here are just a few reasons why we're different.
      </p>
    </div>

    <!-- Features Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
      <!-- Card -->
      <div v-for="(feature, index) in features" :key="index" class="bg-white rounded-2xl shadow-md p-6 flex flex-col 
               bg-[url('@/assets/images/Mask_group2.png')] bg-contain bg-no-repeat bg-right-top">
        <!-- Icon -->
        <div class="flex items-center justify-center w-14 h-14 mb-4">
          <img :src="feature.img" alt="feature image" class="w-12 h-12 object-contain" />
        </div>

        <!-- Title -->
        <h3 class="text-lg font-bold text-[#1f2278] mb-2">
          {{ feature.title }}
        </h3>

        <!-- Description -->
        <p class="text-gray-600 text-sm leading-relaxed">
          {{ feature.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineComponent } from "vue";

// This array holds all features data displayed in the UI  
const features = [
  {
    title: "Beautiful and actionable",
    description:
      "Build no-fluff audit reports in minutes with lots of beautiful layout options. Designed to impress—while still being functional and intuitive.",
    img: '/src/assets/images/group_1.png',
  },
  {
    title: "Measure what matters",
    description:
      "Businesses care about revenue and ROI. We evaluate dozens of points and present them in terms anyone can understand.",
    img: '/src/assets/images/group_2.png',
  },
  {
    title: "Doubles as a lead magnet",
    description:
      "Embed a free audit tool on your site. This high-value tool gets 4 times more leads than a general PDF lead magnet.",
    img: '/src/assets/images/group_9.png',
  },
  {
    title: "Crafted to convert",
    description:
      "Audit recommendations appear in easy-to-understand terms that are perfect for connecting with leads, delivering value and smoothing the sales process.",
    img: '/src/assets/images/group_6.png',
  },
  {
    title: "Personalized for you",
    description:
      "From email messages to CTAs, from logos to countdown timers—we've thought of it all. Just a few clicks and MWA is truly yours.",
    img: '/src/assets/images/group_7.png',
  },
  {
    title: "Reviews sites in a snap",
    description:
      "Our easy-to-use browser extension helps you audit a site and its competitors—using both manual and automatic checks—in less than 5 minutes.",
    img: '/src/assets/images/group_3.png',
  },
  {
    title: "Ready for your sales process",
    description:
      "MWA includes testimonials to build trust, countdown timers to motivate leads, and tested CTAs to inspire them to buy.",
    img: '/src/assets/images/group_5.png',
  },
  {
    title: "Monitors client activity",
    description:
      "Get notifications and alerts when sales emails are opened and audits are read—and follow up faster with hot leads.",
    img: '/src/assets/images/group_4.png',
  },
  {
    title: "Zapier integration & workflows",
    description:
      "Connect the apps you use in your lead generation and sales process with My Web Audit so you can automate your workflows.",
    img: '/src/assets/images/group_1.png',
  },

];
</script>
