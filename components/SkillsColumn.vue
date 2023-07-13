<!-- This component is archived and not in use -->
<script setup lang="ts">
interface _SecondarySection {
  title: string
  skills: string[]
  orientation: 'vertical' | 'horizontal'
}

defineProps({
  title: String,
  description: String,
  subtitle1: String,
  list1: Array<string>,
  subtitle2: String,
  list2: Array<string>,
})
</script>

<template>
  <div class="flex flex-col">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <h4>{{ subtitle1 }}</h4>
    <ul class="flex">
      <li v-for="item in list1">
        {{ item }}
      </li>
    </ul>
    <h4>{{ subtitle2 }}</h4>
    <ul>
      <li v-for="item in list2">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
