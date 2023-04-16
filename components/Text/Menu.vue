<script setup lang="ts">
  import { Editor } from '@tiptap/core'
  defineProps<{editor?: Editor}>()
  const input = ref<HTMLInputElement | null>(null)
</script>

<template>
  <div class="controls" v-if="editor">    
    <UtilUpload :input="input" />

    <ButtonIcon 
      icon="i-mdi:format-bold"  
      @click="() => editor!.chain().focus().toggleBold().run()"
      :disabled="!editor.can().chain().focus().toggleBold().run()"
      :class="{active: editor.isActive('bold')}"
    />

    <ButtonIcon
      icon="i-mdi:format-italic"  
      @click="() => editor!.chain().focus().toggleItalic().run()"
      :disabled="!editor.can().chain().focus().toggleItalic().run()"
      :class="{active: editor.isActive('italic')}"
    />

    <ButtonIcon 
      icon="i-pixelarticons:plus"
      @click="() => input?.click()"
    />

  </div>
</template>

<style lang="scss">
.controls {
  display: flex;
  gap: var(--space-xs);
  padding-top: var(--space-s);
}
</style>

