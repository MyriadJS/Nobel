import { Ref } from 'vue'

export function useSize(element: Ref<HTMLElement | undefined>, onChange?: (rect: DOMRectReadOnly) => void) {
  const height = ref(0)
  const width = ref(300)
  if(!process.client) return { height }

  onMounted(() => {
    if(!element.value) return
    myObserver.observe(element.value)
  })

  const myObserver = new ResizeObserver(entries => {
    entries.forEach(entry => {
      const rect =  entry.contentRect
      height.value = rect.height
      width.value = rect.width      
      onChange && onChange(rect)
    });
  });

  return { height, width }
}