<script setup lang="ts">
import { NodeViewContent, NodeViewWrapper, nodeViewProps } from '@tiptap/vue-3'
import { user1 } from "@/dummydata/posts"

const post2 = {
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

const post = {
  id: "1",
  user: user1,
  content: 'Nuxt layers are a powerful feature that you can use to share and reuse Nuxt applications within a monorepo, or from a git repository or npm package. The layers structure is almost identical to a standard Nuxt application, which makes them easy to author and maintain.',
  cover: [],
  parent: post2,
  reactions: {
    pro: 100,
    con: 100,
    replies: 100,
  }
}

defineProps(nodeViewProps)
defineComponent({
  components: {
    NodeViewContent,
    NodeViewWrapper,
  },
})
</script>

<template>
  <node-view-wrapper class="vue-component">
    <PostRelationship :post="post" :loading="false">
      <p><node-view-content class="content" /></p>
      <UploadPreview/>
    </PostRelationship>
  </node-view-wrapper>
</template>
