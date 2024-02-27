<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

onMounted(() => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother) // register plugins
    ScrollSmoother.create({
      smooth: 0.1, // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: false, // looks for data-speed and data-lag attributes on elements
      smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
    })
  }
})
</script>

<template>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <slot />
    </div>
  </div>
</template>
