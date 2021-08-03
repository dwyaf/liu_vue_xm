window.onload = function(){
    var a1 = document.getElementsByClassName("a_txt");
    for(let i=0;i<a1.length;i++){
        a1[i].onmouseover = function(){
            this.style.color = "#fff"
        }
        a1[i].onmouseout = function(){
            this.style.color = "#b0b0b0"
        }
    }
    // app
    var fix_app = document.getElementsByClassName("fix_app")[0];
    var a2 = document.getElementsByClassName("a_txt")[10];
   a2.onmouseover = function(){
    fix_app.style.display = "block"
    a2.style.color = "#fff"
   }
   a2.onmouseout = function(){
    fix_app.style.display = "none"
    a2.style.color = "#b0b0b0"
   }
//    购物车
   var a3 = document.getElementsByClassName(" a3")[0];
   var a3_img = document.getElementsByClassName("a3_img")[0];
   var shop = document.getElementsByClassName("shop")[0];
   a3.onmouseover = function(){
    a3_img.src = "./src/assets/img/img1/ia_100000365.png"
    a3.style.color = "#ff6a00"
    shop.style.display = "block"
   }
   a3.onmouseout = function(){
    a3_img.src = "./src/assets/img/img1/ia_100000364.png"
    a3.style.color = "#b0b0b0"
    shop.style.display = "none"
   }


   var oBtns = document.getElementsByClassName("btn")[0];
  oBtns.onclick = function(){
      alert(1)
  }
  //头部选项卡
    //头部选项卡
    var oBtns = document.getElementsByClassName("btn");
    var obox = document.getElementsByClassName("phone");
    for(let i=0;i<oBtns.length;i++){
        oBtns[i].index = i;
        oBtns[i].onmouseover = function(){
            
           
            // this.style.color = "#FE7C04"
             obox[this.index].style.display = "block";
             obox[this.index].onmouseover = function(){ 
              this.style.display = "block"}
            obox[this.index].onmouseout = function(){ 
                this.style.display = "none"}
        }
        oBtns[i].onmouseout = function(){
          obox[this.index].style.display = "none";
        }
  
    }

    var osearch = document.getElementsByClassName("search")[0];
  var otxt = document.getElementsByClassName("search_txt")[0];
  var osearch1 = document.getElementsByClassName("search_joint")[0];
  osearch.onclick = function(){
    osearch.style.border = "1px solid red"
    osearch1.style.border = "1px solid red"
    osearch1.style.borderLeft = "0px solid red"
    otxt.style.display = "block"
    // alert(1)
  }
  osearch.onmouseout = function(){
    otxt.onmouseover = function(){
        osearch.style.border = "1px solid red"
        osearch1.style.border = "1px solid red"
    otxt.style.display = "block"
    }
    otxt.onmouseout = function(){
        osearch.style.border = "1px solid #ccc"
        osearch1.style.border = "1px solid #ccc"
        otxt.style.display = "none"
    }
    osearch.style.border = "1px solid #ccc"
    osearch1.style.border = "1px solid #ccc"
    otxt.style.display = "none"
    // alert(1)
  }


  //轮播上方选项卡

 var obarul = document.getElementsByClassName("barul")[0];
 var oBtns1 = obarul.children
var obox1 = document.getElementsByClassName("phoneMode");
for(var i=0;i<oBtns1.length;i++){
    oBtns1[i].index = i;
    oBtns1[i].onmouseover = function(){
        
        // for(var j=0;j<oBtns1.length;j++){
            
        //     obox1[j].style.display = "none";

        // }
       
       
         obox1[this.index].style.display = "block";
         obox1[this.index].style.zIndex = "1";


         obox1[this.index].onmouseover = function(){ 
           this.style.display = "block"}
         obox1[this.index].onmouseout = function(){ 
             this.style.display = "none"}
    }
    oBtns1[i].onmouseout = function(){
      obox1[this.index].style.display = "none";
      obox1[this.index].style.zIndex = "1";


       
    }

}



// 电视-周边选项卡

var smaul = document.getElementsByClassName("sma1")[0];
var smali = smaul.children;
var smapic1 = document.getElementsByClassName("sma_pic1")[0];
var smapic = smapic1.children;
for (var i = 0; i < smali.length; i++) {
    smali[i].index = i;
    smali[i].onmouseover = function () {


        for (var j = 0; j < smapic.length; j++) {
            smali[j].className = ""
            smapic[j].className = "sma_pic"
        }
        this.className = "sma"
        smapic[this.index].className = "sma_pic sma_show"
    }
}
// 智能
var inteul = document.getElementsByClassName("sma1")[1];
var inteli = inteul.children;
var intepic1 = document.getElementsByClassName("sma_pic1")[1];
var intepic = intepic1.children;
for (var i = 0; i < inteli.length; i++) {
    inteli[i].index = i;
    inteli[i].onmouseover = function () {


        for (var j = 0; j < intepic.length; j++) {
            inteli[j].className = ""
            intepic[j].className = "sma_pic"
        }
        this.className = "sma"
        intepic[this.index].className = "sma_pic sma_show"
    }
}
// 搭配

var collul = document.getElementsByClassName("sma1")[2];
var collli = collul.children;
var collpic1 = document.getElementsByClassName("sma_pic1")[2];
var collpic = collpic1.children;
for (var i = 0; i < collli.length; i++) {
    collli[i].index = i;
    collli[i].onmouseover = function () {


        for (var j = 0; j < collpic.length; j++) {
            collli[j].className = ""
            collpic[j].className = "sma_pic"
        }
        this.className = "sma"
        collpic[this.index].className = "sma_pic sma_show"
    }
}

// 配件

var partsul = document.getElementsByClassName("sma1")[3];
var partsli = partsul.children;
var partspic1 = document.getElementsByClassName("sma_pic1")[3];
var partspic = partspic1.children;
for (var i = 0; i < partsli.length; i++) {
    partsli[i].index = i;
    partsli[i].onmouseover = function () {


        for (var j = 0; j < partspic.length; j++) {
            partsli[j].className = ""
            partspic[j].className = "sma_pic"
        }
        this.className = "sma"
        partspic[this.index].className = "sma_pic sma_show"
    }
}


// 周边

var persul = document.getElementsByClassName("sma1")[4];
var persli = persul.children;
var perspic1 = document.getElementsByClassName("sma_pic1")[4];
var perspic = perspic1.children;
for (var i = 0; i < persli.length; i++) {
    persli[i].index = i;
    persli[i].onmouseover = function () {


        for (var j = 0; j < perspic.length; j++) {
            persli[j].className = ""
            perspic[j].className = "sma_pic"
        }
        this.className = "sma"
        perspic[this.index].className = "sma_pic sma_show"
    }
}


// 视频播放
var oval = document.getElementsByClassName("oval");
var player = document.getElementsByClassName("player")[0];
var playing = document.getElementsByClassName("playing")[0];
var stoping = document.getElementsByClassName("sto");

for (var i = 0; i < oval.length; i++) {
    oval[i].index = i;
    oval[i].onclick = function () {
        player.style.display = "block"
        playing.src = "./src/assets/img/img1/vid.mp4";
    }
    for (let j = 0; j < stoping.length; j++) {
        stoping[j].onclick = function () {
            player.style.display = "none"
            playing.src = "";
        }
    }

}
//底部定时更换图片
var flash = document.getElementsByClassName("flash")[4];
var imgArr = ["./src/assets/img/img1/ia_100000353.png","./src/assets/img/img1/ia_100000354.png"]
var timer;
var index = 0;

timer = setInterval(function(){
   
    index++;
   
    if(index >= imgArr.length)
    {
        index = 0;
    }
    
    flash.src = imgArr[index];
},1000);


// 右侧固定位置换图片
var fixul = document.getElementsByClassName("fixul")[0];
var fixli = fixul.children;
var fiximg0 = document.getElementsByClassName("fiximg")[0];
var evens = document.getElementsByClassName("evens")[0];

var fiximg1 = document.getElementsByClassName("fiximg")[1];
var fiximg2 = document.getElementsByClassName("fiximg")[2];
var fiximg3 = document.getElementsByClassName("fiximg")[3];
var fiximg4 = document.getElementsByClassName("fiximg")[4];
var fiximg5 = document.getElementsByClassName("fiximg")[5];

var fixpic0 = document.getElementsByClassName("fixpic")[0];
var fixpic1 = document.getElementsByClassName("fixpic")[1];
var fixpic2 = document.getElementsByClassName("fixpic")[2];
var fixpic3 = document.getElementsByClassName("fixpic")[3];
var fixpic4 = document.getElementsByClassName("fixpic")[4];
var fixpic5 = document.getElementsByClassName("fixpic")[5];


fixpic0.onmouseover = function () {
    fiximg0.src = "./src/assets/img/img1/ia_100000356.png"
    evens.style.display = "block"
}
fixpic0.onmouseout = function () {
    fiximg0.src = "./src/assets/img/img1/ia_100000355.png"
    evens.style.display = "none"
}
fixpic1.onmouseover = function () {
    fiximg1.src = "./src/assets/img/img1/ia_100000359.png"
}
fixpic1.onmouseout = function () {
    fiximg1.src = "./src/assets/img/img1/ia_100000358.png"
}
fixpic2.onmouseover = function () {
    fiximg2.src = "./src/assets/img/img1/ia_100000361.png"
}
fixpic2.onmouseout = function () {
    fiximg2.src = "./src/assets/img/img1/ia_100000360.png"
}
fixpic3.onmouseover = function () {
    fiximg3.src = "./src/assets/img/img1/ia_100000363.png"
}
fixpic3.onmouseout = function () {
    fiximg3.src = "./src/assets/img/img1/ia_100000362.png"
}
fixpic4.onmouseover = function () {
    fiximg4.src = "./src/assets/img/img1/ia_100000365.png"
}
fixpic4.onmouseout = function () {
    fiximg4.src = "./src/assets/img/img1/ia_100000364.png"
}

fixpic5.onmouseover = function () {
    fiximg5.src = "./src/assets/img/img1/ia_200005401y.png"
}
fixpic5.onmouseout = function () {
    fiximg5.src = "./src/assets/img/img1/ia_200005400l.png"
}

window.onscroll = function () {
    var h = document.documentElement.scrollTop || document.body.scrollTop;
// var fixpic5 = document.getElementsByClassName("fixpic")[5];




if (h >= 1300) {
    fixpic5.style.display = "block"
} else {
    fixpic5.style.display = "none"
}
fixpic5.onclick = function () {
    document.documentElement.scrollTop = document.body.scrollTop = 0
  
}

}


}