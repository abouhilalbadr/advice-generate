<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Divider from './Divider.vue'
import Dice from './Dice.vue';

const advice = ref('')

const getRandomAdvice = async () => {
  try {
    const { data: getAdvice } = await axios.get(import.meta.env.VITE_ADVICE_APP)
    advice.value = getAdvice.slip
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  getRandomAdvice()
})

</script>

<template>
  <div class="w-11/12 md:w-2/3 lg:w-1/2 mx-auto relative bg-neutral-darkGrayBlue px-4 py-10 rounded-xl text-center flex flex-col items-center justify-center">
    <span class="uppercase text-primary-green text-sm">ADVICE # {{ advice.id }}</span>
    <div class="w-full lg:w-5/6 mx-auto">
      <h1 class="text-primary-cyan text-3xl font-bold py-4 leading-normal">
        "{{ advice.advice }}"
      </h1>
    </div>
    <Divider />
    <button
      class="absolute -bottom-8 bg-primary-green hover:shadow-glow transition-all rounded-full w-16 h-16 flex justify-center items-center"
      @click="getRandomAdvice"
    >
      <Dice />
    </button>
  </div>
</template>