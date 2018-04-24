<template>
<div class="box">
  <Nav class="trans"> 
      <span slot="index">首页</span> 
  </Nav>
  
  <div class="Vout">
        <video src="../../dist/static/img/index/ang2.mp4" autoplay="autoplay" loop="loop" ></video>
        <div class="vBg"></div>
  </div>
  </div>
</template>
<script>
import Nav from "../components/Nav";
export default {
    name:'newIndex',
    components:{
        Nav
    }
  
}
</script>
<style lang="scss" scoped>
.box{
    width: 100%;
    height: 100%;
    position: relative;
    .trans{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        background: transparent; 
        & /deep/.ivu-menu{
           background: transparent  !important;
            // & /deep/.ivu-menu-item{
            // color: red !important;
            // background: red;
            //  }  
        } 
        .ivu-menu-dark{
            background: transparent !important; 
        }

        
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


