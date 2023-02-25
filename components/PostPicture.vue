<script setup lang="ts">
  import { Post } from '@/types/Post'
  const props = defineProps<{post: Post, loading: boolean}>()
</script>

<template>
  <div class="cover">
    <PostText 
      v-if="post.content" 
      :post="post" 
      :loading="loading"
    />    
    <nuxt-img
      v-if="post.cover"
      provider="cloudinary"
      :src="post.cover"
      :width="300"
      alt="avatar"
    />
  </div>
</template>

<style lang="scss">
.post.panel:has(.cover) {
  padding: 0px;
  grid-row: span 3;
}

.cover {
  display: flex;
  gap: var(--space);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: var(--space);
  background-color: var(--background);
  padding: var(--space);
  border-radius: var(--radius);
}

img {
  border-radius: var(--radius);
  //overflow: hidden;
  width: 100%;
}
</style>