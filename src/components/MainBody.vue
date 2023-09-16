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
  gsap.fromTo(".img", { y: -100, opacity:0 }, { y: 0, opacity:1,stagger:0.2, duration: 1.5, delay: 1, ease: "power4.out"});

});

</script>

<template>

    <div class="box__title flex justify-start pl-60">
        <h1>
            <div class="title__span__intro">Hello! Je m'appelle</div>
            <span class="title__span">
                <span class="title__span-anim title__span-anim-change">Thunus</span>
            </span>
            <span class="title__span">
                <span class="title__span-anim">Bastien</span>
            </span>
        </h1>
    </div>

    <div class="w-full flex justify-between mt-24 px-60 img">
        <div class="mt-36">
            <router-link to="Portfolio#music" class="group">
                <div class="bg-white group-hover:bg-neutral-500  transition-all rounded-full px-5 text-black text-[50px] uppercase relative z-10">Portfolio</div>
                <div class=" bg-[#111111] border-2 border-white group-hover:border-neutral-500  transition-all w-[600px] -mt-9 h-64 absolute rounded-xl"></div>
            </router-link>
        </div>
        <div class="gap-20 flex font-['Cascadia']">
            <ul>
                <li>Web developer</li>
                <li>Designer</li>
                <li>Photographe amateur</li>
            </ul>
            <div class="w-96 overflow-hidden rounded-xl">
                <img src="../img/Thai2.jpg" class="rounded-xl img">
                <figcaption class="w-full text-xs text-end opacity-60 mt-1">Thaïlande · 2023</figcaption>
            </div>
        </div>
    </div>

    <div class="w-full flex justify-start mt-24 pl-60">
        <div class="gap-10 flex flex-col">
            <p class="font-['Cascadia']">
                À propos de moi
            </p>
            <p class="text-xl">
                Je suis un <span class="text-ehance">web developer</span> passioné
            </p>
        </div>
    </div>

</template>


<style scoped lang="scss">

.box__title{
    font-size: 150px;
    text-transform: uppercase;
    flex-direction: column;
    line-height: .9;
    padding-top: 150px;
}

.title{
    &__span{
        display: block;
        overflow: hidden;
        &-anim{
            display: block;
        }
        &__intro{
            font-size: 18px;
            text-transform: none;
            font-family: Cascadia;
            margin-bottom: 40px;
        }
    }
}

@media only screen and (max-width: 800px) {
   
}

</style>