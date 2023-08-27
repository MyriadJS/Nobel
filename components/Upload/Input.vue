<script setup lang="ts">
  const emit = defineEmits<{
    (e: 'change', event: Event): void
  }>()

  const input = ref<HTMLInputElement | null>(null)
  const onClick = () => input?.value?.click()
  const onChange = (event: Event) => {
    emit('change', event)
  }
</script> 

<template>
  <div class="controls">
    <input
      accept="image/*"
      type="file"
      hidden
      multiple
      @change="(e) => onChange(e)"
      ref="input"
    />
    <slot :onClick="onClick">
      <ButtonIcon
        icon='i-pixelarticons:plus'
        type="button"
        @click="onClick"
      />
    </slot>
  </div>
</template>

<style lang="scss">
.controls {
  display: flex;
  align-items: center;
  gap: var(--space-xs); 
}
</style>

