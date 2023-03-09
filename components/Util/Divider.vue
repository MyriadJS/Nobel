<script setup lang="ts">
withDefaults(defineProps<{text?: string}>(),{
  text: "",
})
</script>

<template>
  <hr id="divider">
</template>

<style lang="scss" scoped>
  hr#divider {
    position: relative;
    display: flex;
    justify-content: center;

    grid-column: 1 / -1;
    --border-color: var(--shade);
    border-top: 
      var(--border-style) 
      var(--border-size) 
      var(--shade);
  }

  hr#divider:after {
    position: absolute;
    content: "";
    display: block;
    background: red;
    width: 40px;
    height: 40px;
  }
</style>