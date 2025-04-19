<template>
  <div class="container p-4">
    <h1 class="title is-4 has-text-centered">Hello Vue!</h1>
    <div v-for="item in sortedItems" class="p-4">
      <VoteItem :item="item" />
    </div>
  </div>
</template>

<script setup>
import VoteItem from './components/VoteItem.vue';
import { computed, ref } from 'vue';
import voteList from './data/votes.js'
voteList.sort((a, b) => b.votes - a.votes)
const voteItems = ref(voteList)
const sortedItems = computed(() => {
  return voteItems.value.sort((a, b) => b.votes - a.votes);
});

</script>
