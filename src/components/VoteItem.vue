<template>
    <div class="card columns" :class="{ 'has-background-info': indexZero }">
        <div class=" is-one-third image is-64x64 m-4">
            <img :src="item.imageUrl" alt="Placeholder image">
        </div>
        <div class="card-content column">
            <div class="media">
                <div class="media-content m-4">
                    <span class="title is-4">{{ item.name }}</span>
                    <p>
                        {{ item.description }}
                    </p>
                </div>
                <div class="media-right">
                    ^ <span class="tag is-info mr-4">{{ item.votes }}</span>
                    <button class="button is-small" @click="voteUp">
                        <i class="fas fa-thumbs-up"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    item: {
        type: Object,
        required: true
    },
    index: {
        type: Number,
        required: true
    }
})

const voteUp = () => {
    props.item.votes++
}

const indexZero = computed(() => {
    return props.index === 0
})

console.log(props)
</script>
