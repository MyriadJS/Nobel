<script setup lang="ts">
  import { Editor } from '@tiptap/core'
  defineProps<{editor?: Editor}>()
</script> 

<template>
  <div class="controls" v-if="editor">
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

    <Divider 
      :vertical="true"
      foreground="var(--foreground-20)"
      style="margin: 0px;"
    />

    <ButtonIcon 
      icon="i-pixelarticons:corner-up-left"
      @click="() => editor?.commands.undo()"
      :disabled="!editor?.can().undo()"
    />

    <ButtonIcon 
      icon="i-pixelarticons:corner-up-right"  
      @click="() => editor?.commands.redo()"
      :disabled="!editor?.can().redo()"
    />
  </div>
</template>

<style lang="scss" scoped>
.controls {
  display: flex;
  align-items: center;
  gap: var(--space-xs); 
}
</style>

