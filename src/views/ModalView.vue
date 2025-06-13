<template>
    <div>
        <div class="container is-max-desktop">
            <h1 class="title is-4 has-text-centered">Modal Demo (對話窗)</h1>
            <button class="button is-primary" @click="showDialog">Launch Card Modal</button>
            <CardModal v-model="showModal">
                <template #header>
                    請提供基本資料
                </template>
                <template #footer>
                    <div class="buttons ml-auto">
                        <button class="button is-primary" @click="save">存檔</button>
                        <button class="button is-link" @click="cancel">放棄</button>
                    </div>
                </template>

                <div class="field">
                    <label class="label">姓名</label>
                    <div class="control">
                        <input id="name" v-model="inquery.name" class="input" type="text" placeholder="Text input">
                    </div>
                    <span class="help is-danger" v-if="error.name">{{ error.name }}</span>
                </div>
                <div class="field">
                    <label class="label">年紀</label>
                    <div class="control">
                        <input id="age" v-model="inquery.age" class="input" type="text" placeholder="Text input">
                    </div>
                    <span class="help is-danger" v-if="error.age">{{ error.age }}</span>
                </div>
            </CardModal>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import CardModal from '@/components/CardModal.vue';

const showModal = ref(false);

const inquery = ref({
    name: '',
    age: ''
});

const error = ref({
    name: '',
    age: ''
});

const showDialog = () => {
    // Reset input values and errors
    inquery.value.name = '';
    inquery.value.age = '';
    error.value.name = '';
    error.value.age = '';

    showModal.value = true;
};

const save = () => {
    if (!validate()) return;
    showModal.value = false;
};

const validate = () => {
    // reset error messages
    error.value.name = '';
    error.value.age = '';

    if (!inquery.value.name) {
        error.value.name = '請輸入姓名';
    }

    const age = Number(inquery.value.age);
    if (!inquery.value.age || isNaN(age) || age <= 15) {
        error.value.age = '請輸入年齡，且必須大於 15 歲';
    }

    if (error.value.name || error.value.age) {
        return false;
    }

    return true;
};

const cancel = () => {
    // Reset input values and errors
    inquery.value.name = '';
    inquery.value.age = '';
    error.value.name = '';
    error.value.age = '';

    showModal.value = false;
};

</script>