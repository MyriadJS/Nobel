export const tempFiles = ref<File[]>([])

export function addTempFile(e: Event) {
  const target = e.target as HTMLInputElement
  tempFiles.value = [...tempFiles.value, ...Array.from(target.files!)]
}
