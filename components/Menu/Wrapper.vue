<script setup lang="ts">
import { useIsland } from '@/store/island'

const { width = '0px', open = false } = defineProps<{
  width?: string
  open?: boolean
}>()

const island = useIsland()
</script>

<template>
  <div 
    id="island"
    class="island i-length rounded center" 
    :class="{open}"
    @mouseover="() => island.hover = true"
    @mouseleave="() => island.hover = false"
  >
    <slot />
  </div>
  <div class="haze i-length center" :class="{open}"></div>
</template>

<style lang="scss" scoped>
  .center {
    left: 50%;
    transform: translate(-50%, 0);
  }

  .i-length {
    width: v-bind(width);
    transition: 0.2s ;
  }

  .i-length.open {
    width: 20em;
  }

  #island {
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    bottom: var(--space-s);
    background: var(--foreground);
    z-index: 100;
  }
  
  .haze {
    position: fixed;
    bottom: var(--space-s);
    height: 3rem;
    background: var(--accent);
    box-shadow: -0px 22px 105px 18px var(--accent);
    border-radius: 12rem;
    z-index: 99;
    opacity: 0.4;
  }

  #island:hover ~ .haze {
    opacity: 1;
  }
</style>

