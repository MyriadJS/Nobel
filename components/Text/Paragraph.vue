<script setup lang="ts">
import { NodeViewContent, NodeViewWrapper, nodeViewProps } from '@tiptap/vue-3'
import { getCurrentBlock } from '@/composables/useTiptap/Overflow'
import { user1 } from '@/dummydata/posts'
import { useFile } from '@/store/editor'
import { useIsland } from '@/store/island'

const post = {
  id: '1',
  user: user1,
  content:
    'Nuxt layers are a powerful feature that you can use to share and reuse Nuxt applications within a monorepo, or from a git repository or npm package. The layers structure is almost identical to a standard Nuxt application, which makes them easy to author and maintain.',
  cover: [],
  parent: undefined,
  reactions: {
    pro: 100,
    con: 100,
    replies: 100,
  },
}

const props = defineProps(nodeViewProps)
defineComponent({
  components: {
    NodeViewContent,
    NodeViewWrapper,
  },
})

const files = ref<File[]>([])

function addFiles(e: Event) {
  const target = e.target as HTMLInputElement
  files.value = [...files.value, ...Array.from(target.files!)]
}

const island = useIsland()
const storedFiles = useFile()
const watched = watchPausable(storedFiles, (values) => {
  files.value = [...files.value, ...values]
})

watched.pause()

const selected = ref(false)
props.editor.on('selectionUpdate', ({ editor }) => {
  const current = getCurrentBlock(editor)
  const isCurrent = props.getPos() === current.start
  isCurrent ? turnActiveOn() : turnActiveOff()
})

function turnActiveOn() {
  storedFiles.value = []
  selected.value = true
  watched.resume()
}

function turnActiveOff() {
  selected.value = false
  watched.pause()
}

const cooldown = useCooldown(selected)
const postElement = ref<HTMLElement | null>(null)
onClickOutside(postElement, () => {
  if (island.value.hover) return
  if (cooldown.value) return
  selected.value = false
})
</script>

<template>
  <node-view-wrapper class="vue-component">
    <Post ref="postElement" :post="post" :loading="false">
      <p><node-view-content class="content" /></p>
      <div class="vail" :class="{ selected: selected }" />
      <div class="footer" contenteditable="false" v-if="false">
        <div class="attachment">
          <UploadPreview
            :files="files"
            :controls="selected"
            @delete="(index) => files.splice(index, 1)"
            @change="addFiles"
          />
        </div>
      </div>
    </Post>
  </node-view-wrapper>
</template>

<style lang="scss">
.post-wrapper {
  position: relative;
  transition:
    padding 0.4s,
    background-color 0.4s;
}

.post-wrapper .vail {
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  border-radius: var(--radius);
  transform: scale(1.05, 1.2);
  background: var(--background);
  transition: width 0.1s;
  &.selected {
    width: 100%;
  }
}

.post-wrapper p {
  position: relative;
  z-index: 1;
}

.post-wrapper .footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}

.post-wrapper .footer .attachment {
  max-height: 600px;
  padding-bottom: var(--space);
  padding-top: var(--space-xs);
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  transition: 0.2s;
}

button.divider {
  width: 100%;
  max-width: 100%;
  background: transparent;
}
</style>
