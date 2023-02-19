<script setup lang="ts">
const props = defineProps<{
  index: number,
  length: number,
  dynamic: boolean
}>()

function middleHeight() {
  let length = props.length
  let index = props.index
  let dynamic = props.dynamic
  return dynamic 
    ? calculateValue(length, index)
    : length / 2
}

function calculateValue(length: number, index: number) {
  // Calculate the distance from the center of the max value
  const distanceFromCenter = Math.abs(index - (length / 2));
  // Calculate a ratio from 0 to 1 based on the distance from the center
  const ratio = 1 - (distanceFromCenter / (length / 2));
  // Multiply the index by the ratio to get the final value
  return index * ratio;
}

const line = reactive({
  opacity: middleHeight() * 0.1,
  height: middleHeight() * 2 + "px",
  delay: props.index * 0.1 + "s",
  capScale: middleHeight() * 0.1
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
  --thickness: 2px;
  --height: v-bind('line.height');
  position: relative;
  width: var(--thickness); 
  height: var(--height);
  background-color: var(--accent);
  animation: pulse 0.8s ease-in-out v-bind('line.delay') infinite alternate;
}

.line .cap {
  position: absolute;
  aspect-ratio: 1/1;
  width: 100%;
  background-color: var(--foreground);
  border-radius: 50%;
  transform: scale(v-bind('line.capScale'));
  &:nth-of-type(1) { bottom: var(--thickness); }
}

@keyframes pulse {
  0% { height: var(--thickness); }
  100% { height: var(--height); }
}
</style>