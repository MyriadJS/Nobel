<template>
  <div class="page border">
    <h1>Title</h1>
    <h2>Title</h2>
    <h3>Title</h3>
    <div class="content">
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
  padding: var(--space);
  margin-top: var(--space-l);
}

.content {
  max-width: 100%;
  padding-top: var(--space-s);
  display: grid;
  gap: var(--space-s);
}
</style>