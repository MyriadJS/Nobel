<script setup lang="ts">
withDefaults(defineProps<{steps?: number, wobble?: boolean, dynamic?: boolean}>(),{
  steps: 20,
  wobble: false,
  dynamic: true
})
</script>

<template>
  <div class="spinner" :class="{wobble: wobble}">
    <Line 
      v-for="step in steps" 
      :index="step"
      :length="steps"
      :dynamic="dynamic"
      :key="step"
    />
  </div>
</template>

<style lang="scss" scoped>
.spinner {
  display: flex;
  gap: 7px;
  justify-content: center;
  align-items: center;
  background: var(--shade);
  border-radius: 50%;
  --size: 25px;
  width: var(--size);
  height: var(--size);
}

.spinner.wobble {
  animation: steer 1.6s ease-in-out infinite alternate;
}

@keyframes steer {
  0% { transform: rotate(90deg); }
  100% { transform: rotate(-90deg); }
}
</style>