<script setup lang="ts">
withDefaults(defineProps<{progress: number}>(),{
  progress: 0,
})
</script>

<template>
  <div class="loadingbar">

  </div>
</template>

<style lang="scss" scoped>
.loadingbar  {
  width: calc(40px + v-bind(progress) * 2px);
  height: 10px;
  background: var(--accent);
  transition: .1s;
}


.loader.loading .loadingbar {
  background-color: red;
}

.loader.loading.enter .loadingbar {
  height: 2px;
}

.loader.loading.leave .loadingbar {
  height: 20px;
}
</style>