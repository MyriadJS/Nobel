<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    images: string[]
    compact?: boolean
    max?: number
    nuxt?: boolean
  }>(),
  {
    nuxt: true,
  }
)

const defaultMax = props.compact ? 2 : 4
const max = props.max ? props.max : defaultMax
const maxReached = props.images.length > max

const sliced = computed(() => props.images.slice(0, max))
const imgHeight = computed(() => (props.compact ? 50 : 300))
</script>

<template>
  <div class="gallery" :class="{ maxReached }">
    <div class="image" v-for="src in sliced" :key="src">
      <div class="meta" v-if="maxReached">
        <p class="h1">{{ images.length }}</p>
      </div>
      <ImageTest :src="src" :nuxt="nuxt" />
    </div>
  </div>
</template>

<style lang="scss">
.gallery {
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: calc(v-bind(imgHeight) * 1px);
  border-radius: var(--radius);
}

.gallery:empty {
  display: none;
}

.gallery.maxReached .image .meta {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  pointer-events: none;
}

.gallery.maxReached .image .meta p.h1 {
  opacity: 1;
  position: relative;
  z-index: 2;
  user-select: none;
}

.gallery.maxReached .image .meta::after {
  content: '';
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: var(--background-10);
  opacity: 1;
  opacity: 0.8;
}

.gallery.maxReached .image:nth-last-child(1) .meta {
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
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
