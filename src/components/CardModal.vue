<template>
    <div>
        <div class="modal" :class="{ 'is-active': showModal }">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">
                        <slot name="header">
                            <span style="color: red; font-weight: bold; font-size: 1.1em;">
                                請父元件提供 header slot
                            </span>
                        </slot>
                    </p>
                </header>
                <section class="modal-card-body">
                    <slot>請父元件提供預設 slot 的內容</slot>
                </section>
                <footer class="modal-card-foot">
                    <slot name="footer">
                        <div class="buttons">
                            <button class="button is-success" @click="save">存檔</button>
                            <button class="button" @click="showModal = false">放棄</button>
                        </div>
                    </slot>
                </footer>
            </div>
        </div>
    </div>
</template>

<script setup>
const showModal = defineModel({
    type: Boolean,
    default: false,
    required: true
});

</script>