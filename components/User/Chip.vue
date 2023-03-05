<script setup lang="ts">
import { Author } from '@/types/Post'
interface Props {author: Author}
withDefaults(defineProps<Props>(),{})
const avatarSize = 30
</script>

<template>
  <div id="UserChip" class="panel border">
    <UserAvatar :src="author.avatar" :size="avatarSize"/>
    <p class="name"><span>{{ author.name }}</span></p>
    <p class="caption">{{ author.handle }}</p>
  </div>
</template>

<style lang="scss" scoped>
#UserChip {
  display: grid;
  grid-template-columns: calc(v-bind(avatarSize) * 1px) 1fr;
  align-items: center;
  column-gap: var(--space-s);
  padding: var(--space-s);
}

#UserChip .avatar {
  grid-column: 1;
  grid-row: 1 / span 2;
}

#UserChip p {
  line-height: 1rem;
}

#UserChip .caption {
  grid-column: 2;
}
</style>