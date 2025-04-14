<template>
  <div class="container p-4">
    <h1 class="title is-4 has-text-centered">Hello Vue!</h1>
    <VoteItem v-bind="item" />
  </div>
</template>

<script setup>
import VoteItem from './components/VoteItem.vue';
import { ref } from 'vue';
const item = ref({
  imageUrl: '/399-100x100.jpg',
  name: 'John',
  description: 'fdsafdfas',
  votes: 25
})
</script>
