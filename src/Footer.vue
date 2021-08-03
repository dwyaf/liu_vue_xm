<template>
    <div id="footer">
        <div class="foot">
            <div class="nav_end">
                <ul>
                    <li v-for="(item,index) in arrList.user.use1" :key= "index">
                       {{item.name}}
                    
                    
                    </li>
                </ul>
            </div>

            <div class="left_end">
					<ul v-for="(item,index) in arrList.end.end_txt" :key= "index">
						<li>{{item.name}}</li>
						<li class="hov" v-for="(i,index) in item.txt" :key= "index">{{i.txt1}}</li>
						
					</ul>
					

					<div class="right_end">
						<img src="./assets/img/img1/end_img.png" alt="">
                        
					</div>
					
			</div>
            <div class="base">
                <img src="./assets/img/img1/ia_100000484.png" class="logo_end">
                <div class="base_rig">
                     <ul>
                        <li v-for="(item,index) in arrList.site.sited" :key= "index">
                            {{item.name}}
                        </li>
                    </ul>
                    
                  



                    <p>© mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2020]0276-042号</p>
                    <p>(京)网械平台备字（2018）第00005号 互联网药品信息服务资格证 (京)-非经营性-2014-0090 营业执照 医疗器械质量公告</p>
                    <p>增值电信业务许可证 网络食品经营备案 京食药网食备202010048   食品经营许可证</p>
                    <p>违法和不良信息举报电话：171-5104-4404 知识产权侵权投诉 本网站所列数据，除特殊说明，所有数据均出自我司实验室测试</p>
                    <div>
                        
                              <img :src="item.src"  v-for="(item,index) in arrList.img.end_img" :key= "index" class="flash">
                       
                      
                    </div>
                </div>
                <p class="live">让全球每个人都能享受科技带来的美好生活</p>
                
               
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return{
          arrList:''
      }  
    },
    mounted(){
        this.getData()
    },
    methods:{
        getData(){
            var _this = this
            // 使用$http(axios)发送请求获取数据
            this.$http.get("http://127.0.0.1:3000/aaa").then(function (res){
                _this.arrList = res.data
                console.log(res.data)
            }).catch(function (error){
                console.log(error)
            })
        }
    }
}
</script>
<style scoped>
#footer{width: 1903px;height: 500px;text-align: center;}
.foot{display: inline-block;}

.nav_end{width: 1226px;height: 80px;border-bottom: 1px solid #ccc;float: left;}
.nav_end li{width: 239px;height: 25px;float: left;text-align: center;line-height: 25px;font-size: 16px;color: #616161;border-right:1px solid #616161 ;margin-top: 27.5px;cursor: pointer;}
.nav_end li:hover{color: #fe6a00;}
.nav_end li:nth-child(5){border: 0px;}

.left_end{width: 1226px;height: 182px;margin-top: 120px;}
.left_end ul{width: 160px;float: left;margin-right: 0px;}
.left_end ul li{float: left;font-size: 14px;color: #424242;height: 14px;width: 100%;margin-bottom: 20px;}
.left_end ul .hov{font-size: 12px;color: #757575;margin-bottom: 10px;cursor: pointer;}
.left_end ul .hov:hover{color: #fe6a00;}
.right_end{width: 252px;height: 111px;border-left: 1px solid #ccc;float: left;margin-left: 12px;}
.right_end img{width: 100%;height: 100%;}

.base{width: 1226px;height: 230px;position: relative;float: left;

    background:#fafafa;
}

 .logo_end{width: 56px;height: 56px;margin: 25px 10px 0 0px;float: left;}
 .base_rig{width: 1159px;height: 157px;float: left;margin-top: 25px;}
.base_rig ul li{font-size: 12px;color: #757575;border-right: 1px solid #b0b0b0;padding:0 10px;width: auto;cursor: pointer;}
.base_rig ul li:hover{color: #fe6a00;}
.base_rig ul li:nth-child(14){border: 0px;}
.base_rig ul li:nth-child(17){border: 0px;}
.base_rig ul{margin-bottom: 34px;}
.base_rig p{font-size: 12px;color: #b0b0b0;width: auto;text-align: left;padding-left: 10px;}
.base_rig p:hover{color: #fe6a00;}
.base_rig img{float: left;width: 83px;height: 28px;}
.live{width: 1226px;font-weight: 300; color: #b0b0b0;margin-top: 50px;font-size: 20px;}
</style>