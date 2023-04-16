<script setup lang="ts">
const props = withDefaults(defineProps<{
  src: string
  compact?: boolean
  max?: number
  nuxt?: boolean
}>(), {
  alt: "image",
  width: 300,
  nuxt: true
})
</script>

<template>
  <nuxt-img
    v-if="nuxt"
    provider="cloudinary"
    v-bind="props"
  />
  <img
    v-else
    v-bind="props"
  />
</template>

<style lang="scss">
img {
  background-color: var(--background-10);
}
</style>