<script setup lang="ts">
const props = defineProps<{
  index: number,
  length: number,
  dynamic: boolean
}>()

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function middleHeight() {
  let length = props.length
  let index = props.index
  let dynamic = props.dynamic

  return dynamic 
    ? clamp(centerDistance(length, index) * 20, 10, 10)
    : length / 2
} 

function centerDistance(length: number, index: number) {
  // Calculate the distance from the center of the max value
  // Calculate a ratio from 0 to 1 based on the distance from the center
  const distanceFromCenter = Math.abs(index - (length / 2));
  return 1 - (distanceFromCenter / (length / 2));
}

const line = reactive({
  opacity: middleHeight() * 0.1,
  height: middleHeight() * 2 + "px",
  width: middleHeight() * 0.15 + "px",
  delay: props.index * 0.1 + "s",
})
</script>

<template>
  <div class="center">
    <div class="line">
      <div class="cap"></div>
      <div class="cap"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: v-bind('line.opacity');
}

.line {
  position: relative;

  width: v-bind('line.width'); 
  height: v-bind('line.height');
  background-color: var(--accent);

  animation: pulse 0.8s ease-in-out infinite alternate;
  animation-delay: v-bind('line.delay');
}

.line .cap {
  --offset: calc(0px - (v-bind('line.width') / 2));
  position: absolute;
  aspect-ratio: 1/1;
  width: 100%;
  background-color: var(--foreground);
  border-radius: 50%;
  transform: scale(2);
  &:nth-of-type(2) { top: var(--offset); }
  &:nth-of-type(1) { bottom: var(--offset); }
}

@keyframes pulse {
  0% { height: v-bind('line.width');  }
  100% { height: v-bind('line.height'); }
}
</style>