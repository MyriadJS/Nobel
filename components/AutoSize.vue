<script setup lang="ts">
  const emit = defineEmits(['change'])

  const size = ref<HTMLElement>()
  const { height } = useSize(size, (e) => emit('change', e))
</script>

<template>
  <div class="content-wrapper">
    <div class="size" ref="size">
      <slot/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .content-wrapper {
    max-height: calc(v-bind(height) * 1px);
    min-height: calc(v-bind(height) * 1px);
    overflow: hidden;
    transition: 0.4s;
  }
</style>