<script setup>
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue';


</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Sidebar />
    <Header />
    <main class="flex-1">
      <RouterView/>
    </main>
    <Footer />
  </div>


</template>

<style scoped></style>
