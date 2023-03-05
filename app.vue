<script setup lang="ts">
  import { feed } from "@/dummydata/posts"
// import { colorBus } from "myriad-mini"
// import { getReadable, makeReadable } from 'myriad-mini/engine/primitives/color'
// import { Myriad } from 'myriad-mini/engine/config'

// function linkColor(m: Myriad) {
//   if(!m.foreground) return "black"
//   const blue = '#6b6bff'
//   const linkColor = makeReadable(blue, m, 7)
//   return linkColor
// }

// function imgColor(m: Myriad) {
//   if(!m.foreground) return "black"
//   return getReadable(m.foreground, 'black', 19)
// }

// onMounted(() => {
//   colorBus({
//     background: '#0c0915',
//     foreground: '#c0aea3',
//     accents: ['#c97074'],
//     custom: {
//       link: linkColor,
//       imgColor: imgColor,
//       success: '#00ff00',
//       error: '#ff0000',
//     }
//   })
// })
</script>

<template>
  <NobelMain :post="feed[0]"/>
  <PostFeed/>
</template>

<style lang="scss">
@import "./css";
</style>