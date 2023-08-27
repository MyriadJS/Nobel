<script setup lang="ts">
interface Props {
  icon?: string
  active?: boolean
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  icon: 'i-pixelarticons:chevron-plus',
  active: false,
  disabled: false
})
</script>

<template>
  <button
    class="icon" 
    :class="{active}"
    :disabled="disabled"
  >
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

