export function useCooldown(selected: Ref<boolean>, time: number = 200) {
  const cooldown = ref(false)

  watch(selected, (bool) => {
    if (!bool) return
    cooldown.value = true
    setTimeout(() => {
      cooldown.value = false
    }, time)
  })

  return cooldown
}