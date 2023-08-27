<script setup lang="ts">

const emit = defineEmits<{
  (e: 'delete', index: number): void,
  (e: 'change', event: Event): void
}>()

const props = defineProps<{
  files: File[],
  controls: boolean
}>()

const uploadWrapper = useFlip({disabled: false})

const layout = ref(true)
const compact = ref(false)

function changeLayout(bool = !layout.value) {
  uploadWrapper.flip(() => {
    layout.value = bool
  })
}

//const { upload, uploading } = useUpload()
//const url = await upload(target.files![0])

const urls = computed(() => {
  return props.files.map((file) => URL.createObjectURL(file))
})
</script>

<template>
  <div class="upload" :ref="uploadWrapper.element">
    <div
      class="layout"
      :class="layout" 
      v-if="files.length && controls"
    >
      <p class="caption"> <span>Files</span></p>
      <div class="buttons">
        <Corner side="left" v-if="layout" />
        <UploadInput
          :interactive="false"
          @change="$emit('change', $event)"
        >
          <template #default="{onClick}">
            <ButtonIcon
              icon="i-pixelarticons:plus"
              :tabindex="files.length && layout ? 0 : -1"
              @click="onClick"
            />
          </template>
        </UploadInput>

        <Divider
          style="margin-bottom: 0px"
          foreground="var(--foreground-20)"
          space="0px"
          :vertical="true"
        />

        <Switch
          :value="layout"
          :onChange="(value) => changeLayout(value)"
          :tabindex="files.length && layout ? 0 : -1"
          onIcon="i-pixelarticons:image-multiple" 
          offIcon="i-pixelarticons:view-list"
        />

        <Corner side="bottom" v-if="layout"/>
      </div>
    </div>

    <div
      class="images" 
      :class="{empty: !files.length}"
      v-if="urls"
    >
      <ImageGallery
        v-if="layout"
        :images="urls"
        :nuxt="false"
        :compact="compact"
      />

      <ImageFiles 
        v-else
        :files="files"
        @delete="emit('delete', $event)"
      />
    </div>

    <slot></slot>
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

.buttons {
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--space-xs);
}

.layout {
  position: absolute;
  display: flex;
  gap: var(--space-xs);
  justify-content: space-between;
  align-items: center;
  height: var(--block-size);
  width: 100%;
}

.layout > * {
  box-sizing: content-box;
  display: flex;
  align-items: center;
  background-color: var(--background);
  height: var(--block-inner-size);
  padding: 0px var(--space-xs) var(--space-s) var(--space-s);
}

.layout > *:nth-child(2) {
  position: relative;
  z-index: 5;
  border-bottom-left-radius: var(--outer-radius);
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
  margin-top: var(--block-size);
}
</style>
