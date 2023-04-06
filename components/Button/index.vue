<script setup lang="ts">
</script>

<template>
  <button 
    type="button" 
    v-bind="$attrs"
  >
    <div class="icon">
      <i class="i-pixelarticons:chevron-left" ></i>
    </div>
    <p>Change</p>
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

.icon {
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: var(--radius);

  background-color: var(--background-20);
  aspect-ratio: 1/1;
}

i {
  display: block;
  width: 40px;
}

p {
  margin: auto;
}
</style>

<script>
export default {
  inheritAttrs: false
}
</script>
