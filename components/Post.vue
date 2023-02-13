<script setup lang="ts">
  import { Post } from '@/types/Post'
  defineProps<{post: Post}>()
  const avatarSize = ref(30)
  const avatarResolution = ref(30)
</script>

<template>
    <div class="post panel">
      <p>{{ post.content }}</p>
      <div
        class="author" 
        @mouseenter="avatarResolution = 90"
        @mouseleave="avatarResolution = 30"
      >
        <Avatar 
          :src="post.user.author.avatar"
          :resolution="avatarResolution"
        />
      </div>
    </div>
</template>

<style lang="scss">
  .post {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    position: relative;
    gap: var(--space-s);
    & > p {
      position: relative;
      z-index: 3;
    }
  }

  .post .author {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    left: 0px;
    bottom: calc((v-bind(avatarSize) / 2 * -1px));
    position: absolute;
    //background-color: red;
    width: 100%;

    .avatar {
      display: flex;
      justify-content: center;
      align-items: center;
      clip-path: polygon(0 0,100% 0,100% 100%,0 100%);
      transition: .2s;
    }

    &:hover .avatar {
      transform: scale(3);
      clip-path: polygon(0 0,100% 0,100% 50%,0 50%);
    }
  }
</style>