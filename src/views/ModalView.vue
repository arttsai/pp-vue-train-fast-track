<template>
    <div>
        <div class="container is-max-desktop">
            <h1 class="title is-4 has-text-centered">Modal Demo (對話窗)</h1>
            <button class="button is-primary" @click="showModal = true">Launch Card Modal</button>
            <CardModal v-model="showModal"></CardModal>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import CardModal from '@/components/CardModal.vue';

const showModal = ref(false);

// 程式還沒有寫完，不能執行 

</script>