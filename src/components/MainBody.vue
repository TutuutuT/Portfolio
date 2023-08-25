<script setup>

import { ref, onMounted } from 'vue'
import { gsap } from 'gsap';
import { Timeline} from 'gsap/gsap-core';
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

// onMounted(() => {
//   gsap.fromTo(".title__span-anim", { y: 100, opacity:0 }, { y: 0, opacity:1, duration: 1, stagger: 0.2, delay: 0.2, ease: "power3.out"});
//   gsap.timeline({ease: "power3.out", repeat: 1})

//     .to(".title__span-anim-change", {y:200, duration:.5, delay:3})
//     .to(".title__span-anim-change", { text:"designer", duration:0})
//     .to(".title__span-anim-change", {y:0, duration:1})
//     .to(".title__span-anim-change", {y:200, duration:.5, delay:3})
//     .to(".title__span-anim-change", { text:"web developer", duration:0})
//     .to(".title__span-anim-change", {y:0, duration:1})

// });


onMounted(() => {
  gsap.fromTo(".title__span-anim", { y: -100, opacity:0 }, { y: 0, opacity:1,stagger:0.2, duration: 1.5, delay: 0.2, ease: "power4.out"});

});

</script>


<template>
    <div class="box__title">
        <h1><span class="title__span"><span class="title__span-anim title__span-anim-change">Thunus</span></span>
        <span class="title__span"><span class="title__span-anim">Bastien</span></span></h1>
    </div>

</template>


<style scoped lang="scss">

.box__title{
    font-size: 100px;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: .9;
    width: 100%;
    margin: 0 auto;
    padding: 0 100px;
    height: 80svh;
}

.title{
    &__span{
        display: block;
        overflow: hidden;
        &-anim{
            display: block;
        }
    }
}

@media only screen and (max-width: 800px) {
   
}

</style>