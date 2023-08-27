<script setup lang="ts">
  const emit = defineEmits<{
    (e: 'change', event: Event): void
  }>()


function onChange (event: Event) {
  emit('change', event)
}
</script> 

<template>
  <div class="zone">
    <UploadInput @change="(e) => onChange(e)">
      <template #default="{onClick}">
        <Button
          icon="i-pixelarticons:image"
          :hover="false"
          type="button"
          class="primary"
          @click="onClick"
        >
          Add Image
        </Button>
      </template>
    </UploadInput>
  </div>
</template>

<style lang="scss">
.zone button {
  width: 200px;
}
</style>
