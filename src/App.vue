<template>
  <h1>Hello Vue!</h1>
  <h2>Counter: {{ counter }}</h2>
  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
  <button @click="reset">Reset</button>

  <h2>Message: {{ counterMessage }}</h2>
</template>

<script setup>
import { ref, computed } from 'vue';

const counter = ref(0);
const increment = () => {
  counter.value++;
};
const decrement = () => {
  counter.value--;
};
const reset = () => {
  counter.value = 0;
};

const counterMessage = computed(() => {
  return 'The counter is ' + counter.value;
});

</script>
