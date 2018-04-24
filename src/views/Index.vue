<template>
  <div class="box">
      <Nav></Nav>
      <div class="content">
        <div class="itemSwiper">
          <!-- 轮播 -->
          <div id="banner">  
            <div class="swiper-container">  
                  <div class="swiper-wrapper">  
                  <div class="swiper-slide" >
                    <a href="">
                      <img src="../../dist/static/img/index/banner1.png"></a>
                  </div>
                   <div class="swiper-slide" >
                    <a href="">
                      <img src="../../dist/static/img/index/banner4.png"></a>
                  </div>
                   <div class="swiper-slide" >
                    <a href="">
                      <img src="../../dist/static/img/index/banner3.png"></a>
                  </div> 
                  <div class="swiper-slide" >
                    <a href="">
                      <img src="../../dist/static/img/index/banner2.png"></a>
                  </div>  
                  </div>  
                  <div class="swiper-pagination"></div>  
            </div>  
          </div>
          <!-- 空隙 -->
          <div></div>
          <!-- 右侧 -->
          <div class="code">
            <div class="itemUp">
                <div class="hot">热门频道</div>
                <img src="../../dist/static/img/index/hot.png" alt="">
                <div class="tag">
                    <a href=""  v-for="i in 20" :key="i.id">{{i}}</a>
                </div>
            </div>
            <div>

            </div>
            <div class="itemDown">
                <img src="../../dist/static/img/index/banner_tg.png" alt="">
            </div>
          </div> 
        </div>
        <div class="imgList">
            <ListBox v-for="i in 12" :key="i.id"></ListBox>
        </div>
        <button disabled="disabled">查看更多</button>
      </div>  
      <Footer></Footer>
  </div>
</template>
<script type="text/javascript">
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ListBox from "../components/ImgList";
import Swiper from "../../dist/static/js/swiper.min.js";
import {Input} from 'iview';
export default {
  name: "Index",
  components: {
    Nav,
    Footer,
    ListBox,
    Input
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      autoplay: true, //可选选项，自动滑动
      loop: true,
      effect: "slider",
      cubeEffect: {
        slideShadows: false,
        shadow: false,
        shadowOffset: 100,
        shadowScale: 0.6
      },
      //分页器
      pagination: {
        el: ".swiper-pagination"
      },
      paginationClickable: true,
      observer: true
    });
  }
};
</script>
<style lang="scss">
@import "../../dist/static/css/swiper.min.css";

$bgcolor: rgb(255, 255, 255);
$width: 100%;
$height: 100%;
$letter2: 2px;
$letter1:1px;
$Redcolor:rgb(254,70,78);
.box {
  background: $bgcolor;
  width: $width;
  height: $height;
  // display: grid;
  // display: -ms-grid;
  grid-template-rows: 67px auto 130px;
}
.content {
  width: 1200px;
  margin: 0 auto;
  .itemSwiper {
    width: 100%;
    margin: 32px auto 62px;
    display: grid;
    display: -ms-grid;
    grid-template-columns: 770px auto 400px;
    //    background: blue;
    font-size: 0;
    #banner {
      width: 770px;
      img {
        font-size: 0;
      }
    }
    .code {
      width: 400px;
      display: grid;
      display: -ms-grid;
      grid-template-rows: 220px auto 168px;
      .itemUp {
        background: white;
        font-size: 20px;
        padding: 18px 23px;
        text-align: left;
        box-shadow: 0px 3px 11px 4px rgba(0, 0, 0, 0.11);
        border-radius: 5px;
        .hot {
          font-size: 26px;
          color: rgb(65, 65, 65);
          letter-spacing: $letter2;
          position: relative;
          display: inline-block;
          font-family: FZHTK--GBK1-0;
          &::before {
            content: "";
            position: absolute;
            left: -23px;
            top: 3px;
            background: $Redcolor;
            width: 6px;
            height: 34px;
          }
        }
        .tag{
            margin-top:26px;
            overflow: hidden; 
            a{
                float: left;
                background:rgb(241,241,241);
                padding: 7px 11px;
                margin-right: 11px;
                margin-bottom: 7px;
                font-size: 12px;
                color:$Redcolor;
                letter-spacing: $letter1;
                font-family: FZLTHJW--GB1-0;
                

            }
        }
        img{
            margin-left: 8px;
        }
      }
      .itemDown {
           box-shadow: 0px 3px 11px 4px rgba(0, 0, 0, 0.11);
        // background: red;
      }
    }
  }
}
</style>