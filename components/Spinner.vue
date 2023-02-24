<script setup lang="ts">
withDefaults(defineProps<{steps?: number, wobble?: boolean, dynamic?: boolean}>(),{
  steps: 20,
  wobble: false,
})
</script>

<template>
  <div class="spinner" :class="{wobble: wobble}">
    <Line 
      v-for="step in steps" 
      :index="step"
      :length="steps"
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

  --size: 25px;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background: var(--shade);

  transition: .4s, opacity .6s;
}

.loader:not(.loading) .spinner {
  gap: 0px;
  opacity: 0;
}

.loading.enter .spinner {
  gap: 0px;
  opacity: 0;
}

.loading.leave .spinner {
  gap: 27px;
  opacity: 0;
}


.spinner.wobble {
  animation: steer 1.6s ease-in-out infinite alternate;
}

@keyframes steer {
  0% { transform: rotate(90deg); }
  100% { transform: rotate(-90deg); }
}
</style>