<script setup lang="ts">
import mask from '../mask.js?url'

const {
  side = 'left',
} = defineProps<{
  side?: 'left' | 'right' | 'top' | 'bottom'
}>()

onMounted(() => {
  if(!window) return
  CSS.paintWorklet.addModule(mask);
})
</script>

<template>
  <div class="corner" :class="side">
  </div>
</template>

<style lang="scss" scoped>
.corner {
  --size: 25px;
  position: absolute;
  height: var(--size);
  aspect-ratio: 1 / 1;
  background-color: var(--background);
  // background-color: red;

  --inverse-radius: var(--radius);
  --inverse-radius-direction: top-right;
  mask-image: paint(inverse-radius);
}

.corner.left {
  top: 0px; left: calc(var(--size) * -1);
}

.corner.bottom {
  bottom: calc(var(--size) * -1); right: 0px;
}
</style>
