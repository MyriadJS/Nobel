<template>
  <div class="page panel">
    <h1>Title</h1>
    <h2>Title</h2>
    <h3>Title</h3>
    <div class="content post">
      <p>Nuxt layers are a powerful feature that you can use to share and
        reuse <span>partial</span> Nuxt applications within a monorepo, or from a git repository
        or npm package. The layers structure is almost identical to a standard Nuxt 
        application, which makes them easy to author and maintain.</p>
      <p class="slugline"> Nuxt applications within a monorepo, or from a git repository
        or npm package</p>
      <p>Nuxt layers are a powerful feature that you can use to share and
        reuse Nuxt applications within a monorepo, or from a git repository
        or npm package. The layers structure is almost identical to a standard Nuxt 
        application, which makes them easy to author and maintain.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  margin-top: var(--space-l);
}

.content {
  padding-top: var(--space);
  padding-bottom: var(--space);
  display: grid;
  gap: var(--space);
}
</style>