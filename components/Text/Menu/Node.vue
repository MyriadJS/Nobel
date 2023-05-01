<script setup lang="ts">
  const emit = defineEmits<{
    (e: 'change', event: Event): void
  }>()

  function handleChange(event: Event) {
    emit('change', event)
  }

  const input = ref<HTMLInputElement | null>(null)
</script> 

<template>
  <Divider
    style="margin-bottom: 0px"
    foreground="var(--foreground-20)"
    background="var(--background-10)"
    space="var(--space)"
  />
  <div class="controls">
    <input
      accept="image/*"
      type="file"
      hidden
      multiple
      @change="handleChange"
      ref="input"
    />
    <div @click="() => input?.click()">
      <ButtonIcon 
        icon="i-pixelarticons:image"
        intention="add"
        type="button"
      />
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

