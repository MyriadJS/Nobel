<script setup lang="ts">
const { data } = await useFetch('/api/test')
const open = ref(false)
</script>

<template>

  <div id="island" class="island rounded center" :class="{open}">
    <div class="menu_panel">
      <div class="tabs rounded" v-if="false">
        <div class="tab rounded">
          <h3><UIcon name="i-heroicons-eye" class="icon" style="transform: translateY(4px)"  /> Settings</h3>
        </div>
        <Button icon="i-heroicons-eye" />
        <Button icon="i-heroicons-eye" />
      </div>
      <div class="panel rounded">
        <Button icon="">Settings</Button>
        <Button icon="">Profile</Button>
        <Button icon="">Logout</Button>
      </div>
    </div>
    <div class="main">
      <Button icon="">
        <UserAvatar src="chillgirl_tnjodj.jpg"/>
      </Button>
      <Button icon="" @click="open = !open">
        Menu
      </Button>
    </div>
  </div>
  <div class="haze center"></div>
</template>

<style lang="scss" scoped>
  .center {
    left: 50%;
    transform: translate(-50%, 0);
  }

  #island {
    display: flex;
    flex-direction: column;
    //gap: var(--space-xs);

    position: fixed;
    bottom: var(--space-s);
    width: 10em;
    background: var(--foreground);
    z-index: 100;
    transition: width 0.2s ease-in-out;
  }

  #island.open {
    width: 20em;
  }

  #island .main {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: var(--space-xs);
    justify-content: center;
    align-items: center;
    padding: var(--space-xs) var(--space-xs);
  }

  #island .main button {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #island .menu_panel {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);

    padding: 0px var(--space-xs);
    padding-bottom: 0px;
    max-height: 0px;
    overflow: hidden;
    transition: max-height .2s, padding .1s .1s;
  }
  
  #island.open .menu_panel {
    padding: var(--space-xs);
    padding-bottom: 0px;
    max-height: 50vh;
    transition: max-height .2s, padding .1s;
  }

  #island .menu_panel .tabs {
    display: flex;
    gap: var(--space-xs);
    
    background-color: var(--base-40);
    color: var(--background);
    padding: var(--space-xs);
  }

  #island .menu_panel .tabs .tab {
    display: flex;
    gap: var(--space-xs);
    align-items: center;
    
    background: var(--base-20);
    color: var(--foreground);
    padding: var(--space-xs);
    flex-grow: 1;
  }

  #island .panel {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    background: var(--base-40);
    padding: var(--space-xs);
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
    transition: .2s ease-in-out;
  }

  #island:hover ~ .haze {
    opacity: 1;
  }
</style>

