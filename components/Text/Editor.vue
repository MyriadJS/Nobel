<script setup lang="ts">
  import { useEditor, EditorContent } from '@tiptap/vue-3'
  import { Editor as TiptapEditor  } from '@tiptap/core'
  import StarterKit from '@tiptap/starter-kit'
  import CharacterCount from '@tiptap/extension-character-count'
  import Placeholder from '@tiptap/extension-placeholder'

  interface Editor extends TiptapEditor {
    //dispatch: (transaction: any) => void
  }

  const props = withDefaults(defineProps<{limit?: number, softLimit?: number}>(), {
    limit: 4000,
    softLimit: 140,
  })

  const emit = defineEmits<{
    (e: 'text', text: string): void
  }>()

  const currentNodeLength = ref(0)

  //on update check size of current node
  //if it's over the limit, split the block at the limit and insert overflow text into new block

  function onUpdate({editor}: {editor: Editor}) {
    emit('text', editor.getHTML())

    const { $head } = editor.state.selection
    const nodeSize = $head.parent.content.size
    const offset = $head.parentOffset

    currentNodeLength.value = nodeSize

    splitBlock(editor)

    //if(nodeSize < props.softLimit) return
    //console.log('limit reached', nodeSize)
    //editor.commands.enter()
    //editor.chain().focus().splitBlock().run()

  }


  function splitBlock(editor: Editor) {
    // Get the current block and its content
    const { state, view } = editor

    const { $from } = state.selection
    const pos = $from.before()
    const block = state.doc.nodeAt(pos)
    if(!block) return
    const content = block.content

    // Define the character length to split at
    const charLimit = 10

    // Check if the content exceeds the character limit
    if (content.size > charLimit) {
      // Split the block at the desired character length
      const splitPos = pos + charLimit
      const tr = state.tr.delete(pos, splitPos).split(splitPos)
      view.dispatch(tr)

      // Get the new block and its content
      const newBlock = tr.doc.nodeAt(splitPos)
      if(!newBlock) return
      const newContent = newBlock.content

      // Pass the new content to the next block
      const nextPos = splitPos + newContent.size
      const nextBlock = tr.doc.nodeAt(nextPos)
      if(!nextBlock) return
      const nextContent = nextBlock.content
      const updatedContent = content.cut(charLimit).append(nextContent)

      // Update the editor's content
      //const newTr = tr.setNodeMarkup(pos, null, { content: updatedContent })
      editor.commands.setContent(updatedContent)
    }

    console.log('ls', editor)
  }

  const editor = useEditor({
    //content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
    onUpdate,
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Write something...',
      }),
      CharacterCount.configure({
        limit: props.limit,
      }),
    ],
  })
</script>

<template>
  <div class="editor-meta" v-if="false">
    <p>{{ softLimit - currentNodeLength }}</p>
  </div>
  <EditorContent :editor="editor" />

  <div class="controls" v-if="editor">
    <UtilUpload />

    <ButtonIcon 
      icon="i-pixelarticons:bitcoin" 
      @click="() => editor!.chain().focus().toggleBold().run()"
      :disabled="!editor.can().chain().focus().toggleBold().run()"
      :class="{active: editor.isActive('bold')}"
    />

    <ButtonIcon 
      icon="i-pixelarticons:message-text" 
      @click="() => editor!.chain().focus().toggleItalic().run()"
      :disabled="!editor.can().chain().focus().toggleItalic().run()"
      :class="{active: editor.isActive('italic')}"
    />
  </div>
</template>

<style lang="scss">
.controls {
  display: flex;
  gap: var(--space-xs);
}

.ProseMirror {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space);
}

.ProseMirror:focus {
  outline: none !important;
  border: none !important;
}

.ProseMirror p.is-editor-empty:first-child::before {
  color: var(--foreground-20);
  content: attr(data-placeholder);
  float: left;
  height: 0;
  pointer-events: none;
}
</style>

