<script setup>
import HoverMenu from './components/HoverMenu.vue'
import Footer from './components/Footer.vue';
</script>


<template>
  <HoverMenu></HoverMenu>
  <section class="mt-[2rem] bg-[#111111] min-h-screen">
    <router-view/>
  </section>
  <Footer/>
</template>

<style scoped>
 
</style>
