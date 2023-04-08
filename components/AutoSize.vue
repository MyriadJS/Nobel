<script setup lang="ts">
  const emit = defineEmits(['change'])

  const size = ref<HTMLElement>()
  const { height, width } = useSize(size, (rect) => emit('change', rect))
</script>

<template>
  <div class="AutoSize">
    <div class="size" ref="size">
      <slot/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .AutoSize {
    position: relative;
    width: 100%;
    height: 100%;
    max-height: calc(v-bind(height) * 1px);
    min-height: calc(v-bind(height) * 1px);
    min-width: calc(v-bind(width) * 1px);
    max-width: calc(v-bind(width) * 1px);
    overflow: hidden;
    transition: 0.4s;
  }

  .size {
    position: absolute;
  }
</style>