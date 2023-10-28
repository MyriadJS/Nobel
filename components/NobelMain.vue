<script setup lang="ts">
  import { Post } from '@/types/post'
  import { useTiptap } from '@/composables/useTiptap'
  import { useCounter, useEditor } from '@/store/editor'
  import { EditorContent  } from '@tiptap/vue-3'

  defineProps<{post: Post}>()
  const avatarSize = ref(90)
  const count = useCounter()
  const editor = useEditor()

  // const editor = useTiptap({
  //   limit: 4000,
  //   placeholder: 'Write your post here...',
  // })

  // onMounted(() => {
  //   console.log("rex: ", useEditor)
  //   console.log(editor.value)
  // })

  // onMounted(() => {
  //   console.log("rex: ", count.value)
  //   console.log("rex22: ", editorx.value)
  // })

  // watch(editorx, () => {
  //   console.log("rex: ", editorx)
  //   console.log(editor.value)
  // })
</script>

<template>
  <div class="wrapper">
    <section class="page compact-panel">
      <TextMenu :editor="editor" />
    </section>
    <main id="open" class="page panel">
      <div class="content post">
        <EditorContent :editor="editor"/>
        <TextMenuFloating :editor="editor" />
        <TextMenuBubble :editor="editor" />
      </div> 
      <div class="author">
        <UserAvatar
          :size="avatarSize"
          :src="post.user.author.avatar"
          :resolution="200"
        />
      </div>
    </main>
  </div>
</template>

<style lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--space);
  margin-top: var(--space-l);
}

#open #divider {
  --border-color: var(--foreground);
}

#open > .author .avatar {
  position: absolute;
  bottom: calc(v-bind(avatarSize) * -0.5px);
  outline: solid var(--space-s) var(--background);
}

#open.page {
  padding-bottom: 0px;
}

#open > .author {
  position: relative;
  display: flex;
  justify-content: center;
}

#open > .content {
  display: grid;
  gap: var(--space);
  padding-bottom: var(--space-l);
}

#open > .content > * {
  margin-left: auto;
  margin-right: auto;
}

#open .content h2,
#open .content h3,
#open .content h4 {
  text-align: center;
}

//prose mirror
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