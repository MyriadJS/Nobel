<script setup lang="ts">
  import { user1 } from "@/dummydata/posts"
  import { useEditor } from '@/store/editor'
  import { useIsland } from '@/store/island'
  import { EditorContent  } from '@tiptap/vue-3'
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  
  const post = {
    id: "1",
    user: user1,
    content: 'Nuxt layers are a powerful feature that you can use to share and reuse Nuxt applications within a monorepo, or from a git repository or npm package. The layers structure is almost identical to a standard Nuxt application, which makes them easy to author and maintain.',
    cover: [],
    parent: null,
    reactions: {
      pro: 100,
      con: 100,
      replies: 100,
    }
  }
  
  const avatarSize = ref(90)
  const editor = useEditor()
  const island = useIsland()
  
  const wrapper = ref<HTMLElement | null>(null)
  
  onMounted(() => {
    if(!wrapper.value) return
    if(!process.client) return
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.create({
      trigger: wrapper.value,
      start: 'top bottom',
      end: 'bottom center',
      onToggle: (self) => {
        island.value.mode = self.isActive ? 'text' : 'default'
      }
    })
  })

</script>

<template>
  <main id="open" class="wrapper page panel" ref="wrapper">
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