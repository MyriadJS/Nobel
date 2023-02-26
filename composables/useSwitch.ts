import { Ref } from 'vue'

function toggle(value: Ref<boolean>) {
  value.value = !value.value
}

export function useSwitch(interval: number = 6000, off = false) {
  const value = ref(false)
  onMounted(() => {
    if(off) return
    setInterval(() => toggle(value), interval);
  })
  return {value}
}

