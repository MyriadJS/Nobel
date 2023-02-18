import { Ref } from 'vue'

export function useSize(element: Ref<HTMLElement | undefined>, onChange?: (height: number) => void) {
  const height = ref(0)
  if(!process.client) return { height }

  onMounted(() => {
    if(!element.value) return
    myObserver.observe(element.value)
  })

  const myObserver = new ResizeObserver(entries => {
    entries.forEach(entry => {
      const h = entry.contentRect.height
      height.value = h
      onChange && onChange(h)
    });
  });

  return { height }
}