<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'

useTheme()
const app = ref<HTMLElement | null>(null)
</script>

<template>
  <SmoothScroll>
    <div class="app" ref="app">
      <!-- <Hero/> -->
      <NobelMain />
      <PostFeed />
    </div>
  </SmoothScroll>
  <MenuIsland />
  <!-- <LayerLive/> -->
</template>

<style lang="scss">
@import './css';
</style>
