<script setup lang="ts">
  import { EditorContent  } from '@tiptap/vue-3'
  import { useTiptap } from '@/composables/useTiptap'

  const props = withDefaults(defineProps<{limit?: number, softLimit?: number}>(), {
    limit: 4000,
    softLimit: 140,
  })

  const emit = defineEmits<{
    (e: 'text', text: string): void
  }>()

  const editor = useTiptap({
    limit: props.limit,
    placeholder: 'Write your post here...',
    onChange: (e) => {
      emit('text', e.getHTML())
    },
  })

</script>

<template>
  <TextMenu :editor="editor" />
  <EditorContent :editor="editor"/>
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

