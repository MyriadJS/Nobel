<script setup lang="ts">
  defineEmits<{
    (e: 'change', event: Event): void
  }>()

  const input = ref<HTMLInputElement | null>(null)
</script> 

<template>
  <div class="controls">
    <input
      accept="image/*"
      type="file"
      hidden
      multiple
      @change="$emit('change', $event)"
      ref="input"
    />
    <div @click="() => input?.click()">
      <slot>
        <ButtonIcon
          icon="i-pixelarticons:plus"
          type="button"
        />
      </slot>
    </div>
  </div>
</template>

<style lang="scss">
.controls {
  display: flex;
  align-items: center;
  gap: var(--space-xs); 
}
</style>

