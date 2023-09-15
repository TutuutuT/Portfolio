<script setup>

import { ref } from 'vue'

const menuToggle = ref(false)
const imageToggle = ref(false)
const menuChoice = ref(1)
const ImageProjet = ref('./src/img/PromptPilot.jpg')

const ImageTfe = ref('./src/img/PromptPilot.jpg')
const ImageTfa = ref('./src/img/nest.jpg')
const ImageMusic = ref('./src/img/Music.png')
const ImageIolce = ref('./src/img/IMG_2786.jpeg')
const ImageRux = ref('./src/img/rux.jpg')

const MobileMenu = ref(false)

const HoverMenu = () => {
    menuToggle.value = !menuToggle.value
}

</script>

<template>

    <div class="box__menu hidden md:block">

        <div class="menu" :class="{menuToggle: menuToggle}" @mouseleave="HoverMenu">
            <div class="menu__box__item">
                <div class="menu__item"><router-link :to="{ name : 'Contacts'}" @mouseover="menuToggle = true; menuChoice = 1" >Contacts</router-link></div>
                <div class="menu__item menu__item-2"><router-link  :to="{ name : 'Portfolio'}" @mouseover="menuToggle = true;  menuChoice = 2">Portfolio</router-link></div>
                <div class="menu__item menu__item-2"><router-link :to="{ name : 'Parcours'}" @mouseover="menuToggle = true;  menuChoice = 3">Mon parcours</router-link></div>
            </div>
            <div v-if="menuToggle == true" class="menu__item__elements">

                <Transition name="slide-fade">
                    <div class="menu__item__elements__items" v-if="menuChoice == 1">
                        <div class="menu__item__elements__img"></div>
                        <div class="menu__item__elements__txt">
                            <h2>Thunus Bastien</h2>
                            <h3 class="mt-4">Web developer/designer</h3>
                            <ul class="menu__item__elements__list">

                                <li class="menu__item__elements__list__item">
                                    <div>
                                        <a href="#">
                                            <svg width="20" height="20" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                                <path fill="#000000" d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1S717.1 625.5 717.1 512S625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7S645.3 438.6 645.3 512S585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9s47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165c-3.1-64-17.7-120.8-64.5-167.6c-46.9-46.9-103.6-61.4-167.6-64.5c-55.2-3.1-109.9-2.6-165-2.6c-55.2 0-109.9-.5-165 2.6c-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6c46.9 46.9 103.6 61.4 167.6 64.5c55.2 3.1 109.9 2.6 165 2.6c55.2 0 109.9.5 165-2.6c64-3.1 120.8-17.7 167.6-64.5c46.9-46.9 61.4-103.6 64.5-167.6c3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8c-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1c-18.2-7.3-31.8-16.1-45.8-30.2c-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9c7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2c14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"/>
                                            </svg>
                                            Instagram
                                        </a>
                                    </div>
                                </li>

                                <li class="menu__item__elements__list__item">
                                    <a href="#">
                                        <svg width="20" height="20" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="#000000" d="M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9c0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 0 1-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 0 0-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9c0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9c6.5 0 12.8-.5 19.2-1.6c132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9L295.7 611l119.8 120l.9.9l21.6-8a481.29 481.29 0 0 0 285.7-285.8l8-21.6l-120.8-120.7l110.8-110.9l104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z"/>
                                        </svg>
                                        +32471795459
                                    </a>
                                </li>

                                <li class="menu__item__elements__list__item">
                                    <a href="#">
                                        <svg width="20" height="20" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="#000000" d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5l39.3-50.5l42.8 33.3h643.1l42.8-33.3l39.3 50.5l-27.7 21.5zM833.6 232L512 482L190.4 232l-42.8-33.3l-39.3 50.5l27.6 21.5l341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5l-39.3-50.5l-42.7 33.2z"/>
                                        </svg>
                                        bastienthunus@gmail.com
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </Transition>
                <Transition name="slide-fade">
                    <div class="menu__item__elements__items" v-if="menuChoice == 2">
                        <div :class="{imageToggle: imageToggle}" class="menu__item__elements__img-var" :style="`background-image: url('${ImageProjet}')`"></div>
                        <ul class="menu__item__elements__list menu__item__elements__list-var">
                            <li @mouseover="ImageProjet = ImageTfe; imageToggle = true" @mouseleave="imageToggle = false">Tfe</li>
                            <li @mouseover="ImageProjet = ImageTfa; imageToggle = true" @mouseleave="imageToggle = false">Tfa</li>
                            <li @mouseover="ImageProjet = ImageMusic; imageToggle = true" @mouseleave="imageToggle = false">MusicPls</li>
                            <li @mouseover="ImageProjet = ImageRux; imageToggle = true" @mouseleave="imageToggle = false">RUX</li>
                        </ul>
                    </div>
                </Transition>
                <Transition name="slide-fade">
                    <div class="menu__item__elements__items" v-if="menuChoice == 3">
                        <div :class="{imageToggle: imageToggle}" class="menu__item__elements__img-var" :style="`background-image: url('${ImageProjet}')`"></div>
                        <ul class="menu__item__elements__list menu__item__elements__list-var">
                            <li @mouseover="ImageProjet = ImageTfe; imageToggle = true" @mouseleave="imageToggle = false">Tfe</li>
                            <li @mouseover="ImageProjet = ImageTfa; imageToggle = true" @mouseleave="imageToggle = false">Tfa</li>
                            <li @mouseover="ImageProjet = ImageMusic; imageToggle = true" @mouseleave="imageToggle = false">MusicPls</li>
                            <li @mouseover="ImageProjet = ImageRux; imageToggle = true" @mouseleave="imageToggle = false">RUX</li>
                        </ul>
                    </div>
                </Transition>
                
            </div>
        </div>

    </div>
    <div class="md:hidden flex justify-center">
        <div class="menu-mobile flex items-center justify-around top-[90dvh] p-5 z-50 transition-all" :class="{open: MobileMenu}">

            <div v-if="MobileMenu == true" class="flex gap-4 items-center mr-2">
                <router-link :to="{ name : 'Contacts'}">Contacts</router-link>
                <router-link :to="{ name : 'Portfolio'}">Portfolio</router-link>
                <router-link :to="{ name : 'Parcours'}">Parcours</router-link>
            </div>

            <div>
                <svg  v-if="MobileMenu == false" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" @click="MobileMenu = !MobileMenu">
                    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h14M5 12h14M5 7h14"/>
                </svg>

                <svg v-if="MobileMenu == true" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"  @click="MobileMenu = !MobileMenu">
                    <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m18 18l-6-6m0 0L6 6m6 6l6-6m-6 6l-6 6"/>
                </svg>
            </div>
                
        </div>
    </div>

  
