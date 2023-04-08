<script setup lang="ts">
  import { feed, user1 } from "@/dummydata/posts"
  import {
    myriad
  } from "@myriadjs/core"

  onMounted(() => {
    myriad({
      background: '#0c0915',
      foreground: '#c0aea3',
      accents: ['#c97074'],
      custom: {
        success: '#00ff00',
        error: '#ff0000',
      }
    }, {
      readability: 1,
    })
  })

  const post = {
    id: "1",
    user: user1,
    content: 'Nuxt layers are a powerful feature that you can use to share and reuse Nuxt applications within a monorepo, or from a git repository or npm package. The layers structure is almost identical to a standard Nuxt application, which makes them easy to author and maintain.',
    cover: [],
    parent: null,
    reactions: {
      pro: 100,
      con: 100,
      replies: 100,
    }
  }
</script>

<template>
  <NobelMain :post="post"/>
  <PostFeed/>
</template>

<style lang="scss">
@import "./css";
</style>