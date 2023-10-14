<script setup lang="ts">
const { data } = await useFetch('/api/test')


</script>

<template>

  <div id="menu" class="island rounded center">
    <div class="menu_panel rounded">
      <Button icon="">Settings</Button>
      <Button icon="">Profile</Button>
      <Button icon="">Logout</Button>
    </div>
    <div class="main">
      <Button icon="">
        <UserAvatar src="chillgirl_tnjodj.jpg"/>
      </Button>
      <Button icon="">
        Menu
      </Button>
    </div>
  </div>
  <div class="haze center"></div>
</template>

<style lang="scss">
  .center {
    left: 50%;
    transform: translate(-50%, 0);
  }

  #menu {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);

    position: fixed;
    bottom: var(--space-s);
    width: 10em;
    padding: var(--space-xs) var(--space-xs);
    background: var(--foreground);
    z-index: 100;
    transition: width 0.2s ease-in-out;
  }

  #menu .main {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: var(--space-xs);
    justify-content: center;
    align-items: center;
  }

  #menu .main button {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #menu .menu_panel {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    background-color: var(--background-20);
  }
  
  .haze {
    position: fixed;
    bottom: var(--space-s);
    width: 10em;
    height: 3rem;
    background: var(--accent);
    box-shadow: -0px 22px 105px 18px var(--accent);
    border-radius: 12rem;
    z-index: 99;
    opacity: 0.4;
  }
</style>

