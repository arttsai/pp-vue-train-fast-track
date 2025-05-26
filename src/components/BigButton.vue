<template>
    <button class="button is-large is-fullwidth" @click="strike">
        <slot></slot>
    </button>
</template>

<script setup>
import { useTapScoreStore } from '@/stores/tapScore'

const props = defineProps({
    id: {
        type: Number,
        required: true
    }
})

const tapScoreStore = useTapScoreStore()
const strike = () => {
    tapScoreStore.incrementScore(props.id)
}

</script>