<script setup lang="ts">
import { useFile } from '@/store/editor'
import { useIsland } from '@/store/island'
// const { data } = await useFetch('/api/test')

const island = useIsland()

const open = ref(false)
const main = ref<HTMLDivElement | null>(null)
const islandWidth = ref<false | number>(false)

const width = computed(() => {
  if (!islandWidth.value) return 'auto'
  return islandWidth.value + 'px'
})

onMounted(() => calculateWidth())

function calculateWidth() {
  if (!main.value) return
  islandWidth.value = main.value.offsetWidth
}

function handleClick() {
  open.value = !open.value
  if (!open.value) return
  calculateWidth()
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
    @mouseover="() => island.hover = true"
    @mouseleave="() => island.hover = false"
  >
    <MenuPanel />
    <div class="main" ref="main">
      <Button icon="" @click="() => handleClick()">
        <UserAvatar src="chillgirl_tnjodj.jpg"/>
      </Button>
      <UploadZone @change="addFiles" v-if="island.mode === 'text'" />
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

