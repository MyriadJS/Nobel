<script setup lang="ts">
  const emit = defineEmits(['change'])

  const size = ref<HTMLElement>()
  const { height } = useSize(size, (e) => emit('change', e))
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
    max-height: calc(v-bind(height) * 1px);
    min-height: calc(v-bind(height) * 1px);
    overflow: hidden;
    transition: 0.4s;
  }
</style>