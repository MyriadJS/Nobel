<script setup lang="ts">
  import { Post } from '@/types/Post'
  const props = defineProps<{post: Post, loading: boolean, class?: string, img?: boolean, size?: string }>()

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

  const compact = computed(() => {
    return props.size === 'small'
  })
</script>

<template>
  <div class="content-wrapper post-flex" :class="class">
    <p v-if="post.content">{{ content }}</p>
    <ImageGallery
      v-if="post.cover.length > 0"
      :images="post.cover"
      :compact="compact"
    />
    <slot/>
  </div>
</template>

<style lang="scss">
  .post:has(.content-wrapper img) {
    grid-row: span 3;
  }
</style>
