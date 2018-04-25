<template>
<div class="menuOut">
    <Menu mode="horizontal" theme="dark" active-name="1" class="clear">
        <MenuItem name="1" class="logo">
              <img src="../../dist/static/img/nav/logo.png" alt="">
        </MenuItem>
        <MenuItem name="1">
        <router-link tag='div' to="/">
         <!-- <slot name="index"></slot> -->
         首页
        </router-link>
        </MenuItem>
        <Submenu name="2" >
          <template slot="title">
            发现
          </template>
          <!-- <MenuGroup > -->
            <MenuItem name="3-1"><router-link tag='div' to="/discover/works">作品</router-link></MenuItem>
            <MenuItem name="3-2"><router-link tag='div' to="/discover/article">文章</router-link> </MenuItem>
            <MenuItem name="3-3"><router-link tag='div' to="/discover/artists">影视人</router-link></MenuItem>
        <!-- </MenuGroup> -->
        </Submenu>
        <MenuItem name="3"> <router-link tag='div' to="/activity">活动</router-link> </MenuItem>
        <MenuItem name="4"><router-link tag='div' to="/announce">影视圈招聘</router-link>  </MenuItem>
        <MenuItem name="5"><router-link tag='div' to="/about">关于我</router-link>   </MenuItem>
        <MenuItem name="7" class="menuR menuR2 ">登录</MenuItem>
        <MenuItem name="6" class="menuR ">
        <span class="border"> 注册</span>
        </MenuItem>
    </Menu>
</div>
</template>
<script>
import { Menu, Icon, MenuGroup, MenuItem, Submenu } from "iview";
export default {
  name: "Nav",
  components: {
    Menu,
    Icon,
    MenuGroup,
    MenuItem,
    Submenu
  }
};
</script>
<style lang="scss" >
.menuOut {
  width: 100%;
 background: #2a263e;
  .clear:after {
    content: " ";
    clear: both;
    visibility: hidden;
    display: block;
    
  }
  .border {
    border-right: 1px solid #ffffff;
    padding: 0 20px;
  }
  .ivu-menu {
    color: #ffffff;
    margin: 0 auto;
    text-align: center;
    width: 1200px;
    margin: 0 auto;
    background: #2a263e;
    .ivu-menu-item,
    .ivu-menu-submenu {
      font-size: 16px !important;
    }
    .logo img {
      text-align: left;
      vertical-align: middle;
    }
    .logo {
      padding: 0 !important;
    }
    .menuR {
      float: right;
      padding: 0 0px;
    }
    .menuR2 {
      padding-left: 20px;
    }
  }
}
</style>

