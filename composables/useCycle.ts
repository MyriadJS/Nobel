import { Ref } from 'vue'

export function useCycle(loading: Ref<boolean>, progress: Ref<number>, duration?: number) {
  const { fraction } = useFraction(duration)

  const enter = ref(false)
  const leave = ref(false)

  let abortCycle = false

  function loadingCycle() {
    if(!duration) return
    enter.value = true
    leave.value = false

    setTimeout(() => {
      if(abortCycle) return
      enter.value = false
    }, fraction.value)

    setTimeout(() => {
      if(abortCycle) return
      leave.value = true
    }, duration - fraction.value)
  }

  function prematureAbort() {
    leave.value = true
    setTimeout(() => {
      leave.value = false
    }, fraction.value)
  }

  function matureTermination() {
    enter.value = false
    leave.value = false
  }

  function terminateLoading() {
    progress.value >= 90 
      ? matureTermination()
      : prematureAbort()
  }

  watch(loading, (loading) => {
    loading ? loadingCycle() : terminateLoading()
  })

  const classes = computed(() => ({
    loading: loading.value,
    enter: enter.value,
    leave: leave.value,
  }))

  return { enter, leave, classes }
}