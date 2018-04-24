<template>
  <div>
      <Nav class="trans"></Nav>
      <div>文章</div>
  </div>
</template>
<script>
import Nav from "../components/Nav"
export default {
  name:'article',
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
            & /deep/.ivu-menu-item {
                color: rgba(255, 255, 255, .7);
            & /deep/ .ivu-menu-submenu-title {
                color: red !important;
            }

            }
            
        }
    }
     }
</style>


