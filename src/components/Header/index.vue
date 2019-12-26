<template>
  <div class="the-header fx-cb">
    <img src="@/assets/logo.png" />
    <el-menu router mode="horizontal" default-active="$route.href">
      <template v-for="(item,index) in menuTrees">
        <el-menu-item v-if="!item.children" :key="index" :index="item.href">
          {{ item.name }}
        </el-menu-item>
        <el-submenu v-else :key="index" :index="item.href">
          <template slot="title">{{item.name}}</template>
          <el-menu-item v-for="(item2, index2) in item.children" :key="index2" :index="item2.href">
            {{ item2.name }}{{ item2.href }}
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
    <el-dropdown @command="handleCommand">
      <span><i class="el-icon-user-solid"></i>小小花</span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="loginOut">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'TheHeader',
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      menuTrees: state => state.user.userInfo.menuTrees
    })
  },
  methods: {
    handleCommand(val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss">
.the-header{
  background: #4279de;
  color: #fff;
  padding: 0 20px;
  .el-menu{
    background: none;
    border: none;
    .el-menu-item,
    .el-submenu__title, 
    .el-submenu__title i{
      color: #fff !important;
      border: none !important;
    }
    .el-menu-item:hover,
    .el-menu-item:focus,
    .el-submenu__title:hover,
    .el-submenu__title:focus,
    .el-submenu__title:hover .el-submenu__title,
    .el-submenu__title:focus .el-submenu__title,
    .el-submenu__title:focus i,
    .el-submenu__title:hover i{
      background: none !important;
      color: #81efff !important;
    }
  }
  .el-dropdown{
    color: #fff;
    cursor: pointer;
  }
}
</style>
