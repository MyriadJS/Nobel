<script setup lang="ts">
  const props = defineProps<{images: string[]}>()
  const first4 = props.images.slice(0, 4)
  const maxReached = props.images.length > 9;
  const amount = maxReached ? "9+" : props.images.length 
</script>

<template>
  <div class="gallery" :class="{maxReached: images.length > 4}">
    <div 
      class="image"  
      v-for="image in first4"
      :key="image"
    >
      <nuxt-img
        provider="cloudinary"
        alt="avatar"
        :src="image"
        :width="300"
      />
    </div>
  </div>
</template>

<style lang="scss">

.gallery {
  position: relative;

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

.gallery.maxReached img:after {
  content: "9+";
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: var(--accent);
}

.gallery .image img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.gallery .image {
  object-fit: cover;
  overflow: hidden;
}

.gallery:has(> :last-child:nth-child(1)) .image {
  grid-row: span 2;
  grid-column: span 2;
}

.gallery:has(> :last-child:nth-child(2)) .image {
  grid-row: span 2;
}

.gallery:has(> :last-child:nth-child(3)) .image:nth-child(1) {
  grid-row: span 2;
}
</style>
