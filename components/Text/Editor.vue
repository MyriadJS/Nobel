<script setup lang="ts">
  import { useEditor, EditorContent } from '@tiptap/vue-3'
  import StarterKit from '@tiptap/starter-kit'
  import CharacterCount from '@tiptap/extension-character-count'

  const characterLimit = 280

  const editor = useEditor({
    content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
    extensions: [
      StarterKit,
      CharacterCount.configure({
        limit: characterLimit,
      }),
    ],
  })
</script>

<template>
  <EditorContent :editor="editor" />
  <UtilUpload />
  <div class="editor-meta" v-if="editor">
    <p>{{ characterLimit - editor.storage.characterCount.characters()  }}</p>
  </div>
</template>

<style lang="scss">
.editor-meta p {
  //color: var(--background);
}
</style>