<template>
  <div class="box">
  <Nav class="trans">    
  </Nav>
</div>
</template>
<script>
import Nav from "../components/Nav";
export default {
  name:'about',
  components:{
      Nav
  }
}
</script>
<style lang="scss" scoped>
     .box {
         width: 100%;
         height: 100%;
         position: relative;
         .trans {
             & /deep/.ivu-menu {
                 background: transparent !important;
                 & /deep/.ivu-menu-item {
                     color: rgba(255, 255, 255, .7);
                 }
                 & /deep/.ivu-menu-item:nth-child(6) {
                     color: #ffffff !important;
                 }
             }
         }
     }
</style>


