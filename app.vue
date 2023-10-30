<script setup lang="ts">
import { user1 } from "@/dummydata/posts"
import { useTheme } from "@/composables/useTheme"

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
  
useTheme()

const app = ref<HTMLElement | null>(null)
</script>

<template>
  <SmoothScroll>
    <div class="app" ref="app">
      <Hero/>
      <NobelMain :post="post"/>
      <PostFeed/>
    </div>
  </SmoothScroll>
  <MenuIsland />
  <!-- <LayerLive/> -->
</template>

<style lang="scss">
@import "./css";
</style>