<script setup lang="ts">
  import { useEditor, EditorContent  } from '@tiptap/vue-3'
  import { Editor } from '@tiptap/core'
  import Document from '@tiptap/extension-document'
  import Text from '@tiptap/extension-text'
  import Paragraph from '@tiptap/extension-paragraph'
  import Bold from '@tiptap/extension-bold'
  import Italic from '@tiptap/extension-italic'
  import Heading from '@tiptap/extension-heading'
  import History from '@tiptap/extension-history'
  import CharacterCount from '@tiptap/extension-character-count'
  import Placeholder from '@tiptap/extension-placeholder'
  import { Overflow, validateOverflow } from './plugins/Overflow'
  import VueParagraph from './plugins/VueParagraph'
  import { Slugline } from './plugins/Slugline'

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
      <h1>THE RUBIK'S CUBE IS THE WORLD’S BEST SELLING PUZZLE TOY</h1>
      <vue-post>Nuxt layers are a powerful feature that you can use to share and reuse partial Nuxt applications within a monorepo, or from a git repository or npm package. The layers structure is almost identical to a standard Nuxt application, which makes them easy to author and maintain.</vue-post>
      <vue-post>Nuxt applications within a monorepo, or from a git repository or npm package. Nuxt applications within a monorepo, or from a git repository or npm package</vue-post>
    `,
    onUpdate,
    extensions: [
      Document,
      VueParagraph,
      Text,
      Bold,
      Italic,
      Heading,
      Paragraph,
      Slugline,
      History,
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
  <TextMenuBubble :editor="editor" />
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

