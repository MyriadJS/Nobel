<script setup lang="ts">
defineProps<{
  files: File[]
}>()

const emit = defineEmits<{
  (e: 'delete', index: number): void
}>()

function getSrc(imgFile: File) {
  return URL.createObjectURL(imgFile)
}

function fileName(file: File) {
  const name = file.name
  const index = name.lastIndexOf('.')
  return name.substring(0, index).substring(0, 17) + '...'
}

function fileSize(file: File) {
  return file.size > 1000000 ? valueInMB(file) : valueInKB(file)
}

function valueInKB(file: File) {
  return Math.floor(file.size / 1000) + 'KB'
}

function valueInMB(file: File) {
  return Math.floor(file.size / 1000000) + 'MB'
}

function removeFile(index: number) {
  emit('delete', index)
}
</script>

<template>
  <div class="files">
    <div v-for="(file, index) in files" :key="0" class="file">
      <img :src="getSrc(file)" />
      <div class="meta">
        <p class="caption">{{ fileName(file) }}</p>
        <p class="caption">{{ fileSize(file) }} - {{ file.type }}</p>
      </div>
      <Icon
        class="focus"
        icon="i-pixelarticons:close"
        @click="() => removeFile(index)"
        @keyup.enter="() => removeFile(index)"
        tabindex="0"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.files {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.file {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: var(--space-s);
  background: var(--background);
  padding: var(--space-xs);
  padding-right: 0px;
  border-radius: var(--radius);
  width: 100%;
}

.file .icon {
  cursor: pointer;
}

img {
  aspect-ratio: 1 / 1;
  width: var(--block-inner-size);
  border-radius: var(--radius);
}
</style>
