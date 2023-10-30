<script setup lang="ts">
</script>

<template>
  <div class="menu_panel">
    <div class="panel rounded">
      <Button icon="">Settings</Button>
      <Button icon="">Profile</Button>
      <Button icon="">Logout</Button>
    </div>
  </div>
</template>

<style lang="scss">
  #island .menu_panel {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);

    padding: 0px var(--space-xs);
    padding-bottom: 0px;
    max-height: 0px;
    width: 100%;

    overflow: hidden;
    transition: max-height .2s, padding .1s .1s;
  }
  
  #island.open .menu_panel {
    padding: var(--space-xs);
    padding-bottom: 0px;
    max-height: 50vh;
    transition: max-height .2s, padding .1s;
  }

  #island .panel {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    background: var(--base-40);
    padding: var(--space-xs);
  }
</style>

