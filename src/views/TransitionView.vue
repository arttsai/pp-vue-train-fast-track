<template>
    <div class="container is-max-desktop p-4">
        <h1 class="title is-4 has-text-centered">轉場效果</h1>
        <div class="content">
            <div>This view demonstrates the use of transitions in Vue.js.</div>
            <Transition name="fade">
                <div v-if="show" class="box">
                    <p>Transition</p>
                </div>
            </Transition>
            <button class="button is-primary" @click="show = !show">Toggle</button>
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue';
const show = ref(true);

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>