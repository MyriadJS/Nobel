<script setup lang="ts">
  import { Editor } from '@tiptap/core'
  defineProps<{editor?: Editor}>()
</script> 

<template>
  <Divider
    style="margin-bottom: 0px"
    foreground="var(--foreground-20)"
    background="var(--background-10)"
    space="var(--space)"
  />
  <div class="controls" v-if="editor">
    <UploadTrigger>
      <ButtonIcon 
        icon="i-pixelarticons:image"
        intention="add"
        type="button"
      />
    </UploadTrigger>

    <Divider 
      :vertical="true" 
      space="0px" 
      foreground="var(--foreground-20)"
    />
 
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
  </div>
  <Divider
    style="margin-top: 0px"
    foreground="var(--foreground-20)"
    background="var(--background-10)"
    space="var(--space)"
  />
</template>

<style lang="scss">
.controls {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
}
</style>

