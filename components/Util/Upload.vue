<script setup lang="ts">
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
gsap.registerPlugin(Flip);

const input = ref<HTMLInputElement | null>(null)
const files = ref<File[]>([])
const layout = ref(true)
const compact = ref(false)

//const { upload, uploading } = useUpload()
//const url = await upload(target.files![0])

const images = useFlip()

function handleChange(e: Event) {
  images.flip(() => {
    const target = e.target as HTMLInputElement
    files.value = [...files.value, ...Array.from(target.files!)]
  })
}

function changeLayout(bool = !layout.value) {
  images.flip(() => {
    layout.value = bool
  })
}

function deleteFile(index: number) {
  images.flip(() => {
    files.value.splice(index, 1)
  })
}

const urls = computed(() => {
  return files.value.map((file) => getSrc(file))
})

function getSrc(imgFile: File) {
  return URL.createObjectURL(imgFile)
}

</script>

<template>
  <div class="upload">
    <input
      ref="input"
      accept="image/*"
      type="file"
      hidden
      multiple
      @change="handleChange"
    />
    <slot :urls="urls">
      <div class="layout">
        <p class="caption">layout: <span>{{ layout ? "image" : "file"}}</span></p>
        <Icon 
          class="focus"
          :class="{active: layout, disabled: !files.length}"
          icon="i-pixelarticons:image" 
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
      <div 
        class="images" 
        :class="{empty: !files.length}" 
        :ref="images.element"
      >
        <ImageGallery
          v-show="layout"
          :images="urls"
          :nuxt="false"
          :compact="compact"
        />

        <ImageFiles 
          v-show="!layout"
          :files="files"
          @delete="deleteFile"
        />
      </div>
    </slot>

    <Button 
      icon="i-pixelarticons:plus"
      intention="add"
      type="button"
      @click="() => input?.click()"
    >
      add images
    </Button>
  </div>
</template>

<style lang="scss" scoped>
.upload {
  display: flex;
  flex-direction: column;
  gap: var(--space-s);
  width: 100%;
}

.layout {
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: var(--space-s);
  background: var(--background);
  padding: var(--space-s);
  border-radius: var(--radius);
}

.layout .icon {
  cursor: pointer;
}

.layout .icon.active:not(.disabled) {
  cursor: default;
  pointer-events: none;
  color: var(--accent);
  background-color: var(--accent-20);
  //outline: var(--border);
}

.layout .icon.disabled {
  pointer-events: none;
  opacity: 0.2;
}

.images.empty {
  display: none;
}

button {
  margin: auto;
  background: var(--background);
  min-width: 200px;
}
</style>
