<script setup lang="ts">
  const {
    interactive = true
  } = defineProps<{
    interactive?: boolean
  }>()

  defineEmits<{
    (e: 'change', event: Event): void
  }>()

  const input = ref<HTMLInputElement | null>(null)

  function onClick() {
    input?.value?.click()
  }
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
    <div @click="() => interactive && onClick()">
      <slot :onClick="onClick">
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

