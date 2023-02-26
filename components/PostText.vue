<script setup lang="ts">
  import { Post } from '@/types/Post'
  const props = defineProps<{post: Post, loading: boolean, class?: string}>()

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
  <div class="post-content post-flex" :class="class">
    <p v-if="post.content">{{ content }}</p>
    <nuxt-img
      v-if="post.cover"
      provider="cloudinary"
      :src="post.cover"
      :width="300"
      alt="avatar"
    />
  </div>
</template>
