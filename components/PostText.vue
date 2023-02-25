<script setup lang="ts">
  import { Post } from '@/types/Post'
  const props = defineProps<{post: Post, loading: boolean}>()

  const texts = [
    "Hey, david! How are you?",
    "I'm fine, thanks! How are you?",
    props.post.content,
    "The layers structure is almost identical to a standard Nuxt application, which makes them easy to author and maintain.",
    "I'm fine, thanks! How are you?",
  ]

  const content = ref(texts[0])

  function rng(max: number = 11) {
    return Math.floor(Math.random() * max);
  }

  watch(() => props.loading, () => {
    const index = rng(texts.length)
    content.value = texts[index]
  })
</script>

<template>
  <p v-if="true">{{ content }}</p>
</template>

<style lang="scss">

</style>