<template>
  <div class="container p-4">
    <h1 class="title is-4 has-text-centered">Hello Vue!</h1>
    <div v-if="maxVotes > 20" class="has-text-centered">
      Wow! The max votes has succeeded 20!!
    </div>
    <div v-else class="has-text-centered">
      Please Vote!
    </div>
    <div v-for="(item, key, index) in sortedItems" class="p-4">
      <VoteItem :item="item" :index="index" />
    </div>
  </div>
</template>

<script setup>
import VoteItem from '@/components/VoteItem.vue';
import voteList from '@/data/votes.js'

import { computed, ref } from 'vue';
voteList.sort((a, b) => b.votes - a.votes)
const voteItems = ref(voteList)
const sortedItems = computed(() => {
  return voteItems.value.sort((a, b) => b.votes - a.votes);
});

const maxVotes = computed(() => {
  return voteItems.value.reduce((max, item) => {
    return Math.max(max, item.votes);
  }, 0);
});

</script>
