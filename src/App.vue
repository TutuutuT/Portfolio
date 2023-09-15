<script setup>
import HoverMenu from './components/HoverMenu.vue'
import Footer from './components/Footer.vue';
</script>
<script>
export default {
    methods: {
      redirect() {
        this.$router.push({ name: 'Home' })
      },
      homePage() {
        if(this.$route.path == "/" || this.$route.path == "/home" ) {
          return true
        } else {
          return false
        }
      }
    }
  }
</script>


<template>
  
   <div class="items-center fixed z-50 ml-5 mt-5 w-20 flex sm:ml-20" v-if="!homePage()">
      <div class="inline-block cursor-pointer" @click="redirect">
        <div class="z-40 before:block before:absolute before:-inset-1 before:bg-black before:w-10 before:rounded-full before:blur-lg"></div>
        <svg class="w-8 group z-50 relative" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="group-hover:fill-white/10 fill-white transition-all" d="M22 17V11.845C22 10.433 22 9.72701 21.8204 9.07517C21.6613 8.49771 21.3998 7.95353 21.0483 7.46857C20.6514 6.92115 20.1001 6.48011 18.9976 5.59805L16.9976 3.99805C15.214 2.57118 14.3222 1.85774 13.3332 1.58413C12.4608 1.34279 11.5392 1.34279 10.6668 1.58413C9.67783 1.85774 8.78603 2.57118 7.00244 3.99805L5.00244 5.59805C3.89986 6.48011 3.34857 6.92115 2.95174 7.46857C2.6002 7.95353 2.33865 8.49771 2.17957 9.07517C2 9.72701 2 10.433 2 11.845V17C2 19.7614 4.23858 22 7 22C8.10457 22 9 21.1046 9 20V15.9999C9 14.3431 10.3431 12.9999 12 12.9999C13.6569 12.9999 15 14.3431 15 15.9999V20C15 21.1046 15.8954 22 17 22C19.7614 22 22 19.7614 22 17Z"/>
          <path class="stroke-white transition-all" d="M22 17V11.845C22 10.433 22 9.72701 21.8204 9.07517C21.6613 8.49771 21.3998 7.95353 21.0483 7.46857C20.6514 6.92115 20.1001 6.48011 18.9976 5.59805L16.9976 3.99805C15.214 2.57118 14.3222 1.85774 13.3332 1.58413C12.4608 1.34279 11.5392 1.34279 10.6668 1.58413C9.67783 1.85774 8.78603 2.57118 7.00244 3.99805L5.00244 5.59805C3.89986 6.48011 3.34857 6.92115 2.95174 7.46857C2.6002 7.95353 2.33865 8.49771 2.17957 9.07517C2 9.72701 2 10.433 2 11.845V17C2 19.7614 4.23858 22 7 22C8.10457 22 9 21.1046 9 20V15.9999C9 14.3431 10.3431 12.9999 12 12.9999C13.6569 12.9999 15 14.3431 15 15.9999V20C15 21.1046 15.8954 22 17 22C19.7614 22 22 19.7614 22 17Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>

  <HoverMenu></HoverMenu>
  <section class="mt-[2rem] bg-[#111111] min-h-screen">
    <router-view/>
  </section>
  <Footer/>
</template>