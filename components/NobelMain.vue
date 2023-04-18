<script setup lang="ts">
  import { Post } from '@/types/post'
  defineProps<{post: Post}>()
  const avatarSize = ref(90)

  const text = ref('')
  function handleText(t: string) {
    text.value = t
  }
</script>

<template>
  <main id="open" class="page panel">
    <h1>The Rubik's Cube is the World’s best selling puzzle toy</h1>
    <div class="content post">
      <p>Nuxt layers are a powerful feature that you can use to share and
        reuse <span>partial</span> Nuxt applications within a monorepo, or from a git repository
        or npm package. The layers structure is almost identical to a standard Nuxt 
        application, which makes them easy to author and maintain.</p>
      <p class="slugline"> Nuxt applications within a monorepo, or from a git repository
        or npm package. Nuxt applications within a monorepo, or from a git repository
        or npm package</p>
      <p>Nuxt layers are a powerful feature that you can use to share and
        reuse Nuxt applications within a monorepo, or from a git repository
        or npm package. The layers structure is almost identical to a standard Nuxt 
        application, which makes them easy to author and maintain.</p>
      <h2>Title</h2>
      <blockquote cite="https://ruwix.com/">
        The Rubik's Cube is the World’s best selling puzzle toy.
      </blockquote>
      <p>Nuxt layers are a powerful feature that you can use to share and
        reuse Nuxt applications within a monorepo, or from a git repository
        or npm package. The layers structure is almost identical to a standard Nuxt 
        application, which makes them easy to author and maintain.</p>
      <h2>The Rubik's Cube is the World’s best selling puzzle toy</h2>
      <p>Nuxt layers are a powerful feature that you can use to share and
        reuse Nuxt applications within a monorepo, or from a git repository
        or npm package. The layers structure is almost identical to a standard Nuxt 
        application, which makes them easy to author and maintain.</p>
      <h3>The Rubik's Cube is the World’s best selling puzzle toy</h3>
      <p>Nuxt layers are a powerful feature that you can use to share and
        reuse Nuxt applications within a monorepo, or from a git repository
        or npm package. The layers structure is almost identical to a standard Nuxt 
        application, which makes them easy to author and maintain.</p>

      <TextEditor @text="handleText"/>
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
#open #divider {
  --border-color: var(--foreground);
}

#open > .author .avatar {
  position: absolute;
  bottom: calc(v-bind(avatarSize) * -0.5px);
  outline: solid var(--space-s) var(--background);
}

#open.page {
  margin-top: var(--space-l);
  padding-bottom: 0px;
}

#open > .author {
  position: relative;
  display: flex;
  justify-content: center;
}

#open > .content {
  display: grid;
  gap: var(--space);
  padding-top: var(--space);
  padding-bottom: var(--space-l);
}

#open > .content > * {
  margin-left: auto;
  margin-right: auto;
}

#open .content h2,
#open .content h3,
#open .content h4 {
  text-align: center;
}

</style>