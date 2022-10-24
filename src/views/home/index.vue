<template>
  <div>
    <div class="homeNews" v-loading="loading">
      <div class="leftImg">
        <img src="https://www.imgmodels.com/images/10.webp" alt="">
        <div>title</div>
      </div>

      <div>
        <div class="ListBox" >
          <div v-for="item in list"  class="listItem">
            <div>
              <img src="https://www.imgmodels.com/images/10.webp" alt="">
            </div>
            <div class="rightItem">
              <div class="title">{{item.title}}</div>
              <div class="time" >{{dateFormat('yyyy-MM-dd HH:mm:ss',new Date(item.update_time))}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <YuceList title="今日预测"/>

  </div>
</template>
<script setup>
import  YuceList from '../components/YuceList/index.vue'
import {dateFormat} from '@/utils'
import {onMounted, ref} from "vue";
import {getHomeNews} from "../../services/api";
const list = ref([])
const loading = ref(false)
onMounted(()=>{
  handleQUery()
})
const handleQUery = ()=>{
  loading.value = true
  getHomeNews().then(res=> {
    console.log(res)
    list.value = res.data.list.slice(0,4) ||[]

  }).finally(()=>{
    loading.value = false
  })
}
</script>
<style lang='scss' scoped>
.homeNews{
  display: flex;
  height: 3.31rem;
  margin: 0 .2rem  .6rem .2rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow:0 0 10px 10px rgba(0,0,0,.1);
  .leftImg{
    position: relative;
    >div{
      position: absolute;
      left: 0;
      bottom: 0;
      color: #fff;
      width: 100%;
      height: .4rem;
      line-height: .4rem;
      background-color: rgba(0,0,0,.4);
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      text-align: center;
    }
   img{
     width: 4.2rem;
     height: 3.3rem;
     vertical-align: middle;
     border-radius: 10px;
   }
    margin-right: 20px;
  }
}
.ListBox{
  width: 4rem;
  font-size: .16rem;
  overflow: hidden;
  box-sizing: border-box;
  img{
    height: .7rem;
    width: 1.6rem;
    border-radius: 5px;
    margin-top: .1rem;

  }
  .listItem{
    display: flex;
    height: .8rem;
    border-bottom: none;
    .rightItem{
      flex: 1;
      height: .7rem;
      padding-left: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: hidden;
      box-sizing: border-box;

      div {
        flex: 1;
        width: 100%;

      }
    }
    .title{
      width: 100%;
      white-space: nowrap;
      line-height: .5rem;
      overflow: hidden;
      /*当文本溢出包含元素时，以省略号表示超出的文本*/
      text-overflow: ellipsis;
    }
    .time{
      font-size: .1rem;
      display: flex;
      align-items: center;
    }

  }
}
</style>