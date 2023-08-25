<script setup>
import HoverMenu from './components/HoverMenu.vue'
</script>


<template>
  <HoverMenu></HoverMenu>
  <section class="section--box">
    <router-view/>
  </section>
</template>

<style scoped>
 .section--box{
  margin-top: 3rem;
 }
 
</style>
