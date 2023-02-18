import { Ref } from 'vue'

function toggle(value: Ref<boolean>) {
  value.value = !value.value
}

export function useSwitch(interval: number = 6000) {
  const value = ref(false)
  onMounted(() => {
    setInterval(() => toggle(value), interval);
  })
  return {value}
}

