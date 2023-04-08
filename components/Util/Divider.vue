<script setup lang="ts">
interface Props {
  foreground?: string
  background?: string
  space?: string 
}

withDefaults(defineProps<Props>(), {
  foreground: 'var(--foreground)',
  background: 'var(--background)',
  space: 'var(--space-l)'
})

</script>

<template>
  <div id="divider">
    <div class="content">
      <slot/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  #divider {
    position: relative;
    grid-column: 1 / -1;
    width: 100%;
    margin: v-bind(space) 0px;
    
    display: flex;
    justify-content: center;

    border-top: 
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
    height: 2rem;
    top: calc(0px - 2rem / 2);
  }

  #divider .content:empty {
    display: none;
  }
</style>