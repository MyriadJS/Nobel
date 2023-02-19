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
      <Spinner :steps="40"/>
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

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: calc(v-bind(progress) * 1%);
    height: 100%;
    background: var(--accent);
    opacity: 0.2;
    z-index: 1;
  }
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
  opacity: 0.7;
  transition: .4s;
}

.loader.loading .spin {
  opacity: 1;
}
</style>