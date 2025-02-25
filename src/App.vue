<script setup></script>

<template>
  <header>
    <div class="wrapper">
    </div>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
:root {
  --section-gap: 2rem;
  --header-height: 60px;
  --logo-width: 150px;
}

header {
  line-height: 1.5;
  height: var(--header-height);
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
@media (min-width: 1024px) {
  header {
    display: flex;
    align-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>