<template>
  <div>
    <div class="container is-max-desktop">
      <h1 class="title is-4 has-text-centered">影片播放</h1>
      <div>
        <VideoPlayer :options="videoOptions" />
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import VideoPlayer from '@/components/VideoPlayer.vue'

const videoOptions = ref({
  autoplay: true,
  controls: true,
  sources: [
    {
      src: 'https://videos.pexels.com/video-files/32495488/13857045_2560_1440_30fps.mp4',
      type: 'video/mp4'
    }
  ],
  id: 'my-video',
})

</script>
