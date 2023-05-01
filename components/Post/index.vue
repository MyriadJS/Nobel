<script setup lang="ts">
  import { Post } from '@/types/post'
  const props = defineProps<{post: Post, loading: boolean}>()
  const content = randomText(props.loading, props.post.content)
  const contentParent = randomText(props.loading, props.post.parent?.content)
</script>

<template>
  <div class="post-wrapper post-flex">
    <PostContent
      v-if="post.parent"
      :post="post.parent" 
      :loading="loading"
      size="small"
      contenteditable="false"
    >
      <p v-if="post.parent">{{ contentParent }}</p>
    </PostContent>
    <PostContent
      :post="post" 
      :loading="loading"
    >
      <slot><p v-if="post.content">{{ content }}</p></slot>
    </PostContent>
  </div>
</template>

