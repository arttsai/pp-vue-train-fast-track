<template>
    <div class="container is-max-desktop">
        <h1 class="title is-4 has-text-centered">async / await 示範</h1>
        <pre>{{ result }}</pre>
        <div class="buttons p-4 is-centered">
            <button class="button is-primary" @click="execute">再來一次</button>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const result = ref('');
const foods = [
    "漢堡 🍔",
    "披薩 🍕",
    "壽司 🍣",
    "沙拉 🥗",
    "炸雞 🍗"
];

onMounted(() => {
    execute();
});

const deliverFood = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.3; // 70% 成功率
            if (success) {
                const food = foods[Math.floor(Math.random() * foods.length)];
                resolve({
                    food: food,
                    message: `你的 ${food} 已送達！`
                });
            } else {
                reject("送餐失敗，請稍後再試。");
            }
        }, 1000);
    });
}

const execute = async () => {
    result.value = ''

    try {
        const foodObj = await deliverFood();
        result.value += "成功: " + foodObj.message;
        const foodStr = foodObj.food;
        // 字串包含 "壽司"，"沙拉"，算失敗，我們不喜歡吃
        if (foodStr.includes("壽司") || foodStr.includes("沙拉")) {
            throw new Error("我們不喜歡吃這個食物！");
        } else {
            result.value += `\n我們喜歡吃 ${foodStr}！`;
        }

    } catch (error) {
        if (result.value) result.value += "\n";

        if (error instanceof Error) {
            result.value += "失敗: " + error.message;
        } else {
            result.value += "錯誤: " + error;
        }
    }
}

</script>
