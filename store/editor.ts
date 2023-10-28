import { useTiptap, useEditor } from '@/composables/useTiptap'

export const useEditor = () => {
  const editor = useTiptap({
    limit: 4000,
    placeholder: 'Write your post here...',
  })
  
  const limit = shallowRef(4000)

  return useState('editor', () => editor)
}

export const useCounter = () => {
  return useState('counter', () => Math.round(Math.random() * 100))
}
