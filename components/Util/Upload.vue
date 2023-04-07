<script setup lang="ts">
const input = ref<HTMLInputElement | null>(null)
const files = ref<File[]>([])
const layout = ref(true)
const compact = ref(false)

//const { upload, uploading } = useUpload()
//const url = await upload(target.files![0])

async function handleChange(e: Event) {
  const target = e.target as HTMLInputElement
  files.value = [...files.value, ...Array.from(target.files!)]
}

const urls = computed(() => {
  return files.value.map((file) => getSrc(file))
})

function getSrc(imgFile: File) {
  return URL.createObjectURL(imgFile)
}

function fileName(file: File) {
  const name = file.name
  const index = name.lastIndexOf('.')
  return name.substring(0, index).substring(0, 17) + '...'
}

function fileSize(file: File) {
  return file.size > 1000000
    ? valueInMB(file)
    : valueInKB(file)
}

function valueInKB(file: File) {
  return Math.floor(file.size / 1000) + 'KB'
}

function valueInMB(file: File) {
  return Math.floor(file.size / 1000000) + 'MB'
}

function removeFile(index: number) {
  files.value.splice(index, 1)
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
          @click="() => layout = true"
          @keyup.enter="() => layout = true"
          :tabindex="files.length ? 0 : -1"
        />
        <Icon 
          class="focus"
          :class="{active: !layout, disabled: !files.length}"
          icon="i-pixelarticons:view-list" 
          @click="() => layout = false"
          @keyup.enter="() => layout = false"
          :tabindex="files.length ? 0 : -1"
        />
      </div>
      <div class="images" :class="{empty: !files.length}">
        <ImageGallery
          v-if="layout"
          :images="urls"
          :nuxt="false"
          :compact="compact"
        />

        <div class="files" v-else>

          <div v-for="(file, index) in files" :key="0" class="file">
            <img :src="getSrc(file)" />
            <div class="meta">
              <p>{{ fileName(file) }}</p>
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
  color: var(--accent);
  background-color: var(--accent-20);
  //outline: var(--border);
}

.layout .icon.disabled {
  pointer-events: none;
  opacity: 0.2;
}

.files {
  display: flex;
  flex-direction: column;
  gap: var(--space-s);
  width: 100%;
}

.file {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  //flex-direction: column;
  gap: var(--space-s);
  background: var(--background);
  padding: var(--space-s);
  border-radius: var(--radius);
  width: 100%;
}

.file .icon {
  cursor: pointer;
}

.images {
  width: 100%;
}

.images.empty {
  display: none;
}

img {
  width: 50px;
  height: 50px;
  border-radius: var(--radius);
}

button {
  margin: auto;
  background: var(--background);
  min-width: 200px;
}
</style>
