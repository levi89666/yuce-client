<template>
  <div class="wrapper">
      <header >
          <div class="main navbox">
            <div class="logo">
              <img src="assets/images/logo.png" alt="">
            </div>
            <div  class="navList ">
              <div v-for="item in headerList" class="navItem">
                <router-link :to="item.path">
                  {{item.label}}
                </router-link>
                <p v-if="route.name === item.name"></p>
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
        >
          <img src="/src/assets/images/banner.png" alt="">
        </swiper-slide>
          <swiper-slide
            class="teacher_li"
        >
            <img src="/src/assets/images/banner.png" alt="">
        </swiper-slide>
          <swiper-slide
            class="teacher_li"
        >
            <img src="/src/assets/images/banner.png" alt="">
        </swiper-slide>

        </swiper>
        <div  class="navList2 ">
          <div v-for="item in headerList">
            <router-link :to="item.path">
              {{item.label}}
            </router-link>
          </div>
        </div>
      </div>

      </header>
      <main class="main">
        <div class="routerView">
          <router-view/>
        </div>
        <div>
          <HotNews v-if="route.name === 'home'"/>
          <WorldCupFeature v-if="route.name !== 'worldCup'"/>
        </div>
      </main>
    <footer>
      版权所有 ©2021-2022 智库体育 保留所有权
    </footer>
  </div>
</template>

<script setup>
import SwiperCore, {
  Pagination,
  Scrollbar,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from 'swiper/vue'
import "swiper/scss";
import WorldCupFeature from '../components/WorldCupFeature/index.vue'
import HotNews from '../components/HotNews/index.vue'
import {useRoute} from 'vue-router'
const route = useRoute()
SwiperCore.use([ Pagination, Scrollbar, Autoplay]);

const headerList = [
  {
    label:'智库首页',
    value:1,
    name:"home",
    path:"/home"
  },
  {
    label:'足球预测',
    value:2,
    name:"football",
    path:"/football"
  },{
    label:'篮球预测',
    value:3,
    name:"basketball",
    path:'/basketball'
  },{
    label:'电竞预测',
    value:4,
    name:"gaming",
    path:"/gaming"
  },{
    label:'赛事直播',
    value:5,
    name:"live",
    path:"/live"
  },{
    name:"worldCup",
    label:'世界杯专题',
    value:6,
    path:"worldCup"
  }
  ,{
    label:'新闻咨询',
    value:7,
    name:"news",
    path:'/news'
  }
]



</script>

<style lang='scss' scoped>
.wrapper{
  header{
    height: 3.6rem;
    background-color: #fff;
    .logo{
      img{
        height: .3rem;
        vertical-align: middle;
      }
    }
    .navbox{
      height: .6rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .navList{
      height: .6rem;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin: 0 40px;
      a{
        margin: 0 .1rem;
        font-size: .16rem;
        color: #000;
      }
      .navItem{
        position: relative;
        p{
          position: absolute;
          width: 50%;
          left: 50%;
          transform: translateX(-50%);
          height: 2px ;
          background-color: #4266F4;
        }
      }

    }
    .navList2{
      position: absolute;
      bottom:0;
      left: 0;
      right: 0;
      height: .6rem;

      display: flex;
      justify-content: space-around;
      align-items: flex-end;
      z-index: 100;
      margin: 0 auto;
      max-width: 1300px;
      overflow: hidden;
      >div{
        flex: 1;
        font-size: .18rem;
        text-align: center;
        height: .5rem;
        line-height: .5rem;
        >a{
          display: inline-block;
          width: 100%;
          height: 100%;
          color: #fff !important;

        }
        .router-link-active{
          background-color: #4266F4;
        }
      }
    }
  }
  .banner{
    height:3rem;
    width: 100%;
    position: relative;
  }


  .swiper{
    width: 100% !important;
    height: 100%;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .main{
    margin: 0 auto;
    width: 100%;
    max-width: 1300px;
  }
  main{
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;
    max-width: 1300px;
    .routerView{
      flex: 1;
      margin: 40px 20px;
      border-radius: 10px;

    }
  }
  .router-link-active{
    color: #4266F4 !important;
  }
  >footer{
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    background-color:#333B57;
    color: #fff;
    font-size: .18rem;
    margin-top: .6rem;
  }
}

</style>
