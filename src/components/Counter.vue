<template>
  <div>
    <h2>Counter: {{ counter }}</h2>
    <div class="buttons">
      <button class="button is-primary" @click="increment">Increment</button>
      <button class="button is-info" @click="decrement">Decrement</button>
      <button class="button is-warning" @click="reset">Reset</button>
    </div>

    <h2>Message: {{ counterMessage }}</h2>

    <div class="box m-4">
      <div class="content mt-4">
        <h1>hello</h1>
        <h2>header 2</h2>
        <p>
          This is a simple counter application built with Vue 3. It demonstrates the use of reactive properties and
          computed properties.
        </p>
        <p>
          You can increment, decrement, or reset the counter using the buttons above.
        </p>
      </div>
    </div>

    <div class="buttons">
      <button class="button">
        <span class="icon">
          <i class="fab fa-github"></i>
        </span>
        <span>GitHub</span>
      </button>
      <button class="button is-success">
        <span class="icon is-small">
          <i class="fas fa-check"></i>
        </span>
        <span>Save</span>
      </button>
    </div>
  </div>
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
