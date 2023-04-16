<script setup lang="ts">
</script>

<template>
  <div class="card">
    <UserAvatar src="chillgirl_tnjodj.jpg" :size="70"/>
    <div class="rainbow"></div>
  </div>
</template>

<style lang="scss">
  .card {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    //background-color: var(--background-20);
    border:
      var(--border-size) 
      var(--border-style)
      var(--foreground-20);
    padding: var(--space);
    border-radius: var(--radius);
    overflow: hidden;

    //width: 4em;
    transition: width .2s;
  }

  #live .stage .rainbow {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:
      conic-gradient(
        from calc(var(--rx, 0) * 180deg) at
          calc(var(--x, 0) * 100%) calc(var(--y, 0) * 100%),
        hsl(10 90% 70%),
        hsl(140 80% 70%),
        hsl(320 80% 70%),
        hsl(210 80% 70%),
        hsl(10 80% 70%)
      );
    filter: saturate(0.5);
    opacity: 0.5;
  }
</style>

