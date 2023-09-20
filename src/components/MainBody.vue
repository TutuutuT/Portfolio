<script setup>

import { ref, onMounted } from 'vue'
import { gsap } from 'gsap';
import { Timeline} from 'gsap/gsap-core';
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);


onMounted(() => {
  gsap.fromTo(".title__span-anim", { y: -100, opacity:0 }, { y: 0, opacity:1,stagger:0.2, duration: 1.5, delay: 0.2, ease: "power4.out"});
  gsap.fromTo(".img", { y: -100, opacity:0 }, { y: 0, opacity:1,stagger:0.2, duration: 1.5, delay: 1, ease: "power4.out"});

});

</script>

<template>

    <div class="box__title pt-14 md:pt-[150px] flex justify-start lg:pl-60 lg:text-[150px] text-[80px] max-lg:text-center">
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

    <div class="w-full flex xl:flex-row flex-col justify-between mt-24 px-10 sm:px-20 lg:px-60 img">

        <div class="mt-12 lg:mt-36 xl:h-fit h-96">
            <router-link to="Portfolio" class="group">
                <div class="bg-white group-hover:bg-neutral-500 w-fit transition-all rounded-full px-5 text-black text-[50px] uppercase relative z-10">Portfolio</div>
                <div class="link-port border-2 border-white group-hover:border-neutral-500 transition-all w-[320px] sm:w-[450px] md:w-[650px] lg:w-[650px] xl:w-[450px] 2xl:w-[600px] -mt-9 h-64 absolute rounded-xl"></div>
            </router-link>
        </div>

        <div class="gap-6 lg:gap-20 flex lg:flex-row flex-col font-['Cascadia']">
            <ul>
                <li>Web developer</li>
                <li>Designer</li>
                <li>Photographe amateur</li>
            </ul>
            <div class="overflow-hidden rounded-xl">
                <img src="../img/Thai2.webp" alt="Picture from Thaïland" class="rounded-xl max-w-sm">
                <figcaption class="w-full text-xs xl:text-end opacity-60 mt-1">Thaïlande · 2023</figcaption>
            </div>
        </div>
        
    </div>

    <div class="w-full flex justify-start mt-24 pl-10 sm:pl-20 lg:pl-60">
        <div class="gap-6 lg:gap-10 flex flex-col">
            <p class="font-['Cascadia']">
                À propos de moi
            </p>
            <p class="lg:text-xl">
                Je suis un <span class="text-ehance">web developer</span> passioné
            </p>
        </div>
    </div>

</template>


<style scoped lang="scss">

.box__title{
    text-transform: uppercase;
    flex-direction: column;
    line-height: .9;
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
            margin-bottom: 30px;
        }
    }
}

.link-port{
    background-image: url(../img/port-tfe.webp);
    background-size: cover;
}

</style>