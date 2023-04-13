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
  <picture>
    <div class="filter"></div>
    <nuxt-img
      v-if="nuxt"
      provider="cloudinary"
      v-bind="props"
    />
    <img
      v-else
      v-bind="props"
    />
  </picture>
</template>

<style lang="scss">
picture {
  position: relative;
}

img {
  background-color: var(--background-10);
}

.filter {
  position: absolute;
  z-index: 10;
  background-color: var(--accent);
  opacity: 0.7;
  width: 100%;
  height: 100%;
}
</style>