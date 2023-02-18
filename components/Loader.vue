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
    <AutoSize @change="(e) => height = e">
      <slot/>
    </AutoSize>
    <div class="spin">
      <Spinner :steps="40"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loader {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: var(--space);
  transition: 0.4s;
}
  
.loader .spin {
  position: absolute;
  display: flex;
  align-items: center;
  min-height: calc(v-bind(height) * 1px);
  opacity: 0;
  transition: .4s;
}

.loader.loading .content {
  opacity: 0.2;
  filter: blur(2px);
}

.loader.loading .spin {
  opacity: 1;
}
</style>