<script setup lang="ts">
// This imports and registers Swiper.js WebComponents
import { register } from 'swiper/element/bundle'

register()
</script>

<template>
  <div>
    <TextSection
      title="My recent works" body="Hello I’m a software developer! I can help you build a product,
      feature or website Look through some of my work and experience!
      If you like what you see and have a project you need coded, don’t hestiate to contact me."
    />

    <!-- Main swiper element -->
    <swiper-container class="h-120" navigation="true" pagination="true">
      <swiper-slide class="flex justify-center bg-red">
        <nuxt-img src="/indie-gaming-screenshot.png" class="cursor-pointer" sizes="xl:900 lg:560 md:480" />
      </swiper-slide>
      <swiper-slide class="bg-green">
        Slide 2
      </swiper-slide>
      <swiper-slide class="bg-blue">
        Slide 3
      </swiper-slide>
    </swiper-container>
  </div>
</template>
