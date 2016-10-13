/**
 * Created by 古怪的糖果 on 2016/10/10.
 */
/*
焦点图轮播*/
$(function(){
    var curIndex = 0;//当前index
    var imgLen= $(".imgList li").length;//获取图片数量
    /*定义计时器自动变化，2.5秒一次*/
    var autoChange = setInterval(function(){
        if(curIndex<imgLen-1){
            curIndex++
        }else{
            curIndex=0
        }
        changeTo(curIndex);
    },2500);
    //对右下角按钮index进行事件绑定处理等

    $(".indexList li").click(function(){
        clearInterval(autoChange);
        curIndex = $(this).index();
        changeTo(curIndex);
    });
    //清除定时器时候的重置定时器--封装
    function autoChangeAgain(){
        autoChange = setInterval(function(){
            if(curIndex < imgLen-1){
                curIndex ++;
            }else{
                curIndex = 0;
            }
            //调用变换处理函数
            changeTo(curIndex);
        },2500);
    }


    function changeTo(num){
        var goLeft = num * 225;
        $(".imgList").animate({left: "-" + goLeft + "px"},"slow");
        $(".indexList").find("li").eq(num).addClass("indexListOn").siblings().removeClass("indexListOn");
        $(".textUl").find("li").eq(num).css("display","block").siblings().css("display","none");
    }
})
/*
 焦点图轮播*/
