<script setup lang="ts">
  defineProps<{images: string[]}>()
</script>

<template>
  <div class="gallery">
    <nuxt-img
      v-if="true"
      v-for="image in images"
      provider="cloudinary"
      alt="avatar"
      :src="image"
      :width="300"
      :key="image"
    />
  </div>
</template>

<style lang="scss">

.gallery {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  //gap: var(--space-s);
  width: 100%;
  height: 300px;
  border: var(--border);
  //padding: var(--space-s);
  border-radius: var(--radius);
  overflow: hidden;
}

.gallery img {
  object-fit: cover;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.gallery:has(> :last-child:nth-child(1)) img {
  grid-row: span 2;
  grid-column: span 2;
}

.gallery:has(> :last-child:nth-child(2)) img {
  grid-row: span 2;
}

.gallery:has(> :last-child:nth-child(3)) img:nth-child(1) {
  grid-row: span 2;
}
</style>
