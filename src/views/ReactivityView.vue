<template>
    <div class="container is-max-desktop">
        <h1 class="title is-4 has-text-centered">Reactivity 總合分析 (含 Pinia Store)</h1>
        <div class="columns">
            <div class="column">
                <h2 class="subtitle is-5 has-text-centered">Store 各種使用方法觀察</h2>
                <div class="box">
                    <h2 class="subtitle is-6">1. 直接存取 userStore 的 propertis</h2>
                    <div>userStore.userId: {{ userStore.userId }}</div>
                    <div>userStore.userName: {{ userStore.userName }}</div>
                    <div>userStore.isLogin: {{ userStore.isLogin }}</div>
                </div>
                <div class="box">
                    <h2 class="subtitle is-6">2. 解構時使用 storeToRefs</h2>
                    <div>userId: {{ userId }}</div>
                    <div>userName: {{ userName }}</div>
                    <div>isLogin: {{ isLogin }}</div>
                </div>
                <div class="box">
                    <h2 class="subtitle is-6">3. 變數：由 userStore.XXX 直接設成變數</h2>
                    <div>myUserId: {{ myUserId }}</div>
                    <div>myUserName: {{ myUserName }}</div>
                    <div>myIsLogin: {{ myIsLogin }}</div>
                </div>

                <div class="buttons">
                    <button class="button is-primary" @click="nextUser">Next User Id</button>
                    <button class="button is-primary" @click="login">Login (User 1)</button>
                    <button class="button is-primary" @click="logout">Logout</button>
                </div>
            </div>
            <div class="column ">
                <h2 class="subtitle is-5 has-text-centered">ref(), computed(), reactive() 觀察</h2>
                <div>Count (ref): {{ refCount }}</div>
                <div>Count (reactive): {{ reactiveCount.count }}</div>
                <div>Count (computed): {{ computedCount }}</div>
                <div class="p-4"></div>
                <div class="buttons">
                    <button class="button is-primary" @click="increment">Count++</button>
                    <button class="button is-primary" @click="log">Check log</button>
                    <button class="button is-link" @click="clear">Clear</button>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, reactive, watchEffect, computed, toRef } from 'vue';
import { useUserStore } from '@/stores/user.js'
import { storeToRefs } from 'pinia';


const refCount = ref(0);
const computedCount = computed(() => refCount.value);
const reactiveCount = reactive({
    count: 0
});


const userStore = useUserStore();

const { userId, userName, isLogin } = storeToRefs(userStore);

const myUserId = userStore.userId
const myUserName = userStore.userName;
const myIsLogin = userStore.isLogin;

const increment = () => {
    refCount.value++;
    reactiveCount.count++;
}
const clear = () => {
    refCount.value = 0;
    reactiveCount.count = 0;
}
const log = () => {
    console.log('=====');
    console.log('refCount:', refCount);
    console.log('refCount.value:', refCount.value);
    console.log('reactiveCount:', reactiveCount);
    console.log('reactiveCount.count:', reactiveCount.count);
    console.log('computedCount:', computedCount);
    console.log('computedCount.value:', computedCount.value);
    console.log('變數 userStore:', userStore);
}
const nextUser = () => {
    // userStore.userId++;   
    userId.value++;
}
const login = () => {
    userStore.login(1);
}
const logout = () => {
    userStore.logout();
}


</script>