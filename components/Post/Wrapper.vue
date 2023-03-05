<script setup lang="ts">
  import { Post } from '@/types/Post'
  defineProps<{post: Post, loading: boolean, duration: number}>()
  const avatarSize = ref(30)
  const avatarResolution = ref(30)
</script>

<template>
  <div class="post panel">
    <Loader :loading="loading" :duration="duration">
      <slot></slot>
    </Loader>
    <div
      class="author" 
      @mouseenter="avatarResolution = 250"
      @mouseleave="avatarResolution = 30"
    >
      <UserAvatar
        v-if="false"
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

    padding: 0px;
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
    width: 100%;
    padding-top: 50px;

    .avatar {
      display: flex;
      justify-content: center;
      align-items: center;
      clip-path: polygon(0 0,100% 0,100% 100%,0 100%);
      transition: .2s;
      pointer-events:none;
    }

    &:hover .avatar {
      transform: scale(7);
      clip-path: polygon(0 0,100% 0,100% 50%,0 50%);
    }
  }
</style>