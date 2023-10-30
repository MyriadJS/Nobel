<script setup lang="ts">
import { useFile, useEditor } from '@/store/editor'
import { useIsland } from '@/store/island'

const island = useIsland()
const editor = useEditor()

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

      <Divider 
        :vertical="true"
        foreground="var(--foreground-20)"
        style="margin: 0px;"
        v-if="island.mode2 === 'text'"
      />

      <ButtonIcon 
        icon="i-mdi:format-bold"  
        @click="() => editor!.chain().focus().toggleBold().run()"
        :disabled="!editor?.can().chain().focus().toggleBold().run()"
        :class="{active: editor?.isActive('bold')}"
        v-if="island.mode2 === 'text'"
      />

      <ButtonIcon
        icon="i-mdi:format-italic"  
        @click="() => editor!.chain().focus().toggleItalic().run()"
        :disabled="!editor?.can().chain().focus().toggleItalic().run()"
        :class="{active: editor?.isActive('italic')}"
        v-if="island.mode2 === 'text'"
      />

      <Divider 
        :vertical="true"
        foreground="var(--foreground-20)"
        style="margin: 0px;"
        v-if="island.mode2 === 'text'"
      />

      <ButtonIcon 
        icon="i-pixelarticons:corner-up-left"
        @click="() => editor?.commands.undo()"
        :disabled="!editor?.can().undo()"
        v-if="island.mode2 === 'text'"
      />

      <ButtonIcon 
        icon="i-pixelarticons:corner-up-right"  
        @click="() => editor?.commands.redo()"
        :disabled="!editor?.can().redo()"
        v-if="island.mode2 === 'text'"
      />
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

