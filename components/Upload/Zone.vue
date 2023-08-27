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
        class="primary"
      >
        Add Image
      </Button>
    </UploadInput>
  </div>
</template>

<style lang="scss">
.zone button {
  width: 200px;
}
</style>
