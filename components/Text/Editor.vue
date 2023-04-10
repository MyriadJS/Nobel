<script setup lang="ts">
  import { useEditor, EditorContent } from '@tiptap/vue-3'
  import { Editor } from '@tiptap/core'
  import StarterKit from '@tiptap/starter-kit'
  import CharacterCount from '@tiptap/extension-character-count'
  import Placeholder from '@tiptap/extension-placeholder'
  import Paragraph from '@tiptap/extension-paragraph'
  import { Overflow, validateOverflow } from './Overflow'
  import Strike from '@tiptap/extension-strike'
  import { markPasteRule } from '@tiptap/core'

  const props = withDefaults(defineProps<{limit?: number, softLimit?: number}>(), {
    limit: 4000,
    softLimit: 140,
  })

  const emit = defineEmits<{
    (e: 'text', text: string): void
  }>()

  const clearMarksOnPaste = (editor: Editor, event:any) => {
    event.preventDefault()

    // Get the pasted content
    const text = event.clipboardData.getData('text/plain')

    // Clear any active marks from the pasted content
    //const doc = editor.schema.removeMarksFromDoc(editor.state.doc, editor.schema.marks.myCustomMark)

    // Insert the modified content into the editor
    // const tr = editor.state.tr
    // const startPos = tr.selection.from
    // tr.replaceSelection(doc.createText(text))
    // editor.view.dispatch(tr.scrollIntoView())

    // Move the cursor to the end of the inserted content
    //const endPos = startPos + text.length
   // editor.view.dispatch(editor.state.tr.setSelection(TextSelection.create(editor.state.doc, endPos)))
  }

  const editor = useEditor({
    onUpdate,
    extensions: [
      StarterKit,
      Overflow,
      Placeholder.configure({
        placeholder: 'Write something...',
      }),
      CharacterCount.configure({
        limit: props.limit,
      }),
    ],
  })

  const currentNodeLength = ref(0)

  function countNodeLength(editor: Editor) {
    const { $head } = editor.state.selection
    const nodeSize = $head.parent.content.size
    currentNodeLength.value = nodeSize
  }

  function onUpdate({editor}: {editor: Editor}) {
    emit('text', editor.getHTML())
    countNodeLength(editor)
    validateOverflow(editor, {
      limit: 280
    })
  }
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

span.overflow {
  color: var(--accent-20);
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

