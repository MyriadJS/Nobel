<script setup lang="ts">
  import { feed } from "@/dummydata/posts"
  const duration = Math.floor(Math.random() * 2000) + 2000
  const { value } = useSwitch(duration, true)
</script>

<template>
  <div class="feed page">
    <PostWrapper
      v-for="post in feed" 
      :key="post.id"
      :post="post"
      :loading="value"
      :duration="duration"
    >
      <PostRelationship
        :post="post"
        :loading="value"
      />
    </PostWrapper>
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
  }

  div.feed {
    & > * { grid-column: span 2; }
    @media only screen and (max-width: 1250px) {
      & > * { grid-column: span 4; }
    }
  }

  div.feed > *:nth-of-type(3) {
    grid-column: span 4;
  }
</style>