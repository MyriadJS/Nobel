<script setup lang="ts">
const props = defineProps<{
  index: number
}>()
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
}

.line {
  --thickness: 2px;
  position: relative;
  width: var(--thickness); height: 20px;
  background-color: var(--accent);
  animation: pulse 0.8s ease-in-out calc(v-bind(index) * 0.1s) infinite alternate;
}

.line .cap {
  position: absolute;
  aspect-ratio: 1/1;
  width: 100%;
  background-color: var(--foreground);
  border-radius: 50%;
  transform: scale(2);
  &:nth-of-type(1) { bottom: 0px; }
}

@keyframes pulse {
  0% { height: var(--thickness); }
  100% { height: 20px; }
}
</style>