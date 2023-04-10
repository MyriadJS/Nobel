<script setup lang="ts">
  import { useEditor, EditorContent } from '@tiptap/vue-3'
  import { Editor, mergeAttributes   } from '@tiptap/core'
  import StarterKit from '@tiptap/starter-kit'
  import CharacterCount from '@tiptap/extension-character-count'
  import Placeholder from '@tiptap/extension-placeholder'
  import TextStyle from '@tiptap/extension-text-style'

  const props = withDefaults(defineProps<{limit?: number, softLimit?: number}>(), {
    limit: 4000,
    softLimit: 140,
  })

  const emit = defineEmits<{
    (e: 'text', text: string): void
  }>()

  const editor = useEditor({
    onUpdate,
    extensions: [
      StarterKit,
      TextStyle.extend({
        name: 'overflow',
        renderHTML({ HTMLAttributes }) {
          return ['span', mergeAttributes(HTMLAttributes, { class: "overflow" }), 0]
        },
      }),
      Placeholder.configure({
        placeholder: 'Write something...',
      }),
      CharacterCount.configure({
        limit: props.limit,
      }),
    ],
  })

  const currentNodeLength = ref(0)

  function onUpdate({editor}: {editor: Editor}) {
    emit('text', editor.getHTML())

    const { $head } = editor.state.selection
    const nodeSize = $head.parent.content.size
    currentNodeLength.value = nodeSize

    nextTick(() => markOverflow(editor))
  }

  function markOverflow(e: Editor) {
    if(!editor.value) return
    const { state, view, schema } = editor.value
    const dispatch = view.dispatch
    const transaction = state.tr

    function removeMark(from: number, to: number, mark: any) {
      return dispatch(transaction.removeMark(from, to, mark))
    }

    function addMark(from: number, to: number, mark: any) {
      return dispatch(transaction.addMark(from, to, mark))
    }
    
    const current = {
      start: state.selection.$from.before(),
      block: state.doc.nodeAt(state.selection.$from.before()),
      size: state.doc.nodeAt(state.selection.$from.before())?.content.size || 0,
      end: 0,
    }

    current.end = current.start + current.size + 1
    const atLimit = current.size >= props.softLimit
    const limit = current.start + props.softLimit
    const inner = Math.min(current.end, limit)

    const overflowMark = schema.marks.overflow.create()
    
    removeMark(current.start, inner, overflowMark)
    atLimit && addMark(limit, current.end, overflowMark)
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

