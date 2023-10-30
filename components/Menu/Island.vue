<script setup lang="ts">
import { useFile } from '@/store/editor'
import { useIsland } from '@/store/island'

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

watch(() => island.value.mode, () => {
  nextTick(() => calculateWidth())
})

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
  <MenuWrapper :width="width" :open="open">
    <MenuPanel />
    <div class="main" ref="main">
      <Button icon="" @click="() => handleClick()">
        <UserAvatar src="chillgirl_tnjodj.jpg"/>
      </Button>
      <UploadZone @change="addFiles" v-if="island.mode === 'text'" />
    </div>
  </MenuWrapper>
</template>

<style lang="scss" scoped>
#island .main {
  display: flex;
  gap: var(--space-xs);
  justify-content: center;
  align-items: center;
  padding: var(--space-xs) var(--space-xs);
  width: max-content;
}
</style>

