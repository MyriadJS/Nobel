<script setup lang="ts">
</script>

<template>
  <div id="live">
    <div class="shard">
      <p class="h1">Room:</p>
      <p class="h2">11 / 22</p>
    </div>

    <div class="stage">
      <UserNode v-for="user in 10"/>
    </div>

    <div class="meta">
      <p class="h1">listeners:</p>
      <p class="h2">45</p>
    </div>
  </div>
</template>

<style lang="scss">
  #live .shard .h1 {
    color: var(--rainbow);
    transition: color 4s;
  }

  #live .stage {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: var(--space-s);
  }

  #live {
    display: flex;
    flex-direction: column;
    gap: var(--space-s);
    justify-content: space-between;

    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 50;
    width: clamp(300px, 40vw, 100vw);
    height: 100vh;
    background: var(--foreground);
    padding: var(--space);
  }

  #live p {
    color: var(--background);
  }
</style>

