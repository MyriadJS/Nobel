<script setup lang="ts">
interface Props {
  icon?: string
}

withDefaults(defineProps<Props>(), {
  icon: 'i-pixelarticons:chevron-right',
})
</script>

<template>
  <div class="icon">
    <i :class="icon" />
  </div>
</template>

<style lang="scss" scoped>
.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--radius);
  background-color: var(--background-20);
  aspect-ratio: 1/1;
}

i {
  display: block;
  min-width: var(--block-inner-size);
}
</style>
