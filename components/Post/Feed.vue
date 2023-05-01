<script setup lang="ts">
  import { feed } from "@/dummydata/posts"
  const duration = Math.floor(Math.random() * 2000) + 2000
  const { value } = useSwitch(duration, true)
</script>

<template>
  <section class="feed page">
    <Divider
      foreground="var(--background-20)"
      background="var(--background)"
    >
      <p>{{ feed.length }}</p>
    </Divider>
    <PostWrapper
      v-for="post in feed"
      :key="post.id"
      :post="post"
      :loading="value"
      :duration="duration"
    >
      <Post
        :post="post"
        :loading="value"
      />
    </PostWrapper>
  </section >
</template>

<style lang="scss">
  section.feed {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    --gap: var(--space-m);
    gap: var(--gap);
    margin-top: var(--gap);
    padding-bottom: var(--space-xl);
  }

  section.feed {
    & > * { grid-column: span 2; }
    @media only screen and (max-width: 1250px) {
      & > * { grid-column: span 4; }
    }
  }

  section.feed > *:nth-of-type(4) {
    grid-column: span 4;
  }
</style>