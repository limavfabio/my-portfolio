<script setup lang="ts">
// This imports and registers Swiper.js WebComponents
import { register } from 'swiper/element/bundle'

register()

const isDesktop = computed(() => {
  if (process.client)
    return window.innerWidth > 1024
})

// Just define the works here and they will be rendered in the slider
const recentWorks = [
  {
    title: 'Indie Gaming',
    image: '/indie-gaming-screenshot.png',
    link: 'https://github.com/limavfabio/summit-template',
  },
  {
    title: 'Calculator App',
    image: '/math-magicians-screenshot.png',
    link: 'https://github.com/limavfabio/math-magicians',
  },
]
</script>

<template>
  <div class="mb-20">
    <TextSection
      title="My recent works"
    >
      I have worked on a wide range of projects. Take a look at some of them
    </TextSection>

    <!-- Main swiper element -->
    <!-- Is wrapped in ClientOnly to avoid problems with calling the window object on the server
    This is because of the binded navigation attribute, isDesktop calls the window object
    which is only available on the client -->
    <ClientOnly>
      <swiper-container class="xl:h-120" :navigation="isDesktop" pagination="true">
        <swiper-slide v-for="item in recentWorks" :key="item.title" class="flex justify-center">
          <a :href="item.link" target="_blank" class="lg:mx-20">
            <nuxt-img :src="item.image" class="cursor-pointer" :alt="item.image" />
          </a>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
  </div>
</template>
