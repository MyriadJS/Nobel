<script setup lang="ts">
const input = ref<HTMLInputElement | null>(null)
const files = ref<null | FileList>(null)
//const { upload, uploading } = useUpload()

async function handleChange(e: Event) {
  const target = e.target as HTMLInputElement
  files.value = target.files
  //const url = await upload(target.files![0])
  //imgUrl.value = url
}

const urls = computed(() => {
  if (!files.value) return []
  return Array.from(files.value).map((file) => getSrc(file))
})

function getSrc(imgFile: File) {
  return URL.createObjectURL(imgFile)
}
</script>

<template>
  <input
    ref="input"
    accept="image/*"
    type="file"
    hidden
    multiple
    @change="handleChange"
  />
  <slot :urls="urls">
    <div class="images">

      <ImageGallery
        :images="urls"
        :nuxt="false"
        compact
      />

      <img
        v-if="false"
        v-for="(url, index) in urls" 
        :key="url"
        :alt="'uploaded image' + index"
        :src="url"
        :width="300"
      />
    </div>
  </slot>

  <Button 
    type="button" 
    @click="() => input?.click()"
  >
    Change
  </Button>
</template>

<style lang="scss" scoped>
button {
  background: var(--background);
}
</style>
