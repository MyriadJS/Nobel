<script setup lang="ts">
  import { feed } from "@/dummydata/posts"
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
    })
  })
</script>

<template>
  <NobelMain :post="feed[0]"/>
  <PostFeed/>
</template>

<style lang="scss">
@import "./css";
</style>