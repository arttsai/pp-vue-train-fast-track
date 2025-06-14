<template>
  <div>
    <div class="container is-max-desktop">
      <h1 class="title is-4 has-text-centered">影片播放</h1>
      <VideoPlayer :options="videoOptions" class="p-2" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import VideoPlayer from '@/components/VideoPlayer.vue'


const videoOptions = ref({
  autoplay: false,
  controls: true,
  sources: [
    {
      src: 'https://youtu.be/mPy58GQ77cg',
      type: 'video/youtube'
    }
  ],
  id: 'my-video',
  language: 'zh-TW', // 設定語言為繁體中文
  fluid: true,      // 或者, 將 'vjs-fluid' 添加到 video 的 class 樣式中
  techOrder: ['html5', 'youtube',],
})

</script>
