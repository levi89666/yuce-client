<template>
  <div class="ListWrapper2">
    <div class="header">
      <span v-for="(item,index) in headerList" :key="item" :class=" currentType === index ?'active':'' " @click="currentType = index">{{item}}</span>
    </div>
    <div class="ListBox">

      <div class="listItem" v-for="item in listData" :key="item.id">
                  <span class="match">
                    {{item.match}}
                    {{item.time}}
                  </span>
        <div class="info">
                  <span class="home">
                         {{item.homeTeam}}
                  </span>
          <span>
                    <img :src="item.homeFlagUrl" alt="">
                  </span>
          <span style="margin: 0 15px">
                    VS
                  </span>
          <span class="">
                         <img :src="item.awayFlagUrl" alt="">
                  </span>
          <span class="away">
                       {{item.awayTeam}}
                  </span>
        </div>
        <span class="goToYuce">查看预测</span>
      </div>
    </div>



  </div>
</template>
<script setup>
import {ref} from 'vue'
const  props  = defineProps({
  title:{
    type: String,
    required:true
  }
})
const currentType = ref(0)
const headerList = ['热门直播','热门直播','热门直播','热门直播']
const listData = [
  {
    match:'欧冠',
    time:"20-20 00:00",
    homeTeam:"edg",
    homeFlagUrl:"https://www.imgmodels.com/images/10.webp",
    awayTeam:"edg",
    awayFlagUrl:"https://www.imgmodels.com/images/10.webp",
    id:"1",
    status:0
  },
  {
    match:'欧冠',
    time:"20-20 00:00",
    homeTeam:"edg",
    homeFlagUrl:"https://www.imgmodels.com/images/10.webp",
    awayTeam:"edg",
    awayFlagUrl:"https://www.imgmodels.com/images/10.webp",
    id:"2",
    status:0
  }
]

</script>
<style lang='scss' >

.ListWrapper2{
  flex: 1;
  width: 100%;
  background-size: cover;
  border-radius: 20px;
  padding: 0 .2rem 0 ;
  margin: 0 auto;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow:0 0 10px 10px rgba(0,0,0,.1);
  .header{
    >span{
      display: inline-block;
      margin: 20px 20px;
      padding: 5px 20px;
      cursor: pointer;
      font-size: .16rem;
    }
    >span.active{
      background: url("../../assets/images/yuce2.png");
      background-size: 100% 100%;
      color: #fff;
    }
  }
  .el-tabs__nav{
    width: 100% !important;
    display: flex;
    justify-content: center;
  }
  .listHeader{
    text-align: center;
  }
  .listItem{
    height: 1.5rem;
    border-bottom: 1px solid #ccc;
    font-size: .16rem;
    position: relative;

    .info{
      text-align: center;
      margin: 0 auto;
      line-height: 1.5rem;
      img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        vertical-align: middle;
        display: inline-block;
        margin: 0 20px;
      }
    }
    .match{
      position: absolute;
      left: 0;
      top: 20px;
      padding: 8px 30px;
      background-color: #E6EBFF;
      border-bottom-right-radius: 20px;
      border-top-right-radius: 20px;
      font-size: 14px;
    }
    .goToYuce{
      position: absolute;
      right: 0;
      top: 20px;
      padding: 8px 40px;
      color: #fff;
      background: url("../../assets/images/yucebg.png");
      background-size: 100% 100%;
      cursor: pointer;
    }
  }
}
</style>