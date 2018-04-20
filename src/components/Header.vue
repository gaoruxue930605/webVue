<template>
  <div class="navOut">
      <div class="navIn">
          <!-- logo部分以及导航菜单 -->
        <div class="itemLogo">
            <div>
                <img src="../../dist/static/img/nav/logo.png" alt="">
            </div>
                <router-link tag='div' to="/">首页</router-link>
                <router-link tag='div' to="/discover">发现</router-link>
                <router-link tag='div' to="/artists">手艺人</router-link>     
        </div>
        <div class="itemSearch">

        </div>
        <div class="itemInfor">
           <div>
               <img src="../../dist/static/img/nav/news.png" alt="">
           </div>
           <div>
               <img src="../../dist/static/img/nav/upload.png" alt="">
           </div>
           <div>
              <img src="../../dist/static/img/nav/news.png" alt="">
           </div>

        </div>
      </div>
  </div>
</template>
<script type="text/javascript">
export default {
  name: "Nav"
};
</script>
<style lang="scss">
$margin: 0 auto;
$color: rgb(5, 1, 33);
$colorFont: rgb(255, 255, 255);
.navOut {
  width: 100%;
  height: 67px;
  background: $color;
  line-height: 67px;
  .navIn {
    margin: $margin;
    width: 1200px;
    height: 100%;
    display: grid;
    grid-template-columns: 344px auto 140px;
    .itemLogo {
      display: grid;
      grid-template-columns: auto auto auto auto;
      text-align: left;
      font-size: 16px;
      color: $colorFont;
      img {
        vertical-align: middle;
      }
      div{
          cursor: default;
          &:hover{
              color: red;
          }
      }
    }
    .itemInfor {
     display: grid;
     grid-template-columns: auto auto auto;
    div{
         text-align: right;
         img{
             vertical-align: middle;
         }
     }
    }
  }
}
</style>



