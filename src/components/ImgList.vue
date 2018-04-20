<template>
  <div class="listBox">
     <img class="bgImg" src="../../dist/static/img/index/index-play3-2.png" alt="">
     <div class="title">1111nisjisisksakadkllsdasam你手机卡世界级的</div>
     <div class="detail">shisiishifhdufududhdjbcjbdcjdbdkvjbddhbhdkkksak是你是谁家的hi萨芬来得及放得开</div>
     <div class="infor">
        <div class="inforLeft">
          <img src="../../dist/static/img/index/guankan.png" alt=""><a href="">1920</a>
          <img src="../../dist/static/img/index/guankan.png" alt=""><a href="">1920</a>
          <img src="../../dist/static/img/index/guankan.png" alt=""><a href="">1920</a>
        </div>
        <div class="inforRight">
           <a href="">人名</a>
           <img  alt="">
        </div>
     </div>
     <div class="tag">妆容</div>
  </div>
</template>
<script>
export default {
  name: "ListBox"
};
</script>
<style lang="scss" scoped>
.listBox {
  // height: 345px;
  width: 279px;
  background: whitesmoke;
  margin-right: 28px;
  margin-bottom: 45px;
  position: relative;
  float: left;
  &:nth-child(4n) {
    margin-right: 0;
  }
  .bgImg {
    width: 279px;
    height: 223px;
  }
  .title {
    font-size: 16px;
    color: rgb(65, 65, 65);
    text-align: left;
    margin-top: 10px;
    margin-bottom: 12px;
    height: 18px;
    // background: red;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 18px;
  }
  .detail {
    cursor: default;
    // background: pink;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    text-align: left;
    font-size: 12px;
    color: rgb(65, 65, 65);
    padding-bottom: 23px;
    border-bottom: 1px solid rgb(196, 196, 196);
  }
  .infor {
    text-align: left;
    overflow: hidden;
     a{
       color: rgb(140,140,140);
       margin-right: 4px;
       }
         img {
        vertical-align:middle;
        margin-right: 5px;
      }
    .inforLeft {
      height: 33px;
      line-height: 33px;
      float: left;
      font-size: 12px;
    }
    .inforRight {
      float: right;
      height: 33px;
      line-height: 33px;
      img {
        width: 27px;
        height: 27px;
        background: red;
        vertical-align:middle;
        border-radius: 5px 0px 5px 0px;
        margin-right: 0;

      }
    }
  }
  .tag{
    width: 58px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    background: rgb(51,51,51);
    border-radius: 5px;
    position: absolute;
    right: 15px;
    top: 13px;
    font-size: 12px;
    color: rgb(255,255,255);
    letter-spacing: 2px;
  }
}
</style>


