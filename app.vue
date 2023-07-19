<script setup lang="ts">
import '@unocss/reset/tailwind.css'

useHead({
  title: 'Fábio Lima',
  bodyAttrs: {
    class: 'bg-zinc-2',
  },
})
</script>

<template>
  <div class="text-2xl font-sans text-zinc-8">
    <Header />
    <NuxtPage />
  </div>
</template>

<style>

</style>
