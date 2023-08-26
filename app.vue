<script setup lang="ts">
  import { user1 } from "@/dummydata/posts"
  import { useTheme } from "@/composables/useTheme"
  import mask from './mask.js?url'

  useTheme()

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
    if(!window) return
    CSS.paintWorklet.addModule(mask);
  })
</script>

<template>
  <div class="app" ref="app">
    <MenuIsland v-if="false"/>
    <LayerLive v-if="false"/>
    <NobelMain :post="post"/>
    <PostFeed/>
  </div>
</template>

<style lang="scss">
@import "./css";

.test {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 30rem;
}

// @property --smooth-corners {
//   syntax: '<number>';
//   inherits: false;
//   initial-value: 50;
// }

.test .mask {
  background-color: black;
  --inverse-radius: 200;
  --inverse-radius-direction: bottom-left;
  mask-image: paint(inverse-radius);
  height: 300px;
  width: 300px;
  transition: .4s;
}
</style>