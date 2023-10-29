<script setup lang="ts">
import { useFile } from '@/store/editor'
import { useIsland } from '@/store/island'
const { data } = await useFetch('/api/test')

const island = useIsland()

const open = ref(false)
const main = ref<HTMLDivElement | null>(null)
const islandWidth = ref<false | number>(false)

const width = computed(() => {
  if (!islandWidth.value) return 'auto'
  return islandWidth.value + 'px'
})

onMounted(() => {
  if(!main.value) return
  islandWidth.value = main.value?.offsetWidth
})

function handleClick() {
  open.value = !open.value
  if (!open.value) return
  if (!main.value) return
  islandWidth.value = main.value.offsetWidth
}

const storedFiles = useFile()
function addFiles(e: Event) {
  const target = e.target as HTMLInputElement
  storedFiles.value = Array.from(target.files!)
}
</script>

<template>
  <div 
    id="island" 
    class="island i-length rounded center" 
    :class="{open}" 
    @mouseover="() => island = true"
    @mouseleave="() => island = false" 
  >
    <div class="menu_panel">
      <div class="panel rounded">
        <Button icon="">Settings</Button>
        <Button icon="">Profile</Button>
        <Button icon="">Logout</Button>
      </div>
    </div>
    <div class="main" ref="main">
      <Button icon="" @click="() => handleClick()">
        <UserAvatar src="chillgirl_tnjodj.jpg"/>
      </Button>
      <UploadZone @change="addFiles" />
    </div>
  </div>
  <div class="haze i-length center" :class="{open}"></div>
</template>

<style lang="scss" scoped>
  .center {
    left: 50%;
    transform: translate(-50%, 0);
  }

  .i-length {
    width: v-bind(width);
    transition: 0.2s ;
  }

  .i-length.open {
    width: 20em;
  }

  #island {
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    bottom: var(--space-s);
    background: var(--foreground);
    z-index: 100;
  }

  #island .main {
    display: flex;
    gap: var(--space-xs);
    justify-content: center;
    align-items: center;
    padding: var(--space-xs) var(--space-xs);
    width: max-content;
  }

  #island .main button {
    display: flex;
    justify-content: center;
    align-items: center;
  }

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
  
  .haze {
    position: fixed;
    bottom: var(--space-s);
    height: 3rem;
    background: var(--accent);
    box-shadow: -0px 22px 105px 18px var(--accent);
    border-radius: 12rem;
    z-index: 99;
    opacity: 0.4;
  }

  #island:hover ~ .haze {
    opacity: 1;
  }
</style>

