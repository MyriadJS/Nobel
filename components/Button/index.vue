<script setup lang="ts">
interface Props {
  intention?: string
}

withDefaults(defineProps<Props>(), {
  intention: 'click'
})
</script>

<template>
  <button type="button">
    <div class="state">
      <Icon icon="i-pixelarticons:chevron-left"/>
      <p>{{ intention }}</p>
    </div>
    <slot>Click</slot>
    <!-- <div class="state">
      <p>lol</p>
      <Icon/>
    </div> -->
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

  --icon-size: calc(3em - var(--padding));

  background-color: var(--background-20);
  border-radius: var(--btn-inside-radius);
  width: 0%;
  min-width: var(--icon-size);
  position: absolute;
  overflow: hidden;
  transition: width .3s;

  .icon { 
    height: var(--icon-size);
    width: var(--icon-size);
  }
}

button:hover .state {
  width: calc(100% - var(--padding));
}

.state:nth-of-type(2) {
  justify-content: flex-end;
  right: var(--padding);
}

.state:nth-of-type(1) {
  left: calc(var(--padding) / 2);
}

button {
  --padding: var(--space);
  --btn-radius: var(--radius);
  --btn-inside-radius: max(calc(var(--btn-radius) - (var(--padding) / 2)), max(var(--space-xs), 2px));
  border-radius: var(--btn-radius);

  position: relative;
  display: flex;
  justify-content: center;
  gap: var(--space-s);
  align-items: center;
  padding: 0px 0em;
  max-height: 0px;
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