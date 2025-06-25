<template>
    <div class="container is-max-desktop">
        <h1 class="title is-4 has-text-centered">reactive vs. ref</h1>
        <div class="columns">
            <div class="column"></div>
            <div class="column is-two-thirds">
                <div>Count (ref): {{ count }}</div>
                <div>State Count (reactive): {{ state.count }}</div>
                <div>Sum (computed): {{ sum }}</div>
                <div>Counter (watchEffect): {{ counter }}</div>
                <div class="p-4"></div>
                <div class="buttons">
                    <button class="button is-primary" @click="increment">Count++</button>
                    <button class="button is-primary" @click="log">Check log</button>
                    <button class="button is-link" @click="clear">Clear</button>
                </div>
            </div>
            <div class="column"></div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, watchEffect, computed } from 'vue';
import { useUserStore } from '@/stores/user.js'
import { storeToRefs } from 'pinia';

const userStore = useUserStore();
// const userId = userStore.userId;
// const userName = userStore.userName;
// const isLogin = userStore.isLogin;

const { userId, userName, isLogin } = storeToRefs(userStore);

const count = ref(0);
const state = reactive({
    count: 0
});

const sum = computed(() => {
    return count.value + state.count;
});

const increment = () => {
    count.value++;
    state.count++;
}

const clear = () => {
    count.value = 0;
    state.count = 0;
}

const log = () => {
    console.log('=====');
    console.log('count:', count);
    console.log('count value:', count.value);
    console.log('typeof state:', typeof state);
    console.log('state:', state);
    console.log('typeof state count:', typeof state.count);
    console.log('reactive state count:', state.count);
    console.log('sum dir below:')
    console.dir(sum);
    console.log('sum:', sum.value);

    console.log('-----');
    console.log('userStore:', userStore);
    console.log('userId dir below:');
    console.dir(userId);
    console.log('userName dir below:');
    console.dir(userName);
    console.log('isLogin dir below:');
    console.dir(isLogin);

}

const user = {
    name: 'John Doe',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        country: 'USA'
    }
}

let counter = ref(0);
watchEffect(() => {
    counter.value = state.count + count.value;
});


</script>