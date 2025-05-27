<template>
    <div>
        <h1 class="subtitle is-3 has-text-centered">Login</h1>

        <div class="container columns">
            <div class="column"></div>

            <form class="column is-half" @submit.prevent="login">
                <div class="field">
                    <label for="username" class="label">使用者帳號</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input is-success" type="text" placeholder="Text input" id="username"
                            name="username" v-model="formData.username">
                        <span class="icon is-small is-left">
                            <i class="fas fa-user"></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i class="fas fa-check"></i>
                        </span>
                    </div>
                    <p v-if="formErrors.username" class="help is-danger">{{ formErrors.username }}</p>
                </div>

                <div class="field">
                    <label for="password" class="label">密碼</label>
                    <div class="control">
                        <input type="password" class="input" placeholder="密碼" id="password" name="password"
                            v-model="formData.password">
                    </div>
                    <p v-if="formErrors.password" class="help is-danger">{{ formErrors.password }}</p>
                </div>

                <div class="field">
                    <label for="email" class="label">Email</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input is-danger" type="email" placeholder="Email input" id="email" name="email"
                            v-model="formData.email">
                        <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i class="fas fa-exclamation-triangle"></i>
                        </span>
                    </div>
                    <p v-if="formErrors.email" class="help is-danger">{{ formErrors.email }}</p>
                </div>

                <div class="field">
                    <label for="subject" class="label">主題選項</label>
                    <div class="control">
                        <div class="select">
                            <select id="subject" name="subject" v-model="formData.subject">
                                <option disabled value="">請選擇</option>
                                <option value="1">選項一</option>
                                <option value="2">選項二</option>
                            </select>
                        </div>
                    </div>
                    <p v-if="formErrors.subject" class="help is-danger">{{ formErrors.subject }}</p>
                </div>

                <div class="field">
                    <div class="control">
                        <label class="checkbox">
                            <input type="checkbox" id="agree" name="agree" v-model="formData.agree">
                            我同意條款
                        </label>
                    </div>
                    <p v-if="formErrors.agree" class="help is-danger">{{ formErrors.agree }}</p>
                </div>

                <div class="field">
                    <div class="control ">
                        <label class="radio mr-3">
                            <input type="radio" name="question" v-model="formData.question" value="yes">
                            Yes
                        </label>
                        <label class="radio">
                            <input type="radio" name="question" v-model="formData.question" value="no">
                            No
                        </label>
                    </div>
                    <p v-if="formErrors.question" class="help is-danger">{{ formErrors.question }}</p>
                </div>

                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-link" type="submit">登入</button>
                    </div>
                    <div class="control">
                        <button class="button is-link is-light" @click="cancel">取消</button>
                    </div>
                </div>
            </form>

            <div class="column"></div>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user.js'
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'

const userStore = useUserStore()
const route = useRoute()
const router = useRouter()

const formData = ref({
    username: '',
    password: '',
    email: '',
    subject: '',
    agree: false,
    question: ''
})

const formErrors = ref({
    username: '',
    password: '',
    email: '',
    subject: '',
    agree: '',
    question: ''
})

const formValidate = () => {
    formErrors.value.username = formData.value.username ? '' : '使用者帳號為必填'
    formErrors.value.password = formData.value.password ? '' : '密碼為必填'

    if (!formData.value.email) {
        formErrors.value.email = '請輸入 Email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
        formErrors.value.email = 'Email 格式不正確';
    } else {
        formErrors.value.email = '';
    }

    formErrors.value.subject = formData.value.subject ? '' : '主題選項為必填'
    formErrors.value.agree = formData.value.agree ? '' : '您必須同意條款'
    formErrors.value.question = formData.value.question ? '' : '請回答問題'

    return Object.values(formErrors.value).every(error => !error)  // 傳回是否有錯誤
}

const login = () => {
    if (!formValidate()) {
        window.alert('表單驗證失敗，請檢查輸入的資料')
        return
    }

    userStore.login(1)

    console.log('Form Data:', formData.value)

    if (route.query.redirect) {
        router.push(route.query.redirect)
    } else {
        router.push('/')
    }
}

</script>