<script setup lang="ts">
import {
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from 'radix-vue'

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)
</script>

<template>
  <ScrollAreaRoot class="ScrollAreaRoot" style="--scrollbar-size: 10px">
    <ScrollAreaViewport class="ScrollAreaViewport">
      <slot />
    </ScrollAreaViewport>
    <ScrollAreaScrollbar class="ScrollAreaScrollbar" orientation="vertical">
      <ScrollAreaThumb class="ScrollAreaThumb" />
    </ScrollAreaScrollbar>
    <ScrollAreaScrollbar class="ScrollAreaScrollbar" orientation="horizontal">
      <ScrollAreaThumb class="ScrollAreaThumb" />
    </ScrollAreaScrollbar>
  </ScrollAreaRoot>
</template>

<style>
.ScrollAreaRoot {
  width: 100%;
  height: 100%;
  padding-right: var(--space-s);
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 10px var(--foregrond);
  background-color: var(--background-10);
  --scrollbar-size: 10px;
}

.ScrollAreaViewport {
  width: 100%;
  height: 100%;
  border-radius: inherit;
}

.ScrollAreaScrollbar {
  display: flex;
  /* ensures no selection */
  user-select: none;
  /* disable browser handling of all panning and zooming gestures on touch devices */
  touch-action: none;
  padding: 2px;
  background: var(--background-20);
  transition: background 160ms ease-out;
}
.ScrollAreaScrollbar:hover {
  background: var(--foreground);
}
.ScrollAreaScrollbar[data-orientation='vertical'] {
  width: var(--scrollbar-size);
}
.ScrollAreaScrollbar[data-orientation='horizontal'] {
  flex-direction: column;
  height: var(--scrollbar-size);
}

.ScrollAreaThumb {
  flex: 1;
  background: var(--foreground);
  border-radius: var(--scrollbar-size);
  position: relative;
}
/* increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html */
.ScrollAreaThumb::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  min-width: 44px;
  min-height: 44px;
}

.ScrollAreaCorner {
  background: var(--foreground);
}

.Text {
  color: var(--foreground);
  font-size: 15px;
  line-height: 18px;
  font-weight: 500;
}

.Tag {
  color: var(--foreground);
  font-size: 13px;
  line-height: 18px;
  margin-top: 10px;
  border-top: 1px solid var(--foreground);
  padding-top: 10px;
}
</style>
