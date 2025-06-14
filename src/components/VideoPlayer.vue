<template>
    <div>
        <video :id="options.id" ref="videoPlayer" class="video-js"></video>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, useTemplateRef } from 'vue'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import zhTW from '@/languages/videojs/zh-TW.json'

videojs.addLanguage('zh-TW', zhTW)

const props = defineProps({
    options: {
        type: Object,
        default: () => ({})
    }
})

let playerPosition = useTemplateRef('videoPlayer')
let player = null

onMounted(() => {
    player = videojs(playerPosition.value, props.options,
        function () {
            console.log('onPlayerReady')
        })
})

onBeforeUnmount(() => {
    if (player) {
        player.dispose()
        player = null
    }
})
</script>

<style scoped>
.my-video-layout {
    width: 50%;
    height: 50%;
}
</style>