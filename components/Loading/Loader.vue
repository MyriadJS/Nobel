<script setup lang="ts">
  interface Props {
    loading: boolean;
    duration?: number;
  }
  const props = defineProps<Props>()
  const loading = toRef(props, 'loading')

  const { progress } = useProgress(loading, props.duration)
  const { classes } = useCycle(loading, progress, props.duration)

  const height = ref(0)
</script>

<template>
  <div class="loader" :class="classes">
    <AutoSize @change="(e) => height = e">
      <slot/>
    </AutoSize>
    <div class="spin">
      <SpinnerSinewave v-if="true" :steps="40"/>
      <LoadingBar v-if="false" :progress="progress"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loader {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: var(--space);
  transition: 0.4s;
}

.loader.loading .AutoSize {
  opacity: 0.2;
  filter: blur(2px);
}
  
.loader .spin {
  position: absolute;
  display: flex;
  align-items: center;
  min-height: calc(v-bind(height) * 1px);
  opacity: 1;
  transition: .4s;
}

.loader.loading .spin {
  opacity: 1;
}
</style>