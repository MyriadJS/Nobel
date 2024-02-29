<script setup lang="ts">
const emit = defineEmits<{
  (e: 'change', event: Event): void
  (e: 'delete', index: number): void
}>()

const props = defineProps<{
  files: File[]
  controls: boolean
}>()

const uploadWrapper = useFlip({ disabled: false })

const layout = ref(true)

function changeLayout(bool = !layout.value) {
  uploadWrapper.flip(() => {
    layout.value = bool
  })
}

const urls = computed(() => {
  return props.files.map((file) => URL.createObjectURL(file))
})
</script>

<template>
  <div class="upload" :ref="uploadWrapper.element">
    <div class="layout" :class="layout" v-if="files.length && controls">
      <h3 id="title">Files</h3>
      <UploadInput :interactive="false" @change="$emit('change', $event)" />
      <Switch
        :value="layout"
        :onChange="(value) => changeLayout(value)"
        onIcon="i-pixelarticons:image-multiple"
        offIcon="i-pixelarticons:view-list"
      />
    </div>

    <div class="images" :class="{ empty: !files.length }" v-if="urls">
      <ImageGallery v-if="layout" :images="urls" :nuxt="false" />
      <ImageFiles v-else :files="files" @delete="emit('delete', $event)" />
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.upload {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  width: 100%;
}
.layout {
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: var(--space-xs);
  background: var(--background);
}

.upload .layout h3#title {
  display: flex;
  align-items: center;
  text-align: left;
}

.layout .icon {
  cursor: pointer;
  height: var(--block-inner-size);
}

.layout .icon.active:not(.disabled) {
  cursor: default;
  pointer-events: none;
  color: var(--accent);
  background-color: var(--accent-20);
}

.layout .icon.disabled {
  pointer-events: none;
  opacity: 0.2;
}

.images.empty {
  display: none;
}

.images .files {
  position: relative;
  z-index: 4;
  //margin-top: var(--block-size);
}
</style>
