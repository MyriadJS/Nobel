<script setup lang="ts">
import { Author } from '@/types/Post'
interface Props {author: Author}
withDefaults(defineProps<Props>(),{})
</script>

<template>
  <div class="chip border">
    <Avatar :src="author.avatar" />
    <p class="name"><span>{{ author.name }}</span></p>
    <p class="caption">{{ author.handle }}</p>
  </div>
</template>

<style lang="scss" scoped>
.chip {
  display: grid;
  grid-template-columns: 30px 1fr;
  align-items: center;
  column-gap: var(--space-s);
  padding: var(--space-s);
}

.chip p {
  line-height: 1rem;
}
</style>