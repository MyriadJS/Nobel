export const tempFiles = ref<File[]>([])

export function addTempFile(e: Event) {
  const target = e.target as HTMLInputElement
  tempFiles.value = [...tempFiles.value, ...Array.from(target.files!)]
}


export function useFiles(selected: globalThis.Ref<boolean>) {
  const files = ref<File[]>([])
  watch(tempFiles, (value) => {
    if(selected.value || !value.length) return
    files.value = [...files.value, ...value]
    tempFiles.value = []
  })
  watch(selected, (value) => {
    console.log("rex3", value)
  })
  return files
}