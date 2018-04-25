<template>
<div class="box">
  <div class="Vout reveal-top"  >
        <video src="../../dist/static/img/index/ang2.mp4" autoplay="autoplay" loop="loop" ></video>
        <div class="vBg"></div>
  </div>
  </div>
</template>
<script>
import scrollReveal from  'scrollreveal';
export default {
    name:'newIndex',
    data () {
    return {
        scrollReveal:scrollReveal(),
    }
},
    mounted() {
    this.scrollReveal.reveal(
        '.reveal-top',
         {
//动画的时长
        duration: 2000,
//延迟时间
        delay:500,
//动画开始的位置，'bottom', 'left', 'top', 'right'
        origin: 'top',
//回滚的时候是否再次触发动画
        reset:true,
//在移动端是否使用动画
        mobile: false,
//滚动的距离，单位可以用%，rem等
        distance:'200px',
//其他可用的动画效果
        opacity:0.001,
        easing:'linear',
        scale: 0.9,
    });
  }
}
</script>
<style lang="scss" scoped>
.box{
    .menuOut{
       background: transparent  !important; 
    }
    .ivu-menu{
    background: transparent  !important;
            // & /deep/.ivu-menu-item{
            // color: red !important;
            // background: red;
            //  }  
    } 
    .ivu-menu-dark{
        background: transparent !important; 
    }    
   
    .Vout{ 
        position: relative;
        height: 630px;
        line-height: 1;
        width: 100%;
        overflow: hidden;
        video{
        object-fit: contain;
        position: absolute;
        width: 100%;
        top: 50%;
        left:0;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transition: .2s ease-in-out;
        -webkit-transition: .2s ease-in-out;
        -moz-transition: .2s ease-in-out;
        -ms-transition: .2s ease-in-out;
        -o-transition: .2s ease-in-out;
        }
        .vBg{
            position: absolute;
            left: 0;
            top: 0;
            background: rgba(0,0,0,0.3);
            width: 100%;
            height: 100%;
        }
    }
    
}
</style>


