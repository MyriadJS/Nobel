<script setup lang="ts">
interface Props {
  foreground?: string
  background?: string
  space?: string
  vertical?: boolean
}

withDefaults(defineProps<Props>(), {
  foreground: 'var(--foreground)',
  background: 'var(--background)',
  space: 'var(--space-l)',
  vertical: false,
})

</script>

<template>
  <div id="divider" :class="{vertical: vertical}">
    <div class="content">
      <slot/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  #divider {
    position: relative;
    grid-column: 1 / -1;
    
    display: flex;
    justify-content: center;
  }
  
  #divider:not(.vertical) {
    width: 100%;
    min-width: var(--block-inner-size);
    margin: v-bind(space) 0px;
    border-top: 
      var(--border-style) 
      var(--border-size) 
      v-bind(foreground);
  }

  #divider.vertical {
    height: 100%;
    min-height: var(--block-inner-size);
    margin: 0px v-bind(space);
    border-left: 
      var(--border-style) 
      var(--border-size) 
      v-bind(foreground);
  }



  #divider .content {
    display: flex;
    justify-content: center;
    align-items: center;
    background: v-bind(background);
    padding: 0px var(--space-s);
    border-radius: var(--radius);
    position: absolute;
    --size: 2rem;
    height: var(--size);
    top: calc(0px - var(--size) / 2);
  }

  #divider .content:empty {
    display: none;
  }
</style>