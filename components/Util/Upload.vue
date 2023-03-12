<script setup lang="ts">
const input = ref<HTMLInputElement | null>(null)
const files = ref<null | FileList>(null)
const { upload, uploading } = useUpload()

async function handleChange(e: Event) {
  const target = e.target as HTMLInputElement
  files.value = target.files
  console.log(target.files)

  //const url = await upload(target.files![0])
  //imgUrl.value = url
}

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
  <slot :files="files">
    <div class="images">
      <img
        v-for="(file, index) in files" 
        :key="file.name"
        :alt="'uploaded image' + index"
        :src="getSrc(file)"
        :width="300"
      />
    </div>
  </slot>
  <button type="button" @click="() => input?.click()">Change</button>
</template>

<style lang="scss" scoped>
button {
  background: var(--background);
}
</style>
