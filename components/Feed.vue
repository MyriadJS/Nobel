<script setup lang="ts">
  import { feed } from "@/dummydata/posts"
</script>

<template>
  <div class="feed page">
    <Post
      v-for="post in feed" 
      :key="post.id"
      :post="post"
    />
  </div>
</template>

<style lang="scss">
  div.feed {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    --gap: var(--space-m);
    gap: var(--gap);
    margin-top: var(--gap);
    padding-bottom: var(--space-xl);

    & > * { grid-column: span 2; }
    @media only screen and (max-width: 1250px) {
      & > * { grid-column: span 4; }
    }
  }
</style>