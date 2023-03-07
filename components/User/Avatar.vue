<script setup lang="ts">
interface Props {src: string, size?: number, resolution?: number, loading?: boolean}
withDefaults(defineProps<Props>(),{
  size: 30,
  loading: false,
})
</script>

<template>
  <div class="avatar">
    <div v-if="loading">
      <SpinnerSinewave
        :steps="3" 
        :wobble="true"
      />
    </div>
    <div class="avatar-img">
      <nuxt-img
        provider="cloudinary"
        :src="src"
        :width="resolution ? resolution : size"
        alt="avatar"
        v-if="true"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.spinner {
  position: absolute;
  z-index: 10;
}

.avatar-img {
  position: relative;
  width: calc(v-bind(size) * 1px);

  aspect-ratio: 1/1;
  border-radius: 50%;
  overflow: hidden;
  grid-row: span 2;
  background-color: var(--background);

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    height: 100%;
    background: var(--accent);
    opacity: 0.5;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.2;
  }
}
</style>