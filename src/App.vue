<template>
  <div class="container p-4">
    <h1 class="title is-4 has-text-centered">Hello Vue!</h1>
    <Counter />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Counter from './components/Counter.vue';

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
