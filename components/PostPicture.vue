<script setup lang="ts">
  import { Post } from '@/types/Post'
  const props = defineProps<{post: Post, loading: boolean}>()
  
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

<style lang="scss">
.post:has(.cover) {
  grid-row: span 3;
}

img {
  border-radius: var(--radius);
  width: 100%;
}
</style>