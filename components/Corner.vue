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
    <div class="mask"></div>
  </div>
</template>

<style lang="scss" scoped>
.corner {
  --size: 25px;
  position: absolute;
  height: var(--size);
  aspect-ratio: 1 / 1;
  background-color: var(--background);
}

.corner.left {
  top: 0px; left: calc(var(--size) * -1);
}

.corner.bottom {
  bottom: calc(var(--size) * -1); right: 0px;
}

.corner .mask {
  width: 100%;
  height: 100%;
  background-color: red;
  //border-top-right-radius: var(--outer-radius);
  background: linear-gradient(deeppink, orangered);
  //mask-image: paint(smooth-corners);
}
</style>
