

<template>
  <div class="WorldCupFeature">
    <h1>世界杯专题新闻</h1>
    <div class="ListBox" v-loading="loading" >
      <div v-for="item in list"  class="listItem"  :key="item._id" @click="router.push({path:'/news',query:{id:item._id}})">
        <div>
          <img :src="item.homeImg" alt="">
        </div>
        <div class="rightItem">
          <div class="title">{{item.title}}</div>
          <div class="time" >{{dateFormat('yyyy-MM-dd HH:mm',new Date(item.update_time))}}</div>
        </div>
      </div>
    </div>



  </div>
</template>
<script setup>
import {dateFormat} from '@/utils'
import router from './../../../router/index'
import { getWorldNews} from '../../../services/api'
import {onMounted, ref} from "vue";

const list = ref([])
const loading = ref(false)
onMounted(()=>{
  handleQUery()
})
const handleQUery = ()=>{
  loading.value = true
  getWorldNews().then(res=> {
    list.value = res.data.list.slice(0,5) ||[]

  }).finally(()=>{
    loading.value = false
  })
}


</script>
<style lang='scss' scoped>
.WorldCupFeature{
  background-color: #fff;
  border-radius: 20px;
  padding: 10px 20px;
  margin-top: 40px;
  box-shadow:0 0 10px 10px rgba(0,0,0,.1);
  h1{
    margin: 10px 0 ;
    font-size: .3rem;
  }
  img{
    height: .8rem;
    width: 1.6rem;
    border-radius: 5px;
    margin-top: .1rem;
  }

  .ListBox{
    width: 4rem;
    font-size: .16rem;
    min-height: 1rem;
    overflow: hidden;
    box-sizing: border-box;
    .listItem:hover{
      color: #4266f4;
    }
    .listItem{
      display: flex;
      height: 1rem;
      cursor: pointer;
      .rightItem{
        flex: 1;
        height: 1rem;
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
}
</style>