<template>
<div class="menuOut">
    <Menu mode="horizontal" theme="dark" active-name="1" class="clear">
        <MenuItem name="1" class="logo">
              <img src="../../dist/static/img/nav/logo.png" alt="">
        </MenuItem>
        <MenuItem name="1">
            <!-- <Icon type="ios-paper"></Icon> -->
            首页
        </MenuItem>
        <Submenu name="2" >
            <template slot="title">
                <!-- <Icon type="stats-bars"></Icon> -->
               发现
            </template>
            <!-- <MenuGroup > -->
                <MenuItem name="3-1">作品</MenuItem>
                <MenuItem name="3-2">文章</MenuItem>
                <MenuItem name="3-3">影视人</MenuItem>
            <!-- </MenuGroup> -->
            <!-- <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup> -->
        </Submenu>
        <MenuItem name="3">
            <!-- <Icon type="ios-people"></Icon> -->
            活动
        </MenuItem>
        <MenuItem name="4">
            <!-- <Icon type="settings"></Icon> -->
            影视圈招聘
        </MenuItem>
         <MenuItem name="5">
            <!-- <Icon type="settings"></Icon> -->
            关于我们
        </MenuItem>
        
         <MenuItem name="7" class="menuR menuR2 ">
            <!-- <Icon type="settings"></Icon> -->
        登录
        </MenuItem>
         <MenuItem name="6" class="menuR ">
            <!-- <Icon type="settings"></Icon> -->
            <span class="border"> 注册</span>
        </MenuItem>
    </Menu>
    </div>
</template>
<script>
import {Menu,Icon,MenuGroup, MenuItem,Submenu} from 'iview';
    export default {
         name:'Navr',
         components: {
            Menu,
            Icon,
            MenuGroup,
            MenuItem,
            Submenu
        },
    }
</script>
<style lang="scss" scoped>
.menuOut {
    width: 100%;
    background: #2a263e !important;
    .clear:after{
        content: ' ';
        clear: both;
        visibility: hidden;
        display: block;
    }
    .border{
    border-right: 1px solid #ffffff ;
    padding:0 20px;
            
    }
    .ivu-menu {
        color: #ffffff;
        margin: 0 auto;
        text-align: center;
        width: 1200px;
        margin: 0 auto;
        background: #2a263e !important;
         .ivu-menu-item, .ivu-menu-submenu{
        font-size: 16px !important;
        }
        .logo img {
            text-align: left;
            vertical-align: middle
        }
        .logo {
            padding: 0 !important;
        }
        .menuR{
            float: right;
            padding: 0 0px; 
        }
         .menuR2{
             padding-left: 20px;

         }
    }
}

</style>

