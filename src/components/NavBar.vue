<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <span class="navbar-item">
                <img src="/course-logo-white.png" alt="ITsLife Overall logo" />
            </span>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
                data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">

                <RouterLink to="/" class="navbar-item">
                    首頁
                </RouterLink>

                <RouterLink to="/products" class="navbar-item">
                    產品列表
                </RouterLink>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        更多功能
                    </a>

                    <div class="navbar-dropdown">
                        <RouterLink to="/upvote" class="navbar-item">
                            投票功能 (動態元件)
                        </RouterLink>

                        <RouterLink to="/tabs" class="navbar-item">
                            頁籤功能 (動態元件)
                        </RouterLink>

                        <RouterLink to="/tap" class="navbar-item">
                            Tap 功能 (Component 通訊)
                        </RouterLink>
                    </div>
                </div>

                <RouterLink to="/about" class="navbar-item">
                    關於我們
                </RouterLink>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <RouterLink v-if="!isLogin" to="/login" class="button is-primary is-small">
                            <strong>登入</strong>
                        </RouterLink>
                        <div v-else class="is-flex is-align-items-center">
                            <div class="mr-2">{{ userName }}</div>
                            <button class="button is-info is-small" @click="logout">登出</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { useUserStore } from '@/stores/user.js'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

// 這一列敍述是錯的, 這個 isLogin 沒有響應能力, 下一節再修
const { userName, isLogin } = storeToRefs(userStore)

const logout = () => {
    userStore.logout()
    router.push('/')

}

</script>