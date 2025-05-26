<template>
    <h1 class="title is-3 has-text-centered">Tap 點看看</h1>
    <h2 class="subtitle is-4 has-text-centered p-4">Total score: {{ totalScore }}</h2>
    <div class="container level-right p-4">
        <div class="button is-primary" @click="reset">Reset</div>
    </div>

    <div class="columns container">
        <div class="column" v-for="(button, index) in buttons">
            <h2 class="subtitle is-4 has-text-centered">
                {{ `Column ${index + 1}: ` }} {{ scores[index] }}
            </h2>
            <BigButton class="button is-large is-fullwidth" :id="button.id">
                {{ button.text }}
                <span class="p-2">( {{ lastTapId }} )</span>
            </BigButton>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import BigButton from '@/components/BigButton.vue'
import { useTapScoreStore } from '@/stores/tapScore.js'

const buttons = [
    { id: 0, text: 'First column' },
    { id: 1, text: 'Second column' },
    { id: 2, text: 'Third column' },
    { id: 3, text: 'Fourth column' },
]

const tapScoreStore = useTapScoreStore()
const scores = computed(() => tapScoreStore.scores)
const totalScore = computed(() => tapScoreStore.totalScore)
const lastTapId = computed(() => tapScoreStore.lastTapId)

const reset = () => {
    tapScoreStore.resetScores()
}

</script>
