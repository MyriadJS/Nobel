<script setup lang="ts">
const props = defineProps<{
  index: number
}>()

onMounted(() => {
  console.log(props.index)
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
}

.line {
  --thickness: 3px;
  position: relative;
  height: var(--thickness); width: 50px;
  background-color: var(--accent);
  animation: pulse 0.8s ease-in-out calc(v-bind(index) * 0.1s) infinite alternate;
}

.line .cap {
  position: absolute;
  top: 0px;
  aspect-ratio: 1/1;
  height: 100%;
  background-color: var(--foreground);
  border-radius: 50%;
  transform: scale(2.5);
  &:nth-of-type(1) { 
    right: 0px; background-color: var(--shade); }
}

@keyframes pulse {
  0% { width: var(--thickness); }
  100% { width: 50px; }
}
</style>