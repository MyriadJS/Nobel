<script setup lang="ts">
  import { Post } from '@/types/Post'

  defineProps<{post: Post}>()
  const avatarSize = ref(90)
</script>

<template>
  <main id="open" class="page panel">
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
      <blockquote cite="https://ruwix.com/">
        The Rubik's Cube is the World’s best selling puzzle toy.
      </blockquote>
      <p>Nuxt layers are a powerful feature that you can use to share and
        reuse Nuxt applications within a monorepo, or from a git repository
        or npm package. The layers structure is almost identical to a standard Nuxt 
        application, which makes them easy to author and maintain.</p>

      <TextEditor/>
    </div>
    <div class="author">
      <UserAvatar
        :size="avatarSize"
        :src="post.user.author.avatar"
        :resolution="200"
      />
    </div>
  </main>
</template>

<style lang="scss">
#open .avatar {
  position: absolute;
  bottom: calc(v-bind(avatarSize) * -0.5px);
  outline: solid var(--space-s) var(--background);
}

#open.page {
  margin-top: var(--space-l);
  padding-bottom: 0px;
}

#open .author {
  position: relative;
  display: flex;
  justify-content: center;
}

#open .content {
  display: grid;
  gap: var(--space);
  padding-top: var(--space);
  padding-bottom: var(--space-l);
}

#open .content > * {
  margin: auto;
}

</style>