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
    z-index: -1;
    
    display: flex;
    justify-content: center;

    --border-color: var(--shade);
    border-top: 
      var(--border-style) 
      var(--border-size) 
      var(--shade);
  }

  #divider .content {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--background);
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