<script setup lang="ts">
withDefaults(defineProps<{steps?: number}>(),{
  steps: 20
})
</script>

<template>
  <div class="spinner">
    <Line v-for="step in steps" :index="step"/>
  </div>
  
</template>

<style lang="scss" scoped>
.spinner {
  margin: 100px;
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //background: var(--shade);
  //border: solid 3px var(--accent);
  border-radius: 50%;
  --size: 100px;
  width: var(--size);
  height: var(--size);
  overflow: hidden;
  animation: steer 1.6s ease-in-out infinite alternate;
}

@keyframes steer {
  0% { transform: rotate(90deg); }
  100% { transform: rotate(90deg); }
}
</style>