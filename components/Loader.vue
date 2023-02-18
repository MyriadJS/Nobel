<script setup lang="ts">
  defineProps({
    loading: {
      type: Boolean,
      default: false
    }
  })

  const height = ref(0)
</script>

<template>
  <div class="loader" :class="{loading: loading}">
    <AutoSize>
      <slot/>
    </AutoSize>
    <div class="spin">
      <Spinner :steps="40"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loader {
  box-sizing: content-box;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: var(--space);

  transition: 0.4s;
  
  .spin {
    position: absolute;

    display: flex;
    align-items: center;
    min-height: calc(v-bind(height) * 1px);
    opacity: 0;
    transition: .4s;
  }

  &.loading {
    .content {
      opacity: 1;
      //filter: blur(2px);
    }

    .spin {
      opacity: 0;
    }
  }
}
</style>