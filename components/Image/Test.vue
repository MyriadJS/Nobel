<script setup lang="ts">
const props = withDefaults(defineProps<{
  src: string
  compact?: boolean
  max?: number
  nuxt?: boolean
}>(), {
  alt: "image",
  width: 30,
  nuxt: true
})
</script>

<template>
  <nuxt-img
    v-if="nuxt"
    provider="cloudinary"
    v-bind="props"
    width="150"
  />
  <img
    v-else
    v-bind="props"
    width="150"
  />
</template>

<style lang="scss">
img {
  background-color: var(--background-10);
}
</style>