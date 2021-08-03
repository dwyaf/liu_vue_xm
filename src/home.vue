<template>
  <div id="home">
    <div class="all">
      <div class="conent">
        <div class="srarch">
          <div class="logo">
            <img src="./assets/img/img1/ia_100000484.png" alt="" />
          </div>
          <!-- 导航下方 -->
          <div class="nav">
            <ul>
              <li
                v-for="(item, index) in arrList"
                :key="index.value"
                class="btn"
              >
                <a href="#">{{ item.name }}</a>
              </li>
            </ul>
          </div>
          <!-- 隐藏的图片 -->
          <div class="phone" v-for="(i, vau) in arrList" :key="vau">
            <ul>
              <li v-for="(n, id) in i.imgarr" :key="id">
                <div style="border-right: 1px solid #ccc">
                  <img :src="n.src" alt="" />
                </div>
                <p>{{ n.name }}</p>
                <p class="pic">{{ n.money }}</p>
              </li>
            </ul>
          </div>
          <!-- 搜索框 -->
          <div>
            <input type="text" placeholder="家电" class="search" />
            <span class="search_joint">
              <!-- <img src="./img/img2/serch1.jpeg" alt=""> -->
            </span>
            <div class="search_txt">
              <p v-for="(item, index) in ptxt" :key="index.value">
                {{ item.name }}
              </p>
            </div>
          </div>
        </div>
        <!-- 轮播图 -->
        <div class="sideshow">
          <!-- <el-carousel :interval="5000" arrow="always" class="he">
            <el-carousel-item v-for="(item, index) in sideimg" :key="index">
              <img :src="item.src" alt="" />
            </el-carousel-item>
          </el-carousel> -->

          <el-carousel trigger="click" height="460px">
                <el-carousel-item v-for="(item,index) in sideimg" :key="index">
                    <img :src="item.src" />
                </el-carousel-item>
                </el-carousel>
        </div>
        <!-- 轮播上方侧边栏 -->
        <div class="sde">
          <div class="sdebar">
            <ul class="barul">
              <li class="bar" v-for="(item, index) in side" :key="index.value">
                <p>{{ item.name }}</p>
                <span>&gt;</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- 轮播上方图片 -->
        <div class="phoneMode" v-for="(item, index) in side" :key="index">
          <ul>
            <li v-for="(n, id) in item.arr" :key="id">
              <img :src="n.src" /><span>{{ n.type }}</span>
            </li>
          </ul>
        </div>
        <!-- 轮播下方 -->
        <div class="zone">
          <div class="zone_txt">
            <ul>
              <li v-for="(item, index) in ztxt" :key="index">
                <a href="##">
                  <img :src="item.src" alt="" />
                  <p>{{ item.name }}</p>
                </a>
              </li>
            </ul>
          </div>
          <div class="zone_img">
            <ul>
              <li v-for="(item, index) in zimg" :key="index">
                <img :src="item.src" alt="" />
              </li>
            </ul>
          </div>
        </div>
        <!-- 相同样式部分 -->
      </div>
    </div>
    <div class="reuse">
      <div class="alike">
        <!-- 手机 -->
        <div class="cell_all">
          <div class="big_img">
            <img src="./assets/img/img2/ia_100000004544.jpg" alt="" />
          </div>
          <p class="public">手机<span>查看更多 》</span></p>
          <div class="public_img">
            <div class="public_img1">
              <img src="./assets/img/img2/ia_100000004543.jpg" />
            </div>
            <div class="cell">
              <li
                v-for="(item, index) in phone_img"
                :key="index"
                class="cell_img"
              >
                <img :src="item.src" alt="" />
                <h3>{{ item.name }}</h3>
                <p>{{ item.txt }}</p>
                <span>{{ item.money }}</span>
              </li>
            </div>
          </div>
        </div>
        <!-- 电视-周边部分 -->

        <div class="smart" v-for="(item, index) in pub" :key="index">
          <div class="smart_logo">
            <img :src="item.logo" alt="" />
          </div>
          <div class="smart_txt">
            <span>{{ item.name }}</span>
            <ul class="sma1">
              <li class="sma">热门</li>
              <li v-for="(a, index) in item.l_txt" :key="index">
                {{ a.tx }}
              </li>
            </ul>
          </div>

          <div class="sma_all">
            <div class="sma_lef">
              <div v-for="(b, index) in item.lef_img" :key="index">
                <img :src="b.src" alt="" />
              </div>
            </div>
            <div class="sma_pic1">
              <div class="sma_pic sma_show">
                <ul>
                  <li v-for="(c, index) in item.rig" :key="index">
                    <img :src="c.src" alt="" />
                    <h3>{{ c.h3 }}</h3>
                    <p>{{ c.name }}</p>
                    <span>{{ c.money }}</span>
                    <span class="del">{{ c.del }}</span>
                  </li>
                </ul>
              </div>
              <div class="sma_pic">
                <ul>
                  <li v-for="(d, index) in item.sed" :key="index">
                    <img :src="d.src" alt="" />
                    <h3>{{ d.h3 }}</h3>
                    <p>{{ d.name }}</p>
                    <span>{{ d.money }}</span>
                    <span class="del">{{ d.del }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- 视频 -->
        <div class="video">
          <div class="vid_logo">
            <img src="./assets/img/img2/ia_100000004544.jpg" alt="" />
          </div>
          <div class="video_txt">
            <p class="p">视频<span>查看更多 >></span></p>
          </div>
          <div class="play">
            <ul>
              <li v-for="(item, index) in video" :key="index">
                <img :src="item.src" alt="" />
                <div class="oval"><div class="sanjiao"></div></div>
                <p>{{ item.name }}</p>
                <span>{{ item.txt }}</span>
              </li>
            </ul>
          </div>

          <div class="player" v-for="(item, index) in video" :key="index">
            <div class="player_txt">
              <h3>2021年新品发布会春季第一场</h3>
              <span class="sto">×</span>
            </div>
            <div>
              <video controls class="playing">
                <source :src="item.vdo" />
                你的浏览器版本太低，
              </video>
            </div>
          </div>
        </div>
        <!-- 右侧固定栏 -->
        <div class="fixation">
          <ul class="fixul">
            <li v-for="(item, index) in fixrig" :key="index" class="fixpic">
              <img :src="item.src" alt="" class="fiximg">
              <p>{{ item.txt }}</p>
            </li>
          </ul>
        </div>

        <!-- 二维码 -->
        <div class="evens">
          <img src="./assets/img/img1/ia_100000000.png" alt="" />
          <p>扫码领取新</p>
          <p>人百元礼包</p>
        </div>

        <!-- 闭合标签 -->
      </div>
    </div>
  </div>
</template>
<script>
import { realconsole1 } from "./assets/js/home.js";
export default {
  data() {
    return {
      arrList: [
        {
          id: 1,
          name: "小米手机",
          imgarr: [
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
          ],
        },
        {
          id: 1,
          name: "Redmi红米",
          imgarr: [
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
          ],
        },
        {
          id: 1,
          name: "电视",
          imgarr: [
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
          ],
        },
        {
          id: 1,
          name: "笔记本",
          imgarr: [
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
          ],
        },
        {
          id: 1,
          name: "家电",
          imgarr: [
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
          ],
        },
        {
          id: 1,
          name: "路由器",
          imgarr: [
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
          ],
        },
        {
          id: 1,
          name: "智能硬件",
          imgarr: [
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
          ],
        },
        {
          id: 1,
          name: "服务",
          imgarr: [
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
          ],
        },
        {
          id: 1,
          name: "社区",
          imgarr: [
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
            {
              src: "./src/assets/img/img2/ia_100000004909.png",
              name: "小米MIX FOLD",
              money: "1999",
            },
          ],
        },
      ],

      ptxt: [
        { name: "全部商品" },
        { name: "空调" },
        { name: "小米11" },
        { name: "小米手机" },
        { name: "黑鲨4" },
        { name: "红米" },
        { name: "耳机" },
      ],
      sideimg: [
        { src: "./src/assets/img/img1/ia_100000224.webp" },
        { src: "./src/assets/img/img1/ia_100000225.webp" },
        { src: "./src/assets/img/img1/ia_100000226.webp" },
        { src: "./src/assets/img/img1/ia_100000227.webp" },
        
      ],

      side: [
        {
          name: "手机 电话卡",
          arr: [
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
          ],
        },
        {
          name: "电视 盒子",
          arr: [
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
          ],
        },
        {
          name: "笔记本 显示器",
          arr: [
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
          ],
        },
        {
          name: "家电 插线板",
          arr: [
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
          ],
        },
        {
          name: "出行 穿戴",
          arr: [
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
          ],
        },
        {
          name: "智能 路由器",
          arr: [
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
          ],
        },
        {
          name: "电源 配件",
          arr: [
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
          ],
        },
        {
          name: "健康 儿童",
          arr: [
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
          ],
        },
        {
          name: "耳机 音箱",
          arr: [
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
          ],
        },
        {
          name: "生活 箱包",
          arr: [
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },

            {
              src: "./src/assets/img/img1/ia_100000001.webp",
              type: "小米MIX FOLD",
            },
          ],
        },
      ],
      ztxt: [
        { src: "./src/assets/img/img1/ia_100000229.png", name: "小米秒杀" },
        { src: "./src/assets/img/img1/ia_100000230.png", name: "企业团购" },
        { src: "./src/assets/img/img1/ia_100000231.png", name: "F码通道" },
        { src: "./src/assets/img/img1/ia_100000232.png", name: "米粉卡" },
        { src: "./src/assets/img/img1/ia_100000233.png", name: "以旧换新" },
        { src: "./src/assets/img/img1/ia_100000234.png", name: "话费充值" },
      ],
      zimg: [
        { src: "./src/assets/img/img1/ia_100000235.jpg" },
        { src: "./src/assets/img/img1/ia_100000236.jpg" },
        { src: "./src/assets/img/img1/ia_100000237.png" },
      ],
      phone_img: [
        {
          src: "./src/assets/img/img2/ia_100000004542.jpg",
          txt: "天机1100年度旗舰芯，VC液冷散热",
          name: "小米MIX FOLD",
          money: "1999元起",
        },
        {
          src: "./src/assets/img/img2/ia_100000004542.jpg",
          txt: "天机1100年度旗舰芯，VC液冷散热",
          name: "小米MIX FOLD",
          money: "1999",
        },
        {
          src: "./src/assets/img/img2/ia_100000004542.jpg",
          txt: "天机1100年度旗舰芯，VC液冷散热",
          name: "小米MIX FOLD",
          money: "1999",
        },
        {
          src: "./src/assets/img/img2/ia_100000004542.jpg",
          txt: "天机1100年度旗舰芯，VC液冷散热",
          name: "小米MIX FOLD",
          money: "1999",
        },
        {
          src: "./src/assets/img/img2/ia_100000004542.jpg",
          txt: "天机1100年度旗舰芯，VC液冷散热",
          name: "小米MIX FOLD",
          money: "1999",
        },
        {
          src: "./src/assets/img/img2/ia_100000004542.jpg",
          txt: "天机1100年度旗舰芯，VC液冷散热",
          name: "小米MIX FOLD",
          money: "1999",
        },
        {
          src: "./src/assets/img/img2/ia_100000004542.jpg",
          txt: "天机1100年度旗舰芯，VC液冷散热",
          name: "小米MIX FOLD",
          money: "1999",
        },
        {
          src: "./src/assets/img/img2/ia_100000004542.jpg",
          txt: "天机1100年度旗舰芯，VC液冷散热",
          name: "小米MIX FOLD",
          money: "1999",
        },
      ],
      pub: [
        {
          logo: "./src/assets/img/img2/ia_100000004530.jpg",
          name: "电视",
          l_txt: [{ tx: "电视影音" }],
          lef_img: [
            { src: "./src/assets/img/img2/ia_100000004528.jpeg" },
            { src: "./src/assets/img/img2/ia_100000004524.jpg" },
          ],
          rig: [
            {
              src: "./src/assets/img/img1/ia_100003174.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003176.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003174.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003174.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003174.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003174.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003174.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
          ],
          sed: [
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
          ],
        },

        {
          logo: "./src/assets/img/img2/ia_100000004497.jpg",
          name: "智能",
          l_txt: [{ tx: "安防" }],
          lef_img: [
            { src: "./src/assets/img/img1/ia_100003261.webp" },
            { src: "./src/assets/img/img1/ia_100003262.webp" },
          ],
          rig: [
            {
              src: "./src/assets/img/img1/ia_100003174.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003176.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003174.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003174.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003174.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003174.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003174.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
          ],
          sed: [
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
          ],
        },

        {
          logo: "./src/assets/img/img2/ia_100000004469.jpg",
          name: "搭配",
          l_txt: [{ tx: "耳机音箱" }],
          lef_img: [
            { src: "./src/assets/img/img1/ia_100003283.webp" },
            { src: "./src/assets/img/img1/ia_100003284.webp" },
          ],
          rig: [
            {
              src: "./src/assets/img/img1/ia_100003174.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003176.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003174.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003174.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003174.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003174.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003174.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
          ],
          sed: [
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
          ],
        },

        {
          logo: "./src/assets/img/img2/ia_100000004444.jpg",
          name: "配件",
          l_txt: [{ tx: "充电器" }],
          lef_img: [
            { src: "./src/assets/img/img1/ia_100003300.webp" },
            { src: "./src/assets/img/img1/ia_100003301.webp" },
          ],
          rig: [
            {
              src: "./src/assets/img/img1/ia_100003174.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003176.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003174.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003174.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003174.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003174.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003174.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
          ],
          sed: [
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
          ],
        },

        {
          logo: "./src/assets/img/img2/ia_100000004412.jpg",
          name: "周边",
          l_txt: [{ tx: "出行" }],
          lef_img: [
            { src: "./src/assets/img/img1/ia_100003314.webp" },
            { src: "./src/assets/img/img1/ia_100003315.webp" },
          ],
          rig: [
            {
              src: "./src/assets/img/img1/ia_100003174.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003176.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003174.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003174.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003174.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003174.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003174.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
          ],
          sed: [
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
            {
              src: "./src/assets/img/img1/ia_100003175.webp",
              name: "天机1100年度旗舰芯，VC液冷散热",
              money: "1599元",
              del: "1999",
              h3: "Note 10 Pro",
            },
          ],
        },
      ],
      video: [
        {
          src: "./src/assets/img/img1/ia_100003331.webp",
          name: "2021年春季发布会第一场",
          txt: "",
          vdo: "./src/assets/img/img1/vid.mp4",
        },
        {
          src: "./src/assets/img/img1/ia_100003332.webp",
          name: "2021年春季发布会第一场",
          txt: "Redmi 10x系列发布会",
          vdo: "./src/assets/img/img1/vid.mp4",
        },
        {
          src: "./src/assets/img/img1/ia_100003333.webp",
          name: "2021年春季发布会第一场",
          txt: "",
          vdo: "./src/assets/img/img1/vid.mp4",
        },
        {
          src: "./src/assets/img/img1/ia_100003334.webp",
          name: "2021年春季发布会第一场",
          txt: "",
          vdo: "./src/assets/img/img1/vid.mp4",
        },
      ],
      fixrig: [
        { src: "./src/assets/img/img1/ia_100000355.png", txt: "手机App" },
        { src: "./src/assets/img/img1/ia_100000358.png", txt: "个人中心" },
        { src: "./src/assets/img/img1/ia_100000360.png", txt: "售后服务" },
        { src: "./src/assets/img/img1/ia_100000362.png", txt: "人工客服" },
        { src: "./src/assets/img/img1/ia_100000364.png", txt: "购物车" },
        { src: "./src/assets/img/img1/ia_200005400l.png", txt: "回到顶部" },
      ],
    };
  },

  mounted() {
    // this.getData()
  },
  methods: {
    // getData(){
    //     var _this = this
    //     // 使用$http(axios)发送请求获取数据
    //     this.$http.get("src/data/srarch.data").then(function (res){
    //         _this.arrList = res.data
    //     }).catch(function (error){
    //         console.log(error)
    //     })
    // },
    methodos1() {
      realconsole();
    },
  },
};
</script>
<style scoped>
.all {
  width: 1903px;
  height: 784px;
  text-align: center;
}
.conent {
  display: inline-block;
}
.srarch {
  width: 1226px;
  height: 100px;
}
.logo {
  width: 56px;
  height: 56px;
  float: left;
}
.logo img {
  width: 56px;
  height: 56px;
  margin: 20px 0px 0 0px;
}
.nav {
  width: 532px;
  height: 88px;
  float: left;
  margin-left: 184px;
}
.nav ul li {
  float: left;
  width: auto;
  margin-right: 10px;
}
.nav ul li a {
  font-size: 16px;
  color: #333;
  line-height: 88px;
}
.nav ul li a:hover {
  color: #fe6a00;
}
.phone {
  width: 1903px;
  height: 200px;
  background: #fff;
  position: fixed;
  top: 140px;
  border-top: 1px solid #ccc;
  left: 0px;
  z-index: 10;
  display: none;
}
.phone ul {
  width: 70%;
  height: 200px;
  margin: 0 0 0 340px;
}
.phone ul li {
  float: left;
  width: 180px;
  padding: 35px 12px 0px;
  text-align: center;
}
.phone ul li p {
  font-size: 12px;
  margin-top: 10px;
}
.phone ul li .pic {
  color: #fe6a00;
  margin-top: 1px;
}

.search {
  width: 245px;
  height: 50px;
  outline: none;
  border: 1px solid #ccc;
  padding-left: 10px;
  float: left;
  margin: 23px 0 0 136px;
}
.search_joint {
  width: 52px;
  height: 50px;
  display: inline-block;
  border: 1px solid #ccc;
  border-left: 0px;
  margin: 23px 0 0 -8px;
}
.search_txt {
  width: 245px;
  height: 220px;
  background: #fff;
  border: 1px solid red;
  border-top: 0px;
  position: fixed;
  left: 1247px;
  top: 115px;
  padding-left: 10px;
  display: none;
  z-index: 3;
}
.search_txt p {
  font-size: 15px;
  margin-top: 10px;
}

/* 轮播 */
.sideshow {
  width: 1226px;
  height: 460px;
  position: absolute;
  z-index: 1;
  float: left;
}

/* .sideshow img{width: 1226px;height: 460px;} */
/* .he {
  height: 460px;
}
.el-carousel__item img {
  width: 1226px;
  height: 460px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
  
  height: 460px;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
  height: 460px;
}
.sideshow .el-carousel__arrow--left {
  left: 251px;
}

.lunbo{width: 1226px;height: 460px;margin: 0 auto 0 auto;overflow:hidden;position: relative;background: lightgreen;}
.el-carousel__container{
    width: 1226px;height: 460px;position: relative;
}
.el-carousel__item img{
   width: 1226px;height: 460px;
}
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
} */
.el-carousel__indicators{width: 400px;height: 21px;position: absolute;left: 994px; bottom: 21px;text-align: right;line-height: 21px;}
.el-carousel__indicator{width: 5px;height: 5px;border: 2px solid #fff;border-color: hsla(0,0%,100%,.3);border-radius: 10px;overflow: hidden;
    background: rgba(0,0,0,.4);opacity: 1;margin: 0 2px;line-height: 21px;display: inline-block;padding: 0;font-size: 0;}
.el-carousel__indicator:hover{border: 2px solid hsla(0,0%,100%,.3);background: hsla(0,0%,100%,.4);border-color: rgba(0,0,0,.4);}
.is-active{background: hsla(0,0%,100%,.4);border-color: rgba(0,0,0,.4);}
.el-carousel__button{width: 5px;height: 5px;border: 2px solid #fff;border-color: hsla(0,0%,100%,.3);border-radius: 10px;overflow: hidden;
    background: rgba(0,0,0,.4);opacity: 1;margin: 0 2px;line-height: 21px;display: inline-block;padding: 0;font-size: 0;}
.el-carousel__arrow--left {
    left: 234px;
    background: url(./assets/img/img1/ia_100000374.png);
    background-position: -83px 50%;
    }
.el-carousel__arrow {
    width: 41px;
    height: 69px;
    cursor: pointer;
    border: 0px solid red;
    border-radius: 0px;
    }
.el-icon-arrow-left::before {
    content: "";
    }
.el-carousel__arrow--right {
    background: url(./assets/img/img1/ia_100000374.png);
    background-position: -123px 50%;
    }
.el-icon-arrow-right::before {
    content: "";
    }

/* 轮播侧边栏 */
.sde {
  width: 1226px;
  height: 460px;
  position: absolute;
}
.sdebar {
  width: 234px;
  height: 460px;
  position: relative;
  z-index: 2;
  background: rgba(105, 101, 101, 0.6);
}
.sdebar .barul {
  position: relative;
  z-index: 3;
  padding-top: 15px;
}
.sdebar .barul .bar {
  width: 234px;
  height: 42px;
  line-height: 42px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
}
.sdebar .barul .bar:hover {
  background: #fe6a00;
}
.sdebar .barul .bar p {
  position: relative;
  top: 0px;
}
.sdebar .barul .bar span {
  display: inline-block;
  font-size: 20px;
  position: relative;
  left: 100px;
  top: -43px;
}

.phoneMode {
  width: 991px;
  height: 440px;
  position: absolute;
  z-index: 4;
  background: #fff;
  left: 574px;
  top: 140px;
  padding-top: 20px;
  display: none;
}
.phoneMode ul li {
  float: left;
  width: 228px;
  height: 75px;
  padding-left: 10px;
  line-height: 75px;
}
.phoneMode ul li span {
  display: inline-block;
  font-size: 14px;
  color: #333333;
  top: -15px;
  position: relative;
  left: 5px;
}
.phoneMode ul li span:hover {
  color: #fe6a00;
}

/* 轮播下方*/
.zone {
  width: 1226px;
  height: 172px;
  float: left;
  position: absolute;
  top: 630px;
}
.zone .zone_txt {
  width: 234px;
  height: 100%;
  float: left;
  background: #5f5750;
  margin-right: 10px;
}

.zone .zone_txt li {
  color: #fff;
  position: relative;
  font-size: 12px;
  text-align: center;
  float: left;
  width: 70px;
  height: 82px;
  padding: 16px 3px 0 3px;
  opacity: 0.5;
}
.zone .zone_txt li:hover {
  opacity: 1;
}
.zone .zone_txt li::before {
  content: "";
  width: 1px;
  height: 50px;
  position: absolute;
  background: #665e57;
  left: 81px;
}
.zone .zone_txt li::after {
  content: "";
  width: 50px;
  height: 1px;
  position: absolute;
  background: #665e57;
  left: 10px;
  top: 73px;
}
.zone .zone_txt li img {
  width: 24px;
  height: 24px;
}
.zone .zone_txt li a {
  color: #fff;
}
.zone .zone_img {
  width: 982px;
  height: 172px;
  float: left;
}
.zone .zone_img li {
  width: 317px;
  height: 172px;
  float: left;
  margin-right: 15px;
}
.zone .zone_img ul li:nth-child(3) {
  margin-right: 0px;
}
.zone .zone_img img {
  width: 100%;
  height: 100%;
}
/* 相同样式部分 */
.reuse {
  width: 1903px;
  height: 5571px;
  background: #f5f5f5;
  text-align: center;
}
.alike {
  display: inline-block;
}
.cell_all {
  width: 1226px;
  height: 798px;
  float: left;
  margin-bottom: 25px;
}
.big_img {
  width: 1226px;
  height: 120px;
}
.big_img img {
  width: 100%;
  height: 100%;
}
/* 手机部分 */

.reuse .public {
  font-size: 22px;
  color: #333;
  width: 1226px;
  height: 58px;
  line-height: 58px;
  width: 1226px;
}
.reuse .public span {
  font-size: 16px;
  color: #424242;
  display: inline-block;
  margin-left: 1097px;
  cursor: pointer;
}
.reuse .public span:hover {
  color: #fe6a00;
}
.reuse .public_img {
  width: 1226px;
  height: 614px;
}
.reuse .public_img1 {
  width: 234px;
  height: 614px;
  float: left;
  margin-right: 10px;
}
.reuse .public_img1 img {
  width: 100%;
  height: 100%;
}
.reuse .public_img1:hover {
  box-shadow: 0px 0px 25px rgba(46, 46, 46, 0.2);
  width: 230px;
  height: 612px;
}

.public_img .cell {
  width: 980px;
  height: 614px;
  float: left;
}
.public_img .cell .cell_img {
  float: left;
  width: 234px;
  height: 297px;
  margin: 0px 14.5px 20px 0px;
  text-align: center;
  background: #fff;
}
.public_img .cell .cell_img:nth-child(4) {
  margin-right: 0px;
}
.public_img .cell .cell_img:nth-child(8) {
  margin-right: 0px;
}
/* .public_img .cell .cell_first{float: left;width: 100%;height: 300px;} */
.public_img .cell .cell_img:hover {
  box-shadow: 0px 0px 25px rgba(46, 46, 46, 0.2);
}
.public_img .cell .cell_img img {
  width: 160px;
  height: 160px;
  margin: 20px 0 0 20px;
}
.public_img .cell .cell_img span {
  display: block;
  color: 14px;
  color: #fe6a00;
}
.public_img .cell .cell_img p {
  font-size: 12px;
  color: #b0b0b0;
  margin-bottom: 10px;
}
.public_img .cell .cell_img h3 {
  font-size: 14px;
  color: #333;
  margin-top: 10px;
}

/* 相同部分 */

.smart {
  width: 1226px;
  height: 798px;
}
.smart_logo {
  width: 1226px;
  height: 120px;
}
.smart_logo img {
  width: 100%;
  height: 100%;
}

.smart_txt {
  font-size: 22px;
  color: #333;
  width: 1226px;
  height: 58px;
  line-height: 58px;
  float: left;
  margin-top: 140px;
}
.smart_txt span {
  display: inline-block;
  margin-left: -1172px;
}
.smart_txt ul {
  font-size: 16px;
  margin: -58px 0 0 1080px;
  width: auto;
  height: 58px;
}
.smart_txt .sma2 {
  font-size: 16px;
  margin: -58px 0 0 1000px;
  width: auto;
  height: 58px;
}

.smart_txt ul li {
  list-style-type: none;
  float: left;
  margin-right: 25px;
  cursor: pointer;
}
.smart_txt ul .sma {
  color: #fe6a00;
  border-bottom: 2px solid #fe6a00;
  height: 50px;
}
.sma_all {
  width: 1226px;
  height: 614px;
  float: left;
  margin-bottom: 30px;
}
.sma_lef {
  float: left;
  width: 234px;
  height: 614px;
}
.sma_lef img {
  width: 100%;
  height: 48%;
  margin-bottom: 10px;
}

.sma_pic {
  width: 992px;
  height: 614px;
  float: left;
  display: none;
}
.sma_pic ul {
  width: 100%;
  height: 614px;
  padding-left: 15px;
}
.sma_pic li {
  float: left;
  width: 234px;
  height: 297px;
  margin: 0px 14.5px 20px 0px;
  text-align: center;
  background: #fff;
}
.sma_pic li:nth-child(4) {
  margin-right: 0px;
}
.sma_pic li:nth-child(8) {
  margin-right: 0px;
}
.sma_pic li span {
  display: inline-block;
  color: 14px;
  color: #fe6a00;
}
.sma_pic li .del {
  text-decoration: line-through;
  display: inline-block;
  color: #b0b0b0;
}
.sma_pic li p {
  font-size: 12px;
  color: #b0b0b0;
  margin-bottom: 10px;
}
.sma_pic li h3 {
  font-size: 14px;
  color: #333;
  margin-top: 10px;
}

.sma_pic img {
  width: 160px;
  height: 160px;
  margin: 20px 0 0 0px;
}
.sma_pic li:hover {
  box-shadow: 0px 0px 25px rgba(46, 46, 46, 0.2);
}
.sma_pic .tv_left {
  margin-left: 0px;
}
.sma_pic .tv_left img {
  width: 100%;
  height: 100%;
  margin-top: 0px;
}
.sma_show {
  display: block;
  float: left;
}

/* 视频 */
.video {
  width: 1226px;
  height: 466px;
  float: left;
  position: relative;
}
.video .vid_logo {
  width: 1226px;
  height: 120px;
  margin-bottom: 0px;
}
.video .vid_logo img {
  width: 100%;
  height: 100%;
}
.video .video_txt p {
  font-size: 22px;
  color: #333;
  width: 1226px;
  height: 58px;
  line-height: 58px;
}
.video .video_txt p span {
  font-size: 16px;
  color: #424242;
  display: inline-block;
  margin-left: 1028px;
  cursor: pointer;
}
.video .video_txt p span:hover {
  color: #fe6a00;
}
.video .play {
  width: 100%;
  height: 285px;
}
.video .play ul li {
  width: 287px;
  float: left;
  height: 100%;
  background: white;
  margin-right: 25px;
  height: 285px;
}
.video .play ul li:nth-child(4) {
  margin-right: 0px;
}
.video .play ul li:hover {
  box-shadow: 0px 0px 25px rgba(46, 46, 46, 0.2);
}
.video .play ul li img {
  width: 100%;
  height: 180px;
  float: left;
}
.video .play ul li p {
  color: #333;
  font-size: 14px;
  text-align: center;
  float: left;
  width: 100%;
  margin: 25px 0 6px 0;
}
.video .play ul li span {
  display: block;
  color: #b0b0b0;
  font-size: 12px;
  text-align: center;
}
.video .oval {
  width: 36px;
  height: 21px;
  position: relative;
  top: 144px;
  left: 15px;
  border-radius: 20px;
  border: 2px solid #fff;
  background: #000;
  margin-bottom: 0px;
}
.video .oval:hover {
  background: #fe6a00;
}
.video .oval .sanjiao {
  width: 0px;
  height: 0px;
  border-top: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 7px solid transparent;
  border-left: 7px solid #fff;
  position: relative;
  left: 16px;
  top: 3px;
}
/* 视频播放 */
.video .player {
  width: 880px;
  height: 495px;
  position: relative;
  z-index: 1;
  left: 199px;
  top: -301px;
  display: none;
  background: #ddd;
}
.video .player .player_txt {
  width: 880px;
  height: 60px;
  background: #f5f5f5;
}
.video .player .player_txt h3 {
  font-size: 18px;
  color: #424242;
  line-height: 60px;
  padding-left: 15px;
  font-weight: 200;
  width: 50%;
  float: left;
  margin-right: 386px;
}
.video .player .player_txt span {
  display: inline-block;
  font-size: 24px;
  color: #757575;
  width: 24px;
  height: 25px;
  margin-top: 10px;
  font-weight: bold;
  border-radius: 20px;
}
.video .player .player_txt span:hover {
  background: red;
}
.video .player .playing {
  width: 880px;
  height: 435px;
  margin-top: -3px;
}

.video .ply {
  display: block;
}
.video .ply1 {
  display: none;
}

/* 右侧固定栏 */
.fixation {
  width: 84px;
  height: 570px;
  position: fixed;
  right: 0px;
  top: 197px;
  z-index: 2;
}
.fixation ul {
  width: 100%;
  height: 100%;
}
.fixation ul li {
  width: 100%;
  height: 92px;
  border-bottom: 1px solid #ccc;
  background: #fff;
}
.fixation ul li:nth-child(5){border: 0px;}
.fixation ul li:nth-child(6){display: none;position: relative;top: 20px;border: 0px;}
.fixation ul li img {
  width: 30px;
  height: 30px;
  margin: 20px 0 6px 0px;
}
.fixation ul li p {
  text-align: center;
  font-size: 14px;
  color: #757575;
}
.fixation ul li:hover p {
  color: #fe6a00;
}
.fixation .back {
  display: none;
}

/* 二维码 */
.evens {
  width: 124px;
  height: 150px;
  position: fixed;
  right: 93px;
  top: 271px;
  background: #fff;
  display: none;
}
.evens img {
  width: 70%;
  height: 70%;
  margin: 10px 0 0 20px;
}
.evens p {
  text-align: center;
  font-size: 14px;
  color: #b0b0b0;
}
</style>





