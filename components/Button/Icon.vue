<script setup lang="ts">
interface Props {
  icon?: string
}

withDefaults(defineProps<Props>(), {
  icon: 'i-pixelarticons:chevron-plus'
})
</script>

<template>
  <button>
    <Icon :icon="icon"/>
  </button>
</template>

<style lang="scss" scoped>
  button {
    padding: 0px;
  }

  button.active .icon {
    background: var(--accent-20);
    color: var(--accent);
  }
</style>

