<template>
  <div id="navheader">
    <div class="header">
      <div class="hed_left">
        <router-link to="/home"
          ><a href="##" style="border: 0px" class="a_txt"
            >小米商城</a
          ></router-link
        >
        <a href="##" class="a_txt">MUI</a>
        <a href="##" class="a_txt">loT</a>
        <a href="##" class="a_txt">云服务</a>
        <a href="##" class="a_txt">天星数科</a>
        <a href="##" class="a_txt">有品</a>
        <a href="##" class="a_txt">小米开放平台</a>
        <a href="##" class="a_txt">企业团购</a>
        <a href="##" class="a_txt">资质证照</a>
        <a href="##" class="a_txt">协议规则</a>
        <a href="##" class="a_txt">下载App</a>
        <a href="##" class="a_txt">智能生活</a>
        <a href="##" style="border: 0px" class="a_txt">Select Location</a>
      </div>
      <div class="hed_right">
        <router-link to="/load"
          ><a href="##" style="border: 0px" class="a_txt">登录</a></router-link
        >
        <a href="##" class="a_txt">注册</a>
        <a href="##" class="a_txt">消息通知</a>
        <a href="##" style="border: 0px" class="a_txt a3"
          ><img src="../assets/img/img1/ia_100000364.png" class="a3_img" />
          购物车(0)</a
        >
      </div>
    </div>
    <div class="fix_app">
      <img src="../assets/img/img1/ia_100000000.png" alt="" />
      <p>下载小米App</p>
    </div>

    <div class="shop">购物车中还没有商品赶紧选购吧</div>
  </div>
</template>
<script>
import { realconsole } from "../assets/js/xm.js";
export default {
  data() {
    return {};
  },
  methodos: {
    methodos1() {
      realconsole();
    },
  },
};
</script>

<style scoped>
.navheader {
  width: 1903px;
}
.header {
  width: 1903px;
  height: 40px;
  background: #333;
}
.header .hed_left,
.hed_right {
  float: left;
}
.header .hed_left {
  margin-right: 160px;
  margin-left: 320px;
}
.header a {
  width: auto;
  font-size: 12px;
  color: #b0b0b0;
  line-height: 40px;
  border-right: 1px solid #424242;
  padding: 0 5px;
}
.fix_app {
  width: 124px;
  height: 150px;
  position: fixed;
  top: 40px;
  left: 861px;
  background: #fff;
  z-index: 20;
  display: none;
}
.fix_app img {
  width: 80%;
  height: 70%;
  margin: 10px 0 0 14px;
}
.fix_app p {
  text-align: center;
}
/* .a3{background-color: #424242;height: 40px;} */
.a3 img {
  width: 20px;
  height: 20px;
  display: inline-block;
}

.shop {
  width: 310px;
  height: 100px;
  background: #fff;
  position: fixed;
  right: 370px;
  top: 40px;
  z-index: 10;
  font-size: 12px;
  text-align: center;
  line-height: 100px;
  color: #fe7c04;
  display: none;
}
</style>