<script setup>

import { ref } from 'vue'

const menuToggle = ref(true)
const menuChoice = ref(true)

const HoverMenu = () => {
    menuToggle.value = !menuToggle.value
}

</script>

<template>

    <div class="box__menu">

        <div class="menu" :class="{menuToggle: menuToggle}" @mouseleave="HoverMenu">
            <div class="menu__box__item">
                <div class="menu__item"><a href="#" @mouseover="menuToggle = true; menuChoice = true" >Contact</a></div>
                <div class="menu__item menu__item-2"><a @mouseover="menuToggle = true;  menuChoice = false" href="#">Autres projets</a></div>
            </div>
            <div v-if="menuToggle == true" class="menu__item__elements">

                <Transition name="slide-fade">
                    <div class="menu__item__elements__items" v-if="menuChoice == true">
                        <div class="menu__item__elements__img"></div>
                        <div class="menu__item__elements__txt">
                            <h2>Thunus Bastien</h2>
                            <h3>Web dev/designer</h3>
                            <ul class="menu__item__elements__list">
                                <li class="menu__item__elements__list__item"><a href="#">insta</a></li>
                                <li class="menu__item__elements__list__item"><a href="#">+32471795459</a></li>
                                <li class="menu__item__elements__list__item"><a href="#">bastienthunus@gmail.com</a></li>
                            </ul>
                        </div>
                    </div>
                </Transition>
                <Transition name="slide-fade">
                    <div class="menu__item__elements__items" v-if="menuChoice == false">
                        <div class="menu__item__elements__img"></div>
                        <p>Thunus Bastien</p>
                    </div>
                </Transition>
                
            </div>
        </div>

    </div>

  
</template>

<style scoped lang="scss">

.box__menu{
    height: 60px;
}

.menu__box__item{
    display: flex;
    width: 100%;
    justify-content: center;
}

.menu{
    overflow: hidden;
    margin: auto;
    width: 400px;
    height: 100%;
    border-radius: 40px;
    backdrop-filter: blur(10px);
    background-color: rgba($color: black, $alpha: 0.5);
    font-size: 18px;
    box-shadow: rgba($color: black, $alpha: 0.25) 0px 10px 50px 0px;
    color: white;
    transform-origin: 50% 50% 0px;
    transition: all 350ms cubic-bezier(0,.90,1,1); /* ease (default) */
    &__item{
        margin-top: 17px;
        min-width: 150px;
        & a{
            text-decoration: inherit;
            color: white;
            transition-duration: 400ms;
            border-radius: 40px;
            padding: 6px 15px;
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
              height: 100%;
              width: 700px;
              display: flex;
              margin: 50px 70px;
              position: absolute;
            }
            &__img{
                background-image: url(../img/IMG_2786.jpeg);
                background-position: center;
                background-size: cover;
                height: 70%;
                width: 240px;
                border-radius: 40px;
            }
            &__txt{
                margin-left: 50px;
            }
            &__list{
                list-style: none;
                padding: 0;
                &__item{
                    
                    & a{
                        color: white;
                        font-family: Poppins-l;
                        transition: all 200ms;

                        &:hover{
                            color: rgb(129, 129, 129);
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


.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(.59,-0.01,.23,1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(400px);
  filter: blur(40px);
}

</style>
