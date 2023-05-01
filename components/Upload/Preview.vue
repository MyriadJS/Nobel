<script setup lang="ts">

const emit = defineEmits<{
  (e: 'delete', index: number): void,
  (e: 'change', event: Event): void
}>()

const props = defineProps<{
  files: File[]
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
    <div class="layout" v-if="files.length">
      <p class="caption">layout: <span>{{ layout ? "image" : "file"}}</span></p>
      <div class="buttons">
        
        <UploadZone @change="$emit('change', $event)">
          <Icon 
            icon="i-pixelarticons:plus"
            :tabindex="files.length && layout ? 0 : -1"
          />
        </UploadZone>

        <Divider
          style="margin-bottom: 0px"
          foreground="var(--foreground-20)"
          space="var(--space-s)"
          :vertical="true"
        />

        <Icon
          class="focus"
          :class="{active: layout, disabled: !files.length}"
          icon="i-pixelarticons:image-multiple" 
          @click="() => changeLayout(true)"
          @keyup.enter="() => changeLayout(true)"
          :tabindex="files.length && !layout ? 0 : -1"
        />
        <Icon
          class="focus"
          :class="{active: !layout, disabled: !files.length}"
          icon="i-pixelarticons:view-list"
          @click="() => changeLayout(false)"
          @keyup.enter="() => changeLayout(false)"
          :tabindex="files.length && layout ? 0 : -1"
        />
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
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  width: 100%;
}

.buttons {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
}

.layout {
  display: flex;
  gap: var(--space-xs);
  justify-content: space-between;
  align-items: center;
  background: var(--background);
  padding: 0px var(--space-xs);
  border-radius: var(--radius);
  height: var(--block-size);
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
</style>
