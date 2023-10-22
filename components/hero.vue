
<template>
  <div class="hero page">
    <p class="hero-text">I'm Samuel <UIcon name="i-heroicons-hand-raised" style="color: var(--success)" class="icon" /> 
      A designer and engineer building UIs and design systems.
      <span class="subtle">The web should be a beautiful place to spend recreational time <UIcon name="i-heroicons-cursor-arrow-rays" style="color: var(--accent)" class="icon"  /> 
      And a functional tool <UIcon name="i-heroicons-eye" style="color: var(--accent)" class="icon"  /> I'm here to make that true </span></p>
  </div>
</template>

<style scoped lang="scss">
.hero {
  display: flex;
  flex-direction: column;
  gap: var(--space-m);
  justify-content: center;
  align-items: center;
  height: 100vh;
}

img {
  border-radius: var(--radius);
}

.hero h1 {
  letter-spacing: 0.05em;
}

.hero-text {
  font-size: 1.2rem;
  line-height: 1.5;
  font-weight: 900;
  color: var(--foreground);
  font-variation-settings: var(--font-medium);
  .icon {
    transform: translateY(2px);
  }
  .subtle {
    font-variation-settings: var(--font-regular);
    color: var(--base-80);
  }
}
</style>