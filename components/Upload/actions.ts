export const uploadWrapper = useFlip({disabled: false})
export const files = ref<File[]>([])

export function onChange(e: Event) {
  uploadWrapper.flip(() => {
    const target = e.target as HTMLInputElement
    files.value = [...files.value, ...Array.from(target.files!)]
  })
}

export function deleteFile(index: number) {
  uploadWrapper.flip(() => {
    files.value.splice(index, 1)
  })
}