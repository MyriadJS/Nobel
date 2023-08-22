<script setup lang="ts">
  import { Post } from '@/types/post'
  defineProps<{post: Post}>()
  const avatarSize = ref(90)

  const text = ref('')
  function handleText(t: string) {
    text.value = t
  }
</script>

<template>
  <main id="open" class="page panel">
    <div class="content post">
      <TextEditor @text="handleText"/>
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
#open #divider {
  --border-color: var(--foreground);
}

#open > .author .avatar {
  position: absolute;
  bottom: calc(v-bind(avatarSize) * -0.5px);
  outline: solid var(--space-s) var(--background);
}

#open.page {
  margin-top: var(--space-l);
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

</style>