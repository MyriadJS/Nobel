<script setup lang="ts">
  const emit = defineEmits(['change'])

  const size = ref<HTMLElement>()
  const height = ref(0)

  onMounted(() => {
    if(!size.value) return
    myObserver.observe(size.value)
  })

const myObserver = new ResizeObserver(entries => {
  entries.forEach(entry => {
    height.value = entry.contentRect.height
    emit('change', height.value)
  });
});
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