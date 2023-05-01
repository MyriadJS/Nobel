<script setup lang="ts">
  defineEmits<{
    (e: 'change', event: Event): void
  }>()
</script> 

<template>
  <div class="zone">
    <UploadInput @change="$emit('change', $event)">
      <Button
        icon="i-pixelarticons:image"
        :hover="false"
        type="button"
      >
        Add Image
      </Button>
    </UploadInput>
  </div>
</template>

<style lang="scss">
.zone button {
  //background: var(--background);
  width: 200px;
}
</style>
