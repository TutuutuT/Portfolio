<script setup>
import { ref, onMounted } from 'vue';
import { gsap, Power4 } from 'gsap';

const magnet = ref(null);
const strength = 20;

const moveMagnet = (event) => {
  const magnetButton = magnet.value;
  const bounding = magnetButton.getBoundingClientRect();

  gsap.to(magnetButton, 1, {
    x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * strength,
    y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * strength,
    ease: Power4.easeOut
  });
};

const resetMagnet = (event) => {
  gsap.to(event.currentTarget, 1, { x: 0, y: 0, ease: Power4.easeOut });
};

onMounted(() => {
  magnet.value.addEventListener('mousemove', moveMagnet);
  magnet.value.addEventListener('mouseout', resetMagnet);
});
</script>

<template>
  <div>
    <div class="magnetic" ref="magnet" @mousemove="moveMagnet" @mouseout="resetMagnet">
      <div class="btn btn-outline-primary magnet-button" name="button">
        Click Me
      </div>
    </div>
  </div>
</template>

<style scoped>
.magnetic {
  display: inline-block;
  border-radius: 50%;
  /*border: 1px solid #000; //use this for debugging*/
}

.btn {
  cursor: pointer;
  border-radius:30px;
  background:#000000;
  color:#ffffff;
  border:none;
  padding: 15px 50px;
}
.btn:hover {
  background:#17171c;
  color:#ffffff;
}
#magnet-button {
  display: inline-block;
  radius:50px;
}

.my-button {
  background-color: #FFF;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 2px solid #000;
  cursor: pointer;
}

.my-button:hover {
  color: #FFF;
  background-color: #000;
  transition: 0.5s background-color, 0.5s;
}

</style>
