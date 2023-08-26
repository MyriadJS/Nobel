<script setup lang="ts">
import inverseRadius from '../mask.js?url'

const {
  side = 'left',
} = defineProps<{
  side?: 'left' | 'right' | 'top' | 'bottom'
}>()

onMounted(() => {
  if(!window) return
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  CSS.paintWorklet.addModule(inverseRadius);
})
</script>

<template>
  <div class="corner" :class="side" />
</template>

<style lang="scss" scoped>
.corner {
  --size: 25px;
  position: absolute;
  height: var(--size);
  aspect-ratio: 1 / 1;
  background-color: var(--background);
  
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
