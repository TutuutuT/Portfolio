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

const HoverMenu = () => {
    menuToggle.value = !menuToggle.value
}

</script>

<template>

    <div class="box__menu">

        <div class="menu" :class="{menuToggle: menuToggle}" @mouseleave="HoverMenu">
            <div class="menu__box__item">
                <div class="menu__item"><router-link :to="{ name : 'Contacts'}" href="#" @mouseover="menuToggle = true; menuChoice = 1" >Contacts</router-link></div>
                <div class="menu__item menu__item-2"><router-link  :to="{ name : 'Portfolio'}" @mouseover="menuToggle = true;  menuChoice = 2" href="#">Portfolio</router-link></div>
                <div class="menu__item menu__item-2"><router-link :to="{ name : 'Parcours'}" @mouseover="menuToggle = true;  menuChoice = 3" href="#">Mon parcours</router-link></div>
            </div>
            <div v-if="menuToggle == true" class="menu__item__elements">

                <Transition name="slide-fade">
                    <div class="menu__item__elements__items" v-if="menuChoice == 1">
                        <div class="menu__item__elements__img"></div>
                        <div class="menu__item__elements__txt">
                            <h2>Thunus Bastien</h2>
                            <h3>Web dev/designer</h3>
                            <ul class="menu__item__elements__list">

                                <li class="menu__item__elements__list__item">
                                    <div class="menu__item__elements__list__item__img menu__item__elements__list__item__img-insta"></div>
                                    <a href="#">Instagram</a>
                                </li>

                                <li class="menu__item__elements__list__item">
                                    <div class="menu__item__elements__list__item__img menu__item__elements__list__item__img-tel"></div>
                                    <a href="#">+32471795459</a>
                                </li>

                                <li class="menu__item__elements__list__item">
                                    <div class="menu__item__elements__list__item__img menu__item__elements__list__item__img-mail"></div>
                                    <a href="#">bastienthunus@gmail.com</a>
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
                            <li  @mouseover="ImageProjet = ImageMusic; imageToggle = true" @mouseleave="imageToggle = false">MusicPls</li>
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
                            <li  @mouseover="ImageProjet = ImageMusic; imageToggle = true" @mouseleave="imageToggle = false">MusicPls</li>
                            <li @mouseover="ImageProjet = ImageRux; imageToggle = true" @mouseleave="imageToggle = false">RUX</li>
                        </ul>
                    </div>
                </Transition>
                
            </div>
        </div>

    </div>

  
</template>

<style scoped lang="scss">

.box__menu{
    height: 60px;
    width: 100%;
    position: fixed;
    z-index: 99;
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
    backdrop-filter: blur(10px);
    background-color: rgba($color: black, $alpha: 0.6);
    font-size: 18px;
    box-shadow: rgba($color: black, $alpha: 0.25) 0px 10px 50px 0px;
    color: white;
    transform-origin: 50% 50% 0px;
    transition: all 400ms cubic-bezier(0.69, -0.15, 0.4, 1.15);
    &__item{
        margin-top: 17px;
        & a{
            text-decoration: inherit;
            color: white;
            transition-duration: 400ms;
            border-radius: 40px;
            padding: 6px 30px;
            &:hover{
                background-color: rgba($color: white, $alpha: 0.15);
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
                    
                    & a{
                        color: white;
                        font-family: Poppins;
                        transition: all 200ms;

                        &:hover{
                            color: rgb(129, 129, 129);
                        }
                    }

                    &__img{

                        width: 20px;
                        height: 20px;
                        margin-right: 10px;
                        &-insta{
                            background-image: url(../img/1161953_instagram_icon.png);
                            background-position: center;
                            background-size: cover;
                        }
                        &-tel{
                            background-image: url(../img/phone.svg);
                            background-position: center;
                            background-size: cover;
                        }
                        &-mail{
                            background-image: url(../img/mail-01.svg);
                            background-position: center;
                            background-size: cover;
                        }
                    }
                }

                &-var{
                    margin-top: 65px;
                    margin-left: 40px;
                    font-size: 35px;
                    font-family: GaruteOblique-B;

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
.menuToggle{
    background-color: rgba($color: black, $alpha: 1);
    width: 750px;
    height: 500px;
    border-radius: 90px;
    backdrop-filter: blur(1px);
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
