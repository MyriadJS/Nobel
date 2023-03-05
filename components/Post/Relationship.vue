<script setup lang="ts">
  import { Post } from '@/types/Post'
  defineProps<{post: Post, loading: boolean, class?: string}>()

  const AvatarSize = 15
</script>

<template>
  <div class="cover post-flex" :class="class">
    <PostContent
      v-if="post.parent"
      :post="post.parent" 
      :loading="loading"
      class="quote"
      size="small"
    >
      <UserAvatar
        :src="post.parent.user.author.avatar"
        :size="AvatarSize"
      />
    </PostContent>
    <PostContent
      :post="post" 
      :loading="loading"
    />
  </div>
</template>

<style lang="scss">
.post-flex .quote {
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
