<script setup lang="ts">
  import { useEditor, EditorContent  } from '@tiptap/vue-3'
  import { Editor } from '@tiptap/core'
  import Document from '@tiptap/extension-document'
  import Text from '@tiptap/extension-text'
  import Bold from '@tiptap/extension-bold'
  import Italic from '@tiptap/extension-italic'
  import CharacterCount from '@tiptap/extension-character-count'
  import Placeholder from '@tiptap/extension-placeholder'
  import { Overflow, validateOverflow } from './plugins/Overflow'
  import VueParagraph from './plugins/VueParagraph'

  const props = withDefaults(defineProps<{limit?: number, softLimit?: number}>(), {
    limit: 4000,
    softLimit: 140,
  })

  const emit = defineEmits<{
    (e: 'text', text: string): void
  }>()

  const target = ref(null)

  const editor = useEditor({
    content: `
      <vue-post>This is still the text editor you’re used to, but enriched with node views. This is editable. This is editable. Did you see that? That’s a Vue component. We are really living in the future.</vue-post>
      <vue-post>fsefefeeefdfsefdsfefdfefe</vue-post>
      <vue-post>fdfefseeffefdsdfeefdfdfefd</vue-post>
    `,
    onUpdate,
    extensions: [
      Document,
      VueParagraph,
      Text,
      Bold,
      Italic,
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
    console.log(editor.getJSON())
  }

  onBeforeUnmount(() => {
    if(!editor.value) return
    editor.value.destroy()
  })
</script>

<template>
  <TextMenu :editor="editor" />
  <EditorContent 
    :editor="editor"
    ref="target"
  />
  <TextMenuFloating :editor="editor" />
</template>

<style lang="scss">
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

