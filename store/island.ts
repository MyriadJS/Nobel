export const useIsland = () => {
  const hover = ref(false)
  return useState('island', () => hover)
}
