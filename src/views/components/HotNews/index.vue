

<template>
  <div class="HotNews" >
    <div>
      <h1>热点咨询</h1>
      <span>换一批 </span>
    </div>
    <div v-loading="loading">
      <div v-for="item in list" :key="item._id" @click="">
        <p class="title"><span></span>{{item.title}}:</p>
        <p class="tip" >{{item.tip}}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import {onMounted,ref} from "vue";
import {getHotNews} from '../../../services/api'
const list = ref([])
const loading = ref(false)
onMounted(()=>{
  handleQUery()
})
const handleQUery = ()=>{
  loading.value = true
  getHotNews().then(res=> {
    list.value = res.data.list.slice(0,5) ||[]

  }).finally(()=>{
    loading.value = false
  })
}

</script>
<style lang='scss' scoped>
.HotNews{
  background-color: #fff;
  border-radius: 10px;
  padding: 10px 10px;
  margin: 40px 0 .7rem 0;
  max-height: 3.31rem;
  min-height: 1rem;
  box-shadow:0 0 10px 10px rgba(0,0,0,.1);
  box-sizing: border-box;
  overflow: hidden;
  >div:first-child{
    display: flex;
    padding-left: 10px;
    justify-content: space-between;
    h1{
      font-size: .3rem;
    }
  }
  >div:last-child{
    display: flex;
    width: 4rem;
    flex: 1;
    flex-wrap: wrap;
    flex-direction: column;
    overflow: hidden;
    >div:hover{
      color: #4266f4;
    }
    >div{
      display: flex;
      margin: 8px 0;
      width: 100%;
      cursor: pointer;
      .tip{
        padding-left: 10px;
        max-width: 2.6rem;
        font-size: .16rem;
        white-space: nowrap;
        overflow: hidden;
        /*当文本溢出包含元素时，以省略号表示超出的文本*/
        text-overflow: ellipsis;
      }
      .title,{
        max-width: 1.4rem;
        white-space: nowrap;
        overflow: hidden;
        font-size: .16rem;
        /*当文本溢出包含元素时，以省略号表示超出的文本*/
        text-overflow: ellipsis;
        >span{
          border-left: 2px solid blue;
          display: inline-block;
          height: .14rem;
          margin-right: 5px;
        }
      }
    }

  }


}
</style>