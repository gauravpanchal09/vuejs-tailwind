<template>
  <div class="bg-white w-full min-h-screen w-[1920px]">
    <!-- Header Section -->
    <Header />

    <!-- Hero Section -->
    <Hero />

    <!-- Feature Section -->
    <FeatureSection />

    <!-- Testimonials Section -->
    <Testimonials />

    <!-- Footer -->
    <Footer />
  </div>
</template>


<script setup>
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Testimonials from "./components/Testimonials.vue";
import FeatureSection from "./components/FeatureSection.vue";
import Footer from "./components/Footer.vue";
</script>
