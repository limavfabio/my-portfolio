<script setup lang="ts">
defineProps({
  title: { type: String, required: true },
})
</script>

<template>
  <div class="mb-16 flex flex-col lg:mx-20 xl:mx-30 lg:mb-20 lg:flex-row">
    <h2 class="mb-8 text-2xl font-serif font-italic lg:min-w-70 xl:min-w-80">
      {{ title }}
    </h2>
    <p class="text-3xl">
      <slot />
    </p>
  </div>
</template>
