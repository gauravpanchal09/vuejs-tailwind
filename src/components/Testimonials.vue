<template>
  <section
    class="relative testimonials-bg bg-[url('@/assets/images/copy.png')] bg-cover bg-center bg-no-repeat w-full text-white"
    id="testimonials">

    <div class="max-w-6xl container mx-auto text-center pt-[250px] pb-[250px]">
      <!-- Heading -->
      <h2 class="text-3xl md:text-4xl font-bold">Testimonials</h2>
      <p class="text-gray-300 max-w-2xl mx-auto mb-12">
        Hundreds of web professionals use My Web Audit to build trust, add
        value, establish their expertise, stand out from the competition...
        And close more deals. Here are just a few.
      </p>

      <!-- Carousel -->
      <div ref="carousel" class="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 scrollbar-hide scroll-smooth">
        <div v-for="(t, i) in testimonials" :key="i" class="shrink-0 snap-center w-[100%] md:w-1/3">
          <TestimonialCard v-bind="t" />
        </div>
      </div>

      <!-- CTA -->
      <button class="mt-12 bg-green-500 text-white font-bold py-3 mb-8 px-6 rounded-lg hover:bg-green-600">
        VIEW ALL TESTIMONIALS
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import TestimonialCard from "./TestimonialCard.vue";

// This array holds all testimonial data displayed in the UI  
const testimonials = [
  {
    title: "My Web Audit helped us close a couple of deals over $20,000!",
    description:
      "Building trust and delivering value early helped us close a couple of deals over $20,000!",
    name: "Michael D. Wailes",
    company: "Spectrum Interactive Group",
    image: "src/assets/images/02_1.png",
  },
  {
    title: "My Web Audit helped us close a couple of deals over $20,000!",
    description:
      "Building trust and delivering value early helped us close a couple of deals over $20,000!",
    name: "Michael D. Wailes",
    company: "Spectrum Interactive Group",
    image: "src/assets/images/02_1.png",
  },
  {
    title: "My Web Audit helped us close a couple of deals over $20,000!",
    description:
      "Building trust and delivering value early helped us close a couple of deals over $20,000!",
    name: "Michael D. Wailes",
    company: "Spectrum Interactive Group",
    image: "src/assets/images/02_1.png",
  },
  {
    title: "My Web Audit helped us close a couple of deals over $20,000!",
    description:
      "Building trust and delivering value early helped us close a couple of deals over $20,000!",
    name: "Michael D. Wailes",
    company: "Spectrum Interactive Group",
    image: "src/assets/images/02_1.png",
  },
  {
    title: "My Web Audit helped us close a couple of deals over $20,000!",
    description:
      "Building trust and delivering value early helped us close a couple of deals over $20,000!",
    name: "Michael D. Wailes",
    company: "Spectrum Interactive Group",
    image: "src/assets/images/02_1.png",
  },
  {
    title: "My Web Audit helped us close a couple of deals over $20,000!",
    description:
      "Building trust and delivering value early helped us close a couple of deals over $20,000!",
    name: "Michael D. Wailes",
    company: "Spectrum Interactive Group",
    image: "src/assets/images/02_1.png",
  },
  {
    title: "My Web Audit helped us close a couple of deals over $20,000!",
    description:
      "Building trust and delivering value early helped us close a couple of deals over $20,000!",
    name: "Michael D. Wailes",
    company: "Spectrum Interactive Group",
    image: "src/assets/images/02_1.png",
  },
  {
    title: "My Web Audit helped us close a couple of deals over $20,000!",
    description:
      "Building trust and delivering value early helped us close a couple of deals over $20,000!",
    name: "Michael D. Wailes",
    company: "Spectrum Interactive Group",
    image: "src/assets/images/02_1.png",
  },
  {
    title: "My Web Audit helped us close a couple of deals over $20,000!",
    description:
      "Building trust and delivering value early helped us close a couple of deals over $20,000!",
    name: "Michael D. Wailes",
    company: "Spectrum Interactive Group",
    image: "src/assets/images/02_1.png",
  },
  {
    title: "My Web Audit helped us close a couple of deals over $20,000!",
    description:
      "Building trust and delivering value early helped us close a couple of deals over $20,000!",
    name: "Michael D. Wailes",
    company: "Spectrum Interactive Group",
    image: "src/assets/images/02_1.png",
  }

];

const carousel = ref<HTMLElement | null>(null);
let interval: number | null = null;

onMounted(() => {
  const container = carousel.value;
  if (!container) return;

  let index = 0;

  const scrollNext = () => {
    const cards = container.children;
    if (cards.length === 0) return;

    index = (index + 1) % cards.length;
    const card = cards[index] as HTMLElement;
    container.scrollTo({
      left: card.offsetLeft,
      behavior: "smooth",
    });
  };

  interval = window.setInterval(scrollNext, 3000); // every 3s
});

onBeforeUnmount(() => {
  if (interval) clearInterval(interval);
});
</script>