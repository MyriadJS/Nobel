export function randomText(loading: boolean, text?: string) {
  const texts = [
    "Hey, david! How are you?",
    "I'm fine, thanks! How are you?",
    text,
    "The layers structure is almost identical to a standard Nuxt application, which makes them easy to author and maintain.",
    "I'm fine, thanks! How are you?",
  ]
  
  const content = ref(texts[0])
  
  function rng(max: number = 11) {
    return Math.floor(Math.random() * max);
  }

  onMounted(() => {
    const index = rng(texts.length)
    content.value = texts[index]
  })
  
  watch(() => loading, () => {
    const index = rng(texts.length)
    content.value = texts[index]
  })

  return content
}