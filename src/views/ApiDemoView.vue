<template>
    <div>
        <!-- (todo) http get -->
        <h1 class="title is-3 has-text-centered">API 呼叫練習 (axios)</h1>
        <div class="block box container is-max-desktop">
            <h2 class="subtitle is-4">Http Get (todo)</h2>
            <div>
                <div class="is-flex is-align-items-center" style="gap: 1rem;">
                    <button class="button is-primary" @click="getMethod">待辦事項 (Http Get Method)</button>
                    <span>
                        ID:
                        <input type="text" v-model="id" />
                    </span>
                </div>
                <pre class="m-2">{{ getData }}</pre>
            </div>
        </div>

        <!-- (todo) http post -->
        <div class="box container is-max-desktop">
            <h2 class="subtitle is-4">Http Post (todo)</h2>
            <button class="button is-primary" @click="postMethod">新增待辦 (Http Post Method)</button>

            <pre class="m-2">{{ postData }}</pre>
        </div>

        <!-- (todo) http delete -->
        <div class="box container is-max-desktop">
            <h2 class="subtitle is-4">Http Delete</h2>
            <div class="is-flex is-align-items-center" style="gap: 1rem;">
                <button class="button is-primary" @click="deleteMethod">Http Delete Method</button>
                <span>
                    ID:
                    <input type="text" v-model="id" />
                </span>
            </div>

            <pre class="m-2">{{ deleteData }}</pre>
        </div>

        <footer class="footer"></footer>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const id = ref(1)
const getData = ref('')

const getMethod = async () => {
    axios.get(`https://jsonplaceholder.typicode.com/todos/${id.value}`)
        .then((response) => {
            console.log("Data fetched successfully, response:", response);
            getData.value = response.data;
        })
        .catch((error) => {
            // console.error("Error fetching data:", error);
            getData.value = `Error fetching data
            ${error.message}`;
        });
}

const postData = ref('')
const postMethod = async () => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
        id: 201,
        userId: 1,
        title: 'New Todo',
        completed: false,
    })
        .then((response) => {
            console.log("Data posted successfully, response:", response);
            postData.value = response.data;
        })
        .catch((error) => {
            // console.error("Error posting data:", error);
            postData.value = `Error posting data
            ${error.message}`;
        });
}

const deleteData = ref('')
const deleteMethod = async () => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id.value}`)
        .then((response) => {
            console.log("Data deleted successfully, response:", response);
            deleteData.value = `Todo with ID ${id.value} deleted successfully.`;
        })
        .catch((error) => {
            // console.error("Error deleting data:", error);
            deleteData.value = `Error deleting data
            ${error.message}`;
        });
}


</script>