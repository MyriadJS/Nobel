<script setup lang="ts">
  defineEmits<{
    (e: 'change', event: Event): void
  }>()
</script> 

<template>
  <div class="zone">
    <UploadInput @change="$emit('change', $event)">
      <template #default="{onClick}">
        <ButtonIcon
          icon="i-pixelarticons:image"
          @click="onClick"
        />
      </template>
    </UploadInput>
  </div>
</template>

<style lang="scss">
.zone {

}
</style>
