<script setup lang="ts">
  import { useEditor, EditorContent } from '@tiptap/vue-3'
  import { Editor  } from '@tiptap/core'
  import StarterKit from '@tiptap/starter-kit'
  import CharacterCount from '@tiptap/extension-character-count'

  const props = withDefaults(defineProps<{limit: number, softLimit: number}>(), {
    limit: 4000,
    softLimit: 140,
  })

  const emit = defineEmits<{
    (e: 'text', text: string): void
  }>()

  const currentNodeLength = ref(0)

  function onUpdate({editor}: {editor: Editor}) {
    emit('text', editor.getHTML())

    const { $head } = editor.state.selection
    const text = $head.parent.content.size

    currentNodeLength.value = text

    if(text < props.softLimit) return
    console.log('limit reached')
    editor.commands.enter()    
  }

  const editor = useEditor({
    content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
    onUpdate,
    extensions: [
      StarterKit,
      CharacterCount.configure({
        limit: props.limit,
      }),
    ],
  })

  function newParagraph() {
    if(!editor.value) return
    editor.value.commands.enter()
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
      v-if="true"
      icon="i-pixelarticons:plus" 
      @click="() => newParagraph()"
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
  gap: var(--space);
}

.ProseMirror:focus {
  outline: none !important;
  border: none !important;
}
</style>

