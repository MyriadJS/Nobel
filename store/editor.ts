import { useTiptap } from '@/composables/useTiptap'

export const useIsland = () => {
  const active = ref(false)
  const hover = ref(false)
  return useState('island', () => hover)
}

export const useFile = () => {
  const files = ref<File[]>([])
  return useState('file', () => files)
}

export const useEditor = () => {
  const editor = useTiptap({
    limit: 4000,
    placeholder: 'Write your post here...',
  })
  
  return useState('editor', () => editor)
}

export const useCounter = () => {
  return useState('counter', () => Math.round(Math.random() * 100))
}
