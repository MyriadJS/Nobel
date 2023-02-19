export function useFraction(duration?: number, perc: number = 0.3) {
  const animDuration = 500
  const p = Math.min(0.5, perc || 0.3)

  const fraction = computed(() => {
    if(!duration) return 1
    const percent = duration * p
    const lowest = Math.min(percent, animDuration)
    return lowest
  })

  return { fraction }
}