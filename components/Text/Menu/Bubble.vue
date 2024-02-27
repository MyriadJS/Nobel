<script setup lang="ts">
import { BubbleMenu } from '@tiptap/vue-3'
import { Editor } from '@tiptap/core'

defineProps<{ editor?: Editor }>()
</script>

<template>
  <BubbleMenu :editor="editor" v-if="editor">
    <ButtonIcon
      icon="i-mdi:format-header-1"
      @click="() => editor?.chain().focus().toggleHeading({ level: 1 }).run()"
      :class="{ active: editor.isActive('heading', { level: 1 }) }"
    >
      H1
    </ButtonIcon>
    <ButtonIcon
      icon="i-mdi:format-header-2"
      @click="() => editor?.chain().focus().toggleHeading({ level: 2 }).run()"
      :class="{ active: editor.isActive('heading', { level: 2 }) }"
    >
      H2
    </ButtonIcon>
    <ButtonIcon
      icon="i-mdi:format-header-3"
      @click="() => editor?.chain().focus().toggleHeading({ level: 3 }).run()"
      :class="{ active: editor.isActive('heading', { level: 3 }) }"
    >
      H3
    </ButtonIcon>
    <ButtonIcon
      icon="i-pixelarticons:add-grid"
      @click="() => editor!.commands.setNode('vuePost')"
    />
    <ButtonIcon
      icon="i-pixelarticons:add-grid"
      @click="() => editor!.commands.setNode('slugline')"
    />
  </BubbleMenu>
</template>

<style lang="scss">
.tippy-content > div {
  display: flex;
  gap: var(--space-xs);
}
</style>
