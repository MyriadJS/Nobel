<script setup lang="ts">
  import { Post } from '@/types/Post'

  defineProps<{
    post: Post
    loading: boolean
    duration: number
  }>()

  const avatarSize = ref(30)
  const avatarResolution = ref(30)

  function hasContent(post: Post) {
    return Boolean(post.content || post.cover.length)
  }
</script>

<template>
  <div class="post panel" v-if="hasContent(post)">
    <Loading :loading="loading" :duration="duration">
      <slot></slot>
    </Loading>
    <div class="author">
      <UserAvatar
        v-if="true"
        :src="post.user.author.avatar"
        :resolution="avatarResolution"
      />
    </div>
  </div>
  <UserChip v-else :author="post.user.author"/>
</template>

<style lang="scss">
  #UserChip {
    grid-column: span 1;
  }

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
    width: 100%;
    padding-top: 50px;

    .avatar-img {
      display: flex;
      justify-content: center;
      align-items: center;
      clip-path: polygon(0 0,100% 0,100% 100%,0 100%);
      transition: .2s ease-in-out;
      pointer-events:none;
    }

    //&:hover .avatar {
      //transform: scale(7);
      //clip-path: polygon(0 0,100% 0,100% 50%,0 50%);
    //}
  }

  .post .author .avatar {
    outline: solid var(--space-s) var(--background);
  }
</style>