<script setup lang="ts">
  const props = defineProps<{images: string[], size?: number, max?: number}>()

  const max = props.max || 4
  const maxReached = props.images.length > max

  const sliced = props.images.slice(0, max)
  const imgHeight = computed(() => {
    if (props.size) return props.size
    return 300
  })
</script>

<template>
  <div class="gallery" :class="{maxReached: maxReached}">
    <div 
      class="image"  
      v-for="image in sliced"
      :key="image"
    >
      <div class="meta" v-if="maxReached">
        <h1>{{ images.length }}</h1>
      </div>
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
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  //grid-template-rows: 1fr 1fr;
  width: 100%;
  height: calc(v-bind(imgHeight) * 1px);
  border-radius: var(--radius);
}

.gallery.maxReached .image .meta {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  pointer-events: none;
}

.gallery.maxReached .image .meta h1 {
  opacity: 1;
  position: relative;
  z-index: 2;
  user-select: none;
}

.gallery.maxReached .image .meta::after {
  content: "";
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: var(--shade);
  opacity: 1;
  opacity: 0.8;
}

.gallery.maxReached .image:nth-last-child(1) .meta {
  display: flex;
  justify-content: center;  
  align-items: center;
  opacity: 1;
  //color: var(--accent-contrast);
}

.gallery .image img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.gallery .image {
  object-fit: cover;
  overflow: hidden;
  position: relative;
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
