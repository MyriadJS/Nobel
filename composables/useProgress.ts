import { Ref } from 'vue'

export function useProgress(loading: Ref<boolean>, duration?: number) {
  const progress = ref(0)
  function makeProgress() {
    if(!duration) return
    progress.value = 0
    const interval = setInterval(() => {
      progress.value += 1
      if(progress.value >= 100 || !loading.value) {
        clearInterval(interval)
      }
    }, duration / 100)
  }

  watch(loading, (e) => {
    e ? makeProgress() : progress.value = 0
  })

  return { progress }
}