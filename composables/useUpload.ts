async function uploadFile(
  file: File,
  tags?: string[]
): Promise<{ secure_url: string }> {
  const formData: any = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', 'defaultPreset')
  formData.append('cloud_name', 'nobel')
  formData.append('folder', 'post')
  if(tags) formData.append('tags', tags)
  
  const res = await fetch(
    'https://api.cloudinary.com/v1_1/nobel/image/upload',
    {
      method: 'post',
      body: formData,
    }
  )
  return res.json()
}

export function useUpload() {
  const uploading = ref(false)
  return {
    async upload(file: File) {
      uploading.value = true
      const result = await uploadFile(file, ['nobel'])
      uploading.value = false
      return result.secure_url
    },
    uploading,
  }
}
