<template>
    <div>
        <h1 class="subtitle is-3 has-text-centered">Login</h1>

        <div class="container columns">
            <div class="column"></div>

            <form class="column is-half" @submit.prevent="login">
                <div class="field">
                    <label class="label">Username</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input is-success" type="text" placeholder="Text input">
                        <span class="icon is-small is-left">
                            <i class="fas fa-user"></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i class="fas fa-check"></i>
                        </span>
                    </div>
                </div>

                <div class="field">
                    <label for="" class="label">密碼</label>
                    <div class="control">
                        <input type="password" class="input" placeholder="密碼">
                    </div>
                </div>

                <div class="field">
                    <label class="label">Email</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
                        <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i class="fas fa-exclamation-triangle"></i>
                        </span>
                    </div>
                </div>

                <div class="field">
                    <label class="label">主題選項</label>
                    <div class="control">
                        <div class="select">
                            <select>
                                <option>選項一</option>
                                <option>選項二</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="field">
                    <div class="control">
                        <label class="checkbox">
                            <input type="checkbox">
                            我同意條款
                        </label>
                    </div>
                </div>

                <div class="field">
                    <div class="control ">
                        <label class="radio mr-3">
                            <input type="radio" name="question">
                            Yes
                        </label>
                        <label class="radio">
                            <input type="radio" name="question">
                            No
                        </label>
                    </div>
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

const userStore = useUserStore()
const route = useRoute()
const router = useRouter()

console.log('route', route)

const login = () => {
    userStore.login(1)

    console.log('userId', userStore.userId)
    console.log('userName', userStore.userName)
    console.log('isLogin', userStore.isLogin)

    if (route.query.redirect) {
        router.push(route.query.redirect)
    } else {
        router.push('/')
    }
}

</script>