<template>
    <div id="load">
       <div class="conent">
           <div class="user">
               <p>账号: <input type="text" placeholder="请输入账号"></p>
                <p>密码: <input type="password" placeholder="请输入账号"></p>
                <router-link to="/home"><button>登录</button></router-link>
                
           </div>
       </div>
    </div>
</template>
<style scoped>
#load{width: 1903px;text-align: center;}
.conent{display: inline-block;}
.user{width: 1226px;height: 800px;background: #ddd;}
</style>