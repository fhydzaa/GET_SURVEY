<template>
<div>
  <header class="bg-white ">
    <div class="max-w-7xl mx-auto py-1 px-4 sm:px-1 lg:px-8 font-inter">
      <h1 v-if="title" class="text-3xl font-bold text-gray-900">
        {{ title }}
      </h1>
      <slot name="header"></slot>
    </div>
  </header>
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <!-- Replace with your content -->
      <div class="px-4 sm:px-0">
        <slot></slot>
      </div>
      <!-- /End replace -->
    </div>
  </main>
</div>
</template>

<script setup>
const props = defineProps({
  title: String,
});
</script>

<style></style>