</template>

<style scoped lang="scss">

.box__menu{
    height: 60px;
    width: 100%;
    position: fixed;
    z-index: 40;
}

.menu__box__item{
    display: flex;
    width: 100%;
    justify-content: center;
}

.menu{
    overflow: hidden;
    margin: auto;
    width: 500px;
    height: 100%;
    border-radius: 40px;
    backdrop-filter: blur(100px);
    background-color: rgba($color: rgb(255, 255, 255), $alpha: 0.9);
    font-size: 18px;
    box-shadow: rgba($color: black, $alpha: 0.25) 0px 10px 50px 0px;
    color: white;
    transform-origin: 50% 50% 0px;
    transition: all 400ms cubic-bezier(0.69, -0.15, 0.4, 1.15);

    &-mobile{
        position: fixed;
        overflow: hidden;
        margin: auto;
        width: 50px;
        height: 50px;
        border-radius: 40px;
        backdrop-filter: blur(100px);
        background-color: rgba($color: rgb(255, 255, 255), $alpha: 0.9);
        font-size: 15px;
        box-shadow: rgba($color: black, $alpha: 0.25) 0px 10px 50px 0px;
        color: rgb(0, 0, 0);
        transform-origin: 50% 50% 0px;
        transition: all 400ms cubic-bezier(0.69, -0.15, 0.4, 1.15);
    }

    &__item{
        margin-top: 17px;
        & a{
            text-decoration: inherit;
            color: black;
            transition-duration: 400ms;
            border-radius: 40px;
            padding: 6px 30px;
            &:hover{
                background-color: rgba($color: rgb(0, 0, 0), $alpha: 0.15);
            }
        }
        &-2{
            text-align: end;
        }
        &__elements{
            position: relative;
            height: 100%;
            &__items{
              height: 400px;
              width: 700px;
              display: flex;
              margin: 50px 70px;
              position: absolute;
              color: black;
            }
            &__img{
                background-image: url(../img/IMG_2786.jpeg);
                background-position: center;
                background-size: cover;
                height: 88%;
                width: 240px;
                border-radius: 40px;
                &-var{
                    height: 88%;
                    width: 240px;
                    border-radius: 40px;
                    background-size: cover;
                    background-position: center;
                }
            }
            &__txt{
                margin-left: 50px;
                margin-top: 40px;
            }
            &__list{
                list-style: none;
                padding: 0;
                margin-top: 40px;
                &__item{
                    display: flex;
                    align-items: center;
                    margin-top: 5px;
                    
                    & a{
                        color: black;
                        font-family: Poppins;
                        transition: all 200ms;
                        display: flex;
                        gap: 8px;
                        align-items: center;

                        &:hover{
                            opacity: 50%;
                        }
                    }
                }

                &-var{
                    margin-top: 65px;
                    margin-left: 40px;
                    font-size: 35px;
                    font-family: Garute;

                    & li{

                        transition: all 200ms;
                        cursor: pointer;
                        margin-bottom: 10px;
                        height: 40px;
                        &::before{
                            content: "←";
                            transition: all 200ms;
                            opacity: 0;
                            margin-left: -20px;
                        }

                        &:hover{
                        opacity: 60%;
                        transition: all 200ms;
                            &::before{
                                content: "←";
                                opacity: 1;
                                margin-left: 0px;
                                margin-right: 10px;
                            }
                        
                        }
                    }
                }
            }
        }
    }
}

.open{
    width: 300px;
}
.menuToggle{
    background-color: rgba($color: rgb(255, 255, 255), $alpha: 0.9);
    width: 750px;
    height: 500px;
    border-radius: 90px;
    backdrop-filter: blur(100px);
    box-shadow: rgba($color: black, $alpha: 0.75) 0px 50px 100px 0px;
}

.imageToggle{
    animation: imageFade 300ms cubic-bezier(.59,-0.01,.23,1);
}

@keyframes imageFade {
    0%{
        transform: translateX(-200px);
        filter: blur(10px);
    }
    100%{
        transform: translateX(0px);
        filter: blur(0px);
    }
}


.slide-fade-enter-active {
  transition: all 0.3s cubic-bezier(.59,-0.01,.23,1);
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(.59,-0.01,.23,1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(500px);
  filter: blur(40px);
}

</style>
