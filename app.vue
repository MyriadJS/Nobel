<script setup lang="ts">
import { user1 } from "@/dummydata/posts"
import { useTheme } from "@/composables/useTheme"
import { gsap } from "gsap"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { ScrollTrigger } from "gsap/ScrollTrigger"

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

const colorIndex = ref(0)
const app = ref<HTMLElement | null>(null)

onMounted(() => {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother) // register plugins
    ScrollSmoother.create({
      smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: false, // looks for data-speed and data-lag attributes on elements
      smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
    });
  }

  if(process.client) {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother) // register plugins
    ScrollSmoother.create({
      smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: false, // looks for data-speed and data-lag attributes on elements
      smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
    });
  }
})
</script>

<template>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <div class="app" ref="app">       
        <Hero/>
        <LayerLive v-if="false"/>
        <NobelMain :post="post"/>
        <PostFeed/>
      </div>
    </div>
  </div>
  <MenuIsland v-if="true"/>
</template>

<style lang="scss">
@import "./css";
</style>