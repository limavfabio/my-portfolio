<script setup lang="ts">
defineProps({
  title: { type: String, required: true },
  body: { type: String, required: true },
})
</script>

<template>
  <div class="my-10 flex flex-col lg:mx-20 lg:my-20 xl:mx-30 lg:flex-row">
    <h2 class="mb-8 text-2xl font-serif font-italic lg:min-w-70 xl:min-w-80">
      {{ title }}
    </h2>
    <p class="text-3xl">
      {{ body }}
    </p>
  </div>
</template>
