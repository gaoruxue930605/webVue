<template>
   <div>
     <Nav class="trans"></Nav>
     <Button>111</Button>
   </div>
    <!-- <Slider v-model="value" range></Slider> -->
</template>
<script>
import Nav from "../components/Nav";
    export default {
      name:'discover',
      component:{
          Nav
      },
        data () {
            // return {
            //     value: [20, 50]
            // }
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
                 & /deep/.ivu-menu-item:nth-child(3) .ivu-menu-submenu-title {
                     color: #ffffff !important;
                 }
             }
         }
     }
</style>



