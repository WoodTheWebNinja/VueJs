<script setup>
import CrudProducts from '../components/CrudProducts.vue'
import HelloWorld from '../components/HelloWorld.vue'
</script>

<template>

  <header class="header">

    <div class="wrapper">
      <HelloWorld msg="Table Bord " />
    </div>
  </header>

  <RouterView />
  <main class="main">

    <CrudProducts />

  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

@media (min-width: 1024px) {
  .main {
    min-height: 10vh;
    display: flex;
    align-items: center;
  }

}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    margin-top: 2rem;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    padding: 1rem;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
