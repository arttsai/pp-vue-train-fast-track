<template>
  <div>
    <video-player :options="videoOptions" />
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
      src: 'C:/Users/artts/OneDrive/文件/ITsLifeOverAll/Site Course Final/A02 Vue 高手直達車/video/11-001 api.mp4',
      type: 'video/mp4'
    }
  ]
})
</script>
