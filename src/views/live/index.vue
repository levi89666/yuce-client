<template>
  <div>
<!--    <iframe src="https://www.xiangkantiyu.com/live/1639930960.html?gid=2" width="100%" height="100%" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no">-->

<!--    </iframe>-->
    <Live/>
  </div>
</template>
<script setup>
import  Live from './live.vue'
let player = new HlsPlayer({
  id: 'mse',
  url: '{$play|raw}',
  isLive: true,
  autoplay: true,
  playsinline: true,
  height: window.innerHeight,
  width: window.innerWidth
});
player.emit('resourceReady', [{ name: '超清', url: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-720p.flv' }, { name: '高清', url: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-480p.flv' }, { name: '标清', url: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-360p.flv' }]);

</script>
<style lang='scss' scoped>

</style>