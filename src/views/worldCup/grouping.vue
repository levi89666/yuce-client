<template>
  <div class="wrapper">
    <div class="header">
        <div>
          <span>A组</span>
          <span>B组</span>
        </div>
        <div>
          <span>国家</span>
          <span>卡塔尔</span>
          <span>厄瓜多尔</span>
          <span>塞内加尔</span>
          <span>荷兰</span>
        </div>
    </div>
    <div class="dateBox">
      <div class="date">
        <div>
          <span>11月21日 00:00</span>
          <span>未开赛</span>
        </div>
        <div>
          <span>主队</span>
          <span>主队logo</span>
          <span>VS</span>
          <span>客队logo</span>
          <span>客队</span>
        </div>
      </div>
      <div class="date">
        <div>
          <span>11月21日 00:00</span>
          <span>未开赛</span>
        </div>
        <div>
          <span>主队</span>
          <span>主队logo</span>
          <span>VS</span>
          <span>客队logo</span>
          <span>客队</span>
        </div>
      </div>
    </div>
    <h1>相关咨询</h1>
    <div class="zixunBox">
      <div class="zixunItem">
        <div>
          <img src="https://www.w3schools.com/css/paris.jpg" alt="">
        </div>
        <div class="info">
          <p class="title">2022卡塔尔世界杯奖杯抵达韩国</p>
          <p class="time">2022-10-09 12:05:36</p>
        </div>
      </div>
      <div class="zixunItem">
        <div>
          <img src="https://www.w3schools.com/css/paris.jpg" alt="">
        </div>
        <div class="info">
          <p class="title">2022卡塔尔世界杯奖杯抵达韩国</p>
          <p class="time">2022-10-09 12:05:36</p>
        </div>
      </div>
      <div class="zixunItem">
        <div>
          <img src="https://www.w3schools.com/css/paris.jpg" alt="">
        </div>
        <div class="info">
          <p class="title">2022卡塔尔世界杯奖杯抵达韩国</p>
          <p class="time">2022-10-09 12:05:36</p>
        </div>
      </div>
      <div class="zixunItem">
        <div>
          <img src="https://www.w3schools.com/css/paris.jpg" alt="">
        </div>
        <div class="info">
          <p class="title">2022卡塔尔世界杯奖杯抵达韩国</p>
          <p class="time">2022-10-09 12:05:36</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

</script>
<style lang='scss' scoped>
.wrapper{
  padding: 10px 20px;
  box-sizing: border-box;
  .header{
    height: .5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    div{
      font-size: .14rem;
     span{
       font-size: .14rem;
     }
   }
  }
  .dateBox{
    border-bottom: 1px solid #ccc;
  }
  .date{
    display: flex;
    justify-content: space-between;
    >div{
      height: .5rem;
      line-height: .5rem;
      >span{
        font-size: .14rem;
      }
    }
  }
}
h1{
  margin: 10px 0;
}
.zixunItem{
  display: flex;
  img{
    height: .8rem;
    width: 1.5rem;
    border-radius: 10px;
  }
  .info{
    height: .8rem;
    margin-left: 20px;
    >p{
      height: .4rem;
      line-height: .4rem;
    }
    .time{
      font-size: .12rem;
    }
  }
}


</style>