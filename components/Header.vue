<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
const scrolled = ref(false)

function handleScroll() {
  scrolled.value = window.scrollY > 32
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const headerClasses = computed(() => ({
  'text-zinc-2': scrolled.value,
  'bg-zinc-2': !scrolled.value,
}))
</script>

<template>
  <div class="bg-slate-9 bg-opacity-95 transition duration-300 md:h-8" :class="headerClasses" />
  <header
    :class="headerClasses"
    class="sticky top-0 z-2 h-16 flex bg-slate-9 bg-opacity-95 backdrop-blur-sm transition-all duration-300"
  >
    <div class="mx-auto flex items-center justify-between pl-3 pr-6 container">
      <a href="#" class="text-4xl font-bold">Fábio Lima</a>
      <nav class="flex gap-6">
        <a href="https://linkedin.com/in/limavfabio" target="_blank" class="i-ant-design-linkedin-filled text-3xl" />
        <a href="https://twitter.com/limavfabio" target="_blank" class="i-ant-design-twitter text-3xl" />
        <a href="https://github.com/limavfabio" target="_blank" class="i-ant-design-github text-3xl" />
      </nav>
    </div>
  </header>
</template>
