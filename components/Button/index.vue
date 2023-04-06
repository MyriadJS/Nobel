<script setup lang="ts">
</script>

<template>
  <button type="button" >
    <Icon icon="i-pixelarticons:chevron-left"/>
    <slot>Click</slot>
    <Icon style="opacity: 0;"/>
  </button>
</template>

<style lang="scss" scoped>
button {
  display: flex;
  justify-content: space-between;
  gap: var(--space-s);
  align-items: center;
  padding: 5px;
}

button:focus,
button:active {
  outline: 2px 
    var(--border-style)
    var(--accent);
}
</style>