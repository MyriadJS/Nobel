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
  
  const colorIndex = ref(0)
  const app = ref<HTMLElement | null>(null)

  function rainbowColor(element = app.value, time = 4000) {
    if(!element) return
    const colors = ["#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#0000ff", "#4b0082", "#9400d3"]
    setProperty("--rainbow", colors[colors.length - 1], element)
    setInterval(() => {
      setProperty("--rainbow", colors[colorIndex.value], element)
      colorIndex.value = (colorIndex.value + 1) % colors.length
    }, time)
  }

  const setProperty = (name: string, value: string, element: HTMLElement) => {
    element.style.setProperty(name, value)
  }

  onMounted(() => {
    rainbowColor(app.value)
  })
</script>

<template>
  <div class="app" ref="app">
    <Hero/>
    <MenuIsland v-if="true"/>
    <LayerLive v-if="false"/>
    <NobelMain :post="post"/>
    <PostFeed/>
  </div>
</template>

<style lang="scss">
@import "./css";
</style>