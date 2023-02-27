<script setup lang="ts">
  import { Post } from '@/types/Post'
  defineProps<{post: Post, loading: boolean}>()
</script>

<template>
  <div class="cover post-flex">
    <PostText
      v-if="post.parent"
      :post="post.parent" 
      :loading="loading"
      class="quote"
    />
    <PostText
      v-if="post.content" 
      :post="post" 
      :loading="loading"
    />
  </div>
</template>
