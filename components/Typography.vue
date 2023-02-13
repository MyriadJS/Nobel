<script setup lang="ts">
  import { Post } from '@/types/Post'
  defineProps<{post: Post}>()
  const avatarResolution = ref(200)
</script>

<template>
  <div class="page panel">
    <h1>Title</h1>
    <h2>Title</h2>
    <h3>Title</h3>
    <div class="content post">
      <p>Nuxt layers are a powerful feature that you can use to share and
        reuse <span>partial</span> Nuxt applications within a monorepo, or from a git repository
        or npm package. The layers structure is almost identical to a standard Nuxt 
        application, which makes them easy to author and maintain.</p>
      <p class="slugline"> Nuxt applications within a monorepo, or from a git repository
        or npm package</p>
      <p>Nuxt layers are a powerful feature that you can use to share and
        reuse Nuxt applications within a monorepo, or from a git repository
        or npm package. The layers structure is almost identical to a standard Nuxt 
        application, which makes them easy to author and maintain.</p>
    </div>
    <div class="author">
      <Avatar 
        :src="post.user.author.avatar"
        :resolution="avatarResolution"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  margin-top: var(--space-l);
  padding-bottom: var(--space);
}

.author {
  display: flex;
  justify-content: center;

  .avatar {
    //width: calc(v-bind(avatarResolution) * 1px);
    transform: scale(3);
  }
}

.content {
  display: grid;
  gap: var(--space);
  padding-top: var(--space);
}
</style>