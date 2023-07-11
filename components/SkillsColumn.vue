<!-- This component is archived and not in use -->
<template>
  <div class="flex flex-col">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <h4>{{ subtitle1 }}</h4>
    <ul class="flex">
      <li v-for="item in list1">{{ item }}</li>
    </ul>
    <h4>{{ subtitle2 }}</h4>
    <ul>
      <li v-for="item in list2">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">

type SecondarySection = {
  title: String,
  skills: String[],
  orientation: 'vertical' | 'horizontal',
}

defineProps({
  title: String,
  description: String,
  subtitle1: String,
  list1: Array<String>,
  subtitle2: String,
  list2: Array<String>,
});

</script>
