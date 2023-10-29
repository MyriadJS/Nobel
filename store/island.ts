export const useIsland = () => {
  const active = ref(false)
  const hover = ref(false)
  return useState('island', () => hover)
}
