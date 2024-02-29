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

watch(
  () => island.value.mode,
  () => {
    nextTick(() => calculateWidth())
  }
)

watch(
  () => island.value.mode2,
  () => {
    nextTick(() => calculateWidth())
  }
)

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

const textBtns = computed(() => {
  const text = island.value.mode2 === 'text'
  const inside = island.value.mode === 'text'
  return true
  return text && inside
})

const can = computed(() => {
  if (!editor.value) return false
  return editor.value.can()
})
</script>

<template>
  <MenuWrapper :width="width" :open="open">
    <MenuPanel />
    <div class="main" ref="main">
      <!-- <ButtonIcon
        icon="i-mdi:format-bold"
        @click="() => editor.value!.chain().focus().toggleBold().run()"
        :disabled="!editor.value?.can().chain().focus().toggleBold().run()"
        :class="{ active: editor.value?.isActive('bold') }"
        v-if="textBtns"
      />

      <ButtonIcon
        icon="i-mdi:format-italic"
        @click="() => editor.value!.chain().focus().toggleItalic().run()"
        :disabled="!editor.value?.can().chain().focus().toggleItalic().run()"
        :class="{ active: editor.value?.isActive('italic') }"
        v-if="textBtns"
      /> -->

      <Divider
        :vertical="true"
        foreground="var(--foreground-20)"
        style="margin: 0px"
        v-if="textBtns"
      />

      <Button icon="" @click="() => handleClick()">
        <UserAvatar src="chillgirl_tnjodj.jpg" />
      </Button>
      <UploadZone @change="addFiles" v-if="textBtns" />

      <Divider
        :vertical="true"
        foreground="var(--foreground-20)"
        style="margin: 0px"
        v-if="textBtns"
      />

      <!-- <ButtonIcon
        icon="i-pixelarticons:corner-up-left"
        @click="() => editor.value?.commands.undo()"
        :disabled="!editor.value?.can().undo()"
        v-if="textBtns"
      /> -->

      <ButtonIcon
        icon="i-pixelarticons:corner-up-right"
        @click="() => editor?.commands.redo()"
        :disabled="can && !can.redo()"
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
