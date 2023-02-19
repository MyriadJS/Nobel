import { Ref } from 'vue'

export function useCycle(loading: Ref<boolean>, progress: Ref<number>, duration?: number) {
  const { fraction } = useFraction(duration)

  const enterLoading = ref(false)
  const leaveLoading = ref(false)

  let abortCycle = false

  function loadingCycle() {
    if(!duration) return
    enterLoading.value = true
    leaveLoading.value = false

    setTimeout(() => {
      if(abortCycle) return
      enterLoading.value = false
    }, fraction.value)

    setTimeout(() => {
      if(abortCycle) return
      leaveLoading.value = true
    }, duration - fraction.value)
  }

  function prematureAbort() {
    leaveLoading.value = true
    setTimeout(() => {
      leaveLoading.value = false
    }, fraction.value)
  }

  function matureTermination() {
    enterLoading.value = false
    leaveLoading.value = false
  }

  function terminateLoading() {
    progress.value >= 90 
      ? matureTermination()
      : prematureAbort()
  }

  watch(loading, (loading) => {
    loading ? loadingCycle() : terminateLoading()
  })

  return { 
    enterLoading, 
    leaveLoading 
  }
}