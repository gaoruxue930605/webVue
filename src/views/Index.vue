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
                  </div>  
                  <div class="swiper-pagination"></div>  
                  <!-- <div class="swiper-button-prev"></div>
                  <div class="swiper-button-next"></div> -->
            </div>  
          </div>
          <!-- 空隙 -->
          <div></div>
          <!-- 右侧 -->
          <div class="code">
            <div class="itemUp">
        111111111111
            </div>
            <div>

            </div>
            <div class="itemDown">
33333333333333
            </div>
          </div> 
        </div>
      </div> 
      <Footer></Footer>
  </div>
</template>
<script type="text/javascript">
    import Nav from "../components/Header";
    import Footer from "../components/Footer";
    import Swiper from "../../dist/static/js/swiper.min.js";

    export default {
        name: "Index",
        // data(){
        //  swiper:['../../dist/static/img/banner1.png','../../dist/static/img/banner2.png']
        // },
        components: {
            Nav,
            Footer
        },
        mounted() {
            var mySwiper = new Swiper(".swiper-container", {
                autoplay: true, //可选选项，自动滑动
                loop: true,
                // effect: "cube",
                // cubeEffect: {
                //     slideShadows: false,
                //     shadow: false,
                //     shadowOffset: 100,
                //     shadowScale: 0.6
                // },
                //分页器
                pagination: {
                  el: ".swiper-pagination"
                },
                // navigation: {
                //   nextEl: ".swiper-button-next",
                //   prevEl: ".swiper-button-prev"
                // },
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
    .box {
        background: $bgcolor;
        width: $width;
        height: $height;
        display: grid;
        grid-template-rows: 67px auto 130px;
    }

    .content {
       width: 1200px;
       margin:0 auto; 
       .itemSwiper {
           width: 100%;
           margin: 32px auto 62px;
           display: grid;
           grid-template-columns: 770px auto 400px;
           background: blue;
           font-size: 0;
           #banner {
               width: 770px;
               img{
                 font-size: 0;
               }
           }
           .code {
               width: 400px;
               display: grid;
               grid-template-rows: 220px auto 168px;
               .itemUp {
                   background: green;
                   font-size: 20px;
               }
               .itemDown {
                   background: red;
               }
           }
       }
     
    }
</style>