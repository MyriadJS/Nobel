<script setup lang="ts">
import { onChange } from './actions';
const input = ref<HTMLInputElement | null>(null)
</script>

<template>
  <input
    accept="image/*"
    type="file"
    hidden
    multiple
    @change="onChange"
    ref="input"
  />
  <div @click="() => input?.click()">
    <slot>
      <Button 
        icon="i-pixelarticons:plus"
        intention="add"
        type="button"
      >
        add images
      </Button>
    </slot>
  </div>
</template>

<style scoped>
button {
  margin: auto;
  background: var(--background);
  min-width: 200px;
}
</style>