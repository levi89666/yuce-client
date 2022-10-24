<template>
  <div class="wordWrapper">
    <div class="schedule">
        <div>
          <el-button @click="handleScorll('left')"><el-icon><ArrowLeft /></el-icon></el-button>
          <div class="selectTime" ref="scorll">
            <div class="timeBox">
              <div v-for="(item,index) in 30" :class=" currentDate === index ?'active':'' " @click="currentDate = index">
                <p>11/11</p>
                <p>周一</p>
              </div>
            </div>
          </div>
          <el-button @click="handleScorll('right')"><el-icon><ArrowRight /></el-icon></el-button>
        </div>
    </div>
    <div class="matchList">
      <div v-for="item in list" class="matchListItem">
        <div>
          <div>
            <p>11/11</p>
            <p>00:00</p>
          </div>
          <div>卡塔尔</div>
          <div>主队logo</div>
          <div>VS</div>
          <div>客队logo</div>
          <div>卡塔尔</div>
          <div>
            <p>11/11</p>
            <p>00:00</p>
          </div>
          <div>
            <p>11/11</p>
            <p>00:00</p>
          </div>
          <div>
            <p>11/11</p>
            <p>00:00</p>
          </div>
          <div class="gotoYuce">查看预测</div>
        </div>
      </div>
    </div>
  </div>
  <div class="grouping">
      <Group/>
     <Group/>
     <Group/>
     <Group/>
  </div>
</template>
<script setup>
import {ref} from 'vue'
import Group from './grouping.vue'
const scorll = ref(null)
const currentDate = ref(0)
const handleScorll = (type)=>{
  scorll.value.scrollLeft = type === 'left' ?  scorll.value.scrollLeft  - 200: scorll.value.scrollLeft  + 200

}
const list = [
  {
    title:1,
    content:2
  },
  {
    title:1,
    content:2
  },  {
    title:1,
    content:2
  },
  {
    title:1,
    content:2
  },
  {
    title:1,
    content:2
  }
]

</script>
<style lang='scss' scoped>
.wordWrapper{

  width: 100%;
  height: 600px;
  max-width: 1245px;
  margin: 0 10px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 20px;
  overflow-y:scroll ;
  overflow-x:hidden;

  box-shadow:0 0 10px 10px rgba(0,0,0,.1);

  .schedule{
    position: absolute;
    height: 1rem;
    padding: 0 20px ;
    max-width: 1205px;
    background-color: #fff;
    border-radius: 20px;
    >div{
      display: flex;
      height: 1rem;
      align-items: center;
      justify-content: space-between;
      .selectTime{
        overflow-x: scroll;
        padding: 5px 0;
       >div{
         display: flex;
         >div{
           margin: 0 30px;
           cursor: pointer;
           >p{
             font-size: .16rem;
           }
         }
         div.active{
           color: #4266F4;
         }
       }

      }

      .selectTime::-webkit-scrollbar {/*滚动条整体样式*/
        width: 10px;     /*高宽分别对应横竖滚动条的尺寸*/
        height: 8px;
      }
      .selectTime::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 10px;
        background-color: #4266F4;
     }
      .selectTime::-webkit-scrollbar-track {/*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        border-radius: 10px;
        background: #EDEDED;
      }
    }
  }
}

.wordWrapper::-webkit-scrollbar {/*滚动条整体样式*/
  width: 10px;     /*高宽分别对应横竖滚动条的尺寸*/
  height: 8px;
}
.wordWrapper::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
  border-radius: 10px;
  height: 20px;
  background-color: #ccc;
}
.wordWrapper::-webkit-scrollbar-track {/*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  border-radius: 10px;
  background: #EDEDED;
}
.matchListItem:first-child{
  margin-top: 1rem;

}
.matchListItem{

  height: 1.5rem;
  border-bottom: 1px solid #ccc;
  font-size: .14rem;
  >div{
    height: 1.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    >div{
      font-size: .14rem;
      >p{
        font-size: .14rem;
        text-align: center;
      }
    }
  }
  .gotoYuce{
    width: 1rem;
    height: .3rem;
    background: url("../../assets/images/yuce2.png");
    background-size: 100% 100%;
    text-align: center;
    line-height: .3rem;
    color: #fff;
  }
}
.grouping{
  margin: 20px 0;
  width: 100%;
  max-width: 1300px;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  >div{
    width: calc(50% - 20px);
    background-color: #fff;

    margin: 10px;
    border-radius: 10px;
  }
}

</style>