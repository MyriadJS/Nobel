<script setup lang="ts">
  interface Props {
    loading: boolean;
    duration?: number;
    perc?: number;
  }
  const props = defineProps<Props>()

  const animDuration = 500
  const perc = Math.min(0.5, props.perc || 0.3)

  //progress bar
  const progress = ref(0)
  function makeProgress() {
    if(!props.duration) return
    progress.value = 0
    const interval = setInterval(() => {
      progress.value += 1
      if(progress.value >= 100) {
        clearInterval(interval)
      }
    }, props.duration / 100)
  }

  watch(() => props.loading, (loading) => {
    loading ? makeProgress() : progress.value = 0
  })

  //other shit
  const durationFraction = computed(() => {
    const duration = props.duration
    if(!duration) return 1
    const percent = duration * perc
    const lowest = Math.min(percent, animDuration)
    return lowest
  })

  const enterLoading = ref(false)
  const leaveLoading = ref(false)

  let abortCycle = false

  function loadingCycle() {
    if(!props.duration) return
    enterLoading.value = true
    leaveLoading.value = false

    setTimeout(() => {
      if(abortCycle) return
      enterLoading.value = false
    }, durationFraction.value)

    setTimeout(() => {
      if(abortCycle) return
      leaveLoading.value = true
    }, props.duration - durationFraction.value)
  }

  function prematureAbort() {
    leaveLoading.value = true
    setTimeout(() => {
      leaveLoading.value = false
    }, durationFraction.value)
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

  watch(() => props.loading, (loading) => {
    loading ? loadingCycle() : terminateLoading()
  })

  const classes = computed(() => ({
    loading: props.loading,
    enter: enterLoading.value,
    leave: leaveLoading.value,
  }))

  const height = ref(0)
</script>

<template>
  <div class="loader" :class="classes">
    <AutoSize @change="(e) => height = e">
      <slot/>
      <p>{{ progress }}</p>
    </AutoSize>
    <div class="spin">
      <Spinner :steps="40"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loader {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: var(--space);
  transition: 0.4s;
}

.loader.loading .AutoSize {
  opacity: 0.2;
  filter: blur(2px);
}
  
.loader .spin {
  position: absolute;
  display: flex;
  align-items: center;
  min-height: calc(v-bind(height) * 1px);
  opacity: 0;
  transition: .4s;
}

.loader.loading .spin {
  opacity: 1;
}
</style>