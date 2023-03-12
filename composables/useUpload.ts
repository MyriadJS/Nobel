async function uploadFile(
  file: File,
  tags?: string[]
): Promise<{ secure_url: string }> {
  const formData: any = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', 'defaultPreset')
  formData.append('cloud_name', 'indyriot')
  formData.append('folder', 'riot2')
  if(tags) formData.append('tags', tags)
  
  const res = await fetch(
    'https://api.cloudinary.com/v1_1/indyriot/image/upload',
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
      const result = await uploadFile(file, ['riot2'])
      uploading.value = false
      return result.secure_url
    },
    uploading,
  }
}
