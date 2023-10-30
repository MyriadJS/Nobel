<script setup lang="ts">
  import type { Post } from '@/types/post'
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

  const AvatarSize = 15
</script>

<template>
  <div class="content-wrapper post-flex" :class="{compact: compact}">
    <slot><p v-if="post.content">{{ content }}</p></slot>
    <ImageGallery
      v-if="post.cover.length > 0"
      :images="post.cover"
      :compact="compact"
    />
    <UserAvatar
      v-if="compact"
      :src="post.user.author.avatar"
      :size="AvatarSize"
    />
  </div>
</template>

<style lang="scss" scoped>
  .post:has(.content-wrapper img) {
    grid-row: span 3;
  }

  .content-wrapper.compact {
    position: relative;
    border-bottom: var(--border);
    padding-bottom: var(--space);
    margin-bottom: var(--space-s);
    opacity: 0.5;

    .avatar {
      position: absolute;
      bottom: calc((v-bind(AvatarSize) / 2) * -1px);
    }
  }
</style>
