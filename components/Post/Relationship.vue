<script setup lang="ts">
  import { Post } from '@/types/Post'
  defineProps<{post: Post, loading: boolean, class?: string}>()
</script>

<template>
  <div class="cover post-flex" :class="class">
    <PostContent
      v-if="post.parent"
      :post="post.parent" 
      :loading="loading"
      class="quote"
      size="small"
    />
    <PostContent
      :post="post" 
      :loading="loading"
    />
  </div>
</template>

<style lang="scss">
.post-flex {
  //border: var(--border);
}

.post-flex .quote {
  border-bottom: var(--border);
  //border-radius: var(--radius);
  padding-bottom: var(--space-s);
  opacity: 0.5;
}

.post-flex .quote > * {
  //transform: scale(0.5);
  //opacity: 0.5;
}
</style>
