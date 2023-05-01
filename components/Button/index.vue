<script setup lang="ts">
interface Props {
  icon?: string
  hover?: string | boolean
}

withDefaults(defineProps<Props>(), {
  hover: 'click',
  icon: 'i-pixelarticons:chevron-left'
})
</script>

<template>
  <button type="button">
    <div class="state" :class="{hover: hover}">
      <Icon :icon="icon"/>
      <p>{{hover}}</p>
    </div>
    <slot>Click</slot>
  </button>
</template>

<style lang="scss" scoped>
p {
  font-weight: 900; 
  font-variation-settings: var(--font-medium);
  width: 100%;
  text-align: center;
}

.state {
  display: flex;
  align-items: center;
  gap: var(--space-s);

  background-color: var(--background-20);
  border-radius: var(--btn-inside-radius);
  width: 0%;
  height: var(--block-inner-size);
  min-width: var(--block-inner-size);
  position: absolute;
  overflow: hidden;
  transition: width .3s;

  .icon { 
    height: var(--block-inner-size);
    width: var(--block-inner-size);
  }
}

button:hover .hover {
  width: calc(100% - var(--space-s));
}

.state:nth-of-type(2) {
  justify-content: flex-end;
  right: var(--space-s);
}

.state:nth-of-type(1) {
  left: calc(var(--space-s) / 2);
}

button {
  --btn-radius: var(--radius);
  --btn-inside-radius: max(calc(var(--btn-radius) - (var(--space-s) / 2)), max(var(--space-xs), 2px));
  border-radius: var(--btn-radius);

  position: relative;
  display: flex;
  justify-content: center;
  gap: var(--space-s);
  align-items: center;
  padding: 0px 0em;
  max-height: 0px;
  min-width: 10em;
  overflow: hidden;
}

button:focus,
button:active {
  border: none;
  outline: 2px 
    var(--border-style)
    var(--accent);
}
</style>