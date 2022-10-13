<template>
  <div class="wrapper">
      <header>
          <div class="main navbox">
            <div class="logo">
              logo
            </div>
            <div  class="navList">
              <div v-for="item in headerList">
                <router-link :to="item.path">
                  {{item.label}}
                </router-link>
              </div>
            </div>
          </div>
      <div class="banner">
        <swiper
            :slides-per-view="1"
        :autoplay="{ disableOnInteraction: false }"
        loop
        :scrollbar="{ draggable: true }"
        class="teacher_ul"
        >
        <swiper-slide
            class="teacher_li"
            :key="index"
        >
         1
        </swiper-slide>
          <swiper-slide
            class="teacher_li"
            :key="index"
        >
        2
        </swiper-slide>
          <swiper-slide
            class="teacher_li"
            :key="index"
        >
         3
        </swiper-slide>
        </swiper>
      </div>
      </header>
      <main class="main">
        <router-view/>
      </main>
  </div>
</template>

<script setup>
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from 'swiper/vue'
import "swiper/scss";

SwiperCore.use([ Pagination, Scrollbar, Autoplay]);
const headerList = [
  {
    label:'智库首页',
    value:1,
    path:"/home"
  },
  {
    label:'足球预测',
    value:2,
    path:"/football"
  },{
    label:'篮球预测',
    value:3,
    path:'/basketball'
  },{
    label:'电竞预测',
    value:4,
    path:"/gaming"
  },{
    label:'赛事直播',
    value:5,
    path:"/live"
  },{
    label:'世界杯专题',
    value:6,
    path:"worldCup"
  }
  ,{
    label:'新闻咨询',
    value:7,
    path:'/news'
  }
]



</script>

<style lang='scss' scoped>
header{

  background-color: #ccc;

}
.banner{
  height: 2.6rem;
  width: 100%;
}
.navbox{
  height: .6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navList{
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  a{
    margin: 0 .2rem;
    font-size: .18rem;
    color: #000;
  }
}

.main{
  margin: 0 auto;
  width: 100%;
  height: 100%;
  max-width: 1200px;
}
.swiper{
  width: 100% !important;
  height: 100%;
  background-color: yellow;
}

main{
  background-color: red;
}
</style>
