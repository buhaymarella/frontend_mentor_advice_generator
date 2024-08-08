
<template>
  <div className="p-5 max-w-sm mx-auto rounded-md shadow-lg
    sm-items-center my-[10rem] text-center bg-Dark-Grayish-Blue">
    <p className="font-Monrope text-Neon-Green text-xs font-extrabold">ADVICE #{{ data?.slip?.id }}</p>
    <p className="my-5 text-Light-Cyan font-extrabold text-3xl">"{{ data?.slip?.advice }}"</p>
    <img src="./components/images/pattern-divider-desktop.svg" alt="divider" className="my-0">
    <button @click="fetchData" className="
    outline-white hover:shadow-glow-neon-green transition-shadow duration-300 ease-in-out
    bg-Neon-Green p-3 rounded-full relative top-9"><img className="w-4" src="./components/images/icon-dice.svg" alt="dice icon"></button>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const data = ref(null);

const fetchData = async () => {
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json();
    data.value = result;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
};
</script>

