<script setup lang="ts">
  import { useEditor, EditorContent, VueNodeViewRenderer  } from '@tiptap/vue-3'
  import { Editor, Node } from '@tiptap/core'
  import StarterKit from '@tiptap/starter-kit'
  import CharacterCount from '@tiptap/extension-character-count'
  import Placeholder from '@tiptap/extension-placeholder'
  import { Overflow, validateOverflow } from './Overflow'
  import VueComponent from './Component'

  const props = withDefaults(defineProps<{limit?: number, softLimit?: number}>(), {
    limit: 4000,
    softLimit: 140,
  })

  const emit = defineEmits<{
    (e: 'text', text: string): void
  }>()

  const editor = useEditor({
    content: `
      <p>
        This is still the text editor you’re used to, but enriched with node views.
      </p>
      <vue-post>
        <p>This is editable.</p>
      </vue-post>
      <p>
        Did you see that? That’s a Vue component. We are really living in the future.
      </p>
    `,
    onUpdate,
    extensions: [
      StarterKit,
      Overflow,
      VueComponent,
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

    <ButtonIcon 
      icon="i-pixelarticons:add-grid" 
      @click="() => editor!.commands.setNode('vuePost')"
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

