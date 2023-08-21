<script setup lang="ts">
import { NodeViewContent, NodeViewWrapper, nodeViewProps } from '@tiptap/vue-3'
import { getCurrentBlock } from "../Overflow"
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

let selected = ref(false)

props.editor.on('selectionUpdate', ({ editor }) => {
  const current = getCurrentBlock(editor)
  selected.value = props.getPos() === current.start
})

//TODO: This should deselct the node when the editor is blurred
// props.editor.on('blur', () => {
//   selected.value = false
// })

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
      :post="post" 
      :loading="false" 
      :class="{selected: selected}"
    >
      <p><node-view-content class="content" /></p>
      <div class="footer" contenteditable="false">
        <Divider
          v-if="selected"
          style="margin-bottom: var(--space)"
          foreground="var(--foreground-20)"
          background="var(--background-10)"
          space="var(--space)"
        />
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
}

.post-wrapper .footer {
  color: var(--accent);
}
</style>
