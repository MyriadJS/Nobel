<script setup lang="ts">
import { NodeViewContent, NodeViewWrapper, nodeViewProps } from '@tiptap/vue-3'
import { getCurrentBlock } from "@/composables/useTiptap/Overflow"
import { user1 } from "@/dummydata/posts"

const post2 = {
  id: "1",
  user: user1,
  content: 'Nuxt layers are a powerful feature that you can use to share and reuse Nuxt applications within a monorepo, or from a git repository or npm package. The layers structure is almost identical to a standard Nuxt application, which makes them easy to author and maintain.',
  cover: [],
  parent: null,
  reactions: {
    pro: 100,
    con: 100,
    replies: 100,
  }
}

const post = {
  id: "1",
  user: user1,
  content: 'Nuxt layers are a powerful feature that you can use to share and reuse Nuxt applications within a monorepo, or from a git repository or npm package. The layers structure is almost identical to a standard Nuxt application, which makes them easy to author and maintain.',
  cover: [],
  parent: undefined,
  reactions: {
    pro: 100,
    con: 100,
    replies: 100,
  }
}

const props = defineProps(nodeViewProps)
defineComponent({
  components: {
    NodeViewContent,
    NodeViewWrapper
  }
})

const selected = ref(false)
const expanded = ref(false)

const cooldown = useCooldown(selected)

props.editor.on('selectionUpdate', ({ editor }) => {
  const current = getCurrentBlock(editor)
  selected.value = props.getPos() === current.start
})

const postElement = ref<HTMLElement | null>(null)
onClickOutside(postElement, () => {
  if(cooldown.value) return
  selected.value = false
})

const files = ref<File[]>([])

function addFiles(e: Event) {
  const target = e.target as HTMLInputElement
  files.value = [...files.value, ...Array.from(target.files!)]
}

function deleteFile(index: number) {
  files.value.splice(index, 1)
}
</script>

<template>
  <node-view-wrapper class="vue-component">
    <Post
      ref="postElement"
      :post="post" 
      :loading="false" 
      :class="{selected: selected}"
    >
      <p><node-view-content class="content" /></p>
      <div class="footer" contenteditable="false" v-if="true">
        <DividerButton 
          v-if="selected && !files.length"
          @click="expanded = !expanded"
          :icon="expanded ? 'i-mdi:close' : 'i-mdi:plus'"
        />
        <div class="attachment" :class="{expanded: expanded}">
          <UploadZone 
            v-if="!files.length && selected"
            @change="addFiles"
          />
          <UploadPreview
            v-if="files.length"
            :files="files"
            :controls="selected"
            @delete="deleteFile"
            @change="addFiles"
          />
        </div>
      </div>
    </Post>
  </node-view-wrapper>
</template>

<style lang="scss">
.post-wrapper {
  transition: padding .4s, background-color .4s;
}

.post-wrapper.selected {
  background: var(--background);
  padding: var(--space-m) var(--space-m);
  border-radius: var(--radius);
  padding-top: 0px;
  padding-bottom: 0px;
}

.post-wrapper .footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}

.post-wrapper .footer .attachment {
  max-height: 0px;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  transition: .2s;
}

.post-wrapper .footer .attachment.expanded {
  max-height: 600px;
  padding-bottom: var(--space);
  padding-top: var(--space-xs);
}

button.divider {
  width: 100%;
  max-width: 100%;
  background: transparent;
}
</style>
