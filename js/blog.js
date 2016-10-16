/**
 * Created by 古怪的糖果 on 2016/10/14.
 */

$(document).ready(function(){
    $("div.content:gt(9)").css("display","none");
    $(".tab-content").children("div").css("display","none");
    $(".tab-content").children("div").eq(0).css("display","block");
    /*标签页切换*/
    $("#myTab a").click(function (e) {
        $(this).tab('show');
        $(this).removeClass("nav-noSelected").addClass("nav-selected").siblings().removeClass("nav-selected").addClass("nav-noSelected")
        $(this).addClass("nav-blod").siblings().removeClass("nav-blod");
        $(".tab-content").children("div").eq($(this).index()).css("display","block").siblings().css("display","none");

    });
    /*标签页切换*/


    /*分页开始*/
    $(".paging li").click(function(){
        var index = $(this).index();
        var min = 10*(index);
        var max = 10*(index+1);
        $(this).addClass("paging-selected").siblings().removeClass("paging-selected");
        for(var i=0;i<min;i++){
            $("div.content:eq("+i+")").css("display","none");
        }
        for(var i=min;i<min+10;i++){
            $("div.content:eq("+i+")").css("display","block");
        }
        $("div.content:gt("+max+")").css("display","none")

    })
    /*分页结束*/
    /*左部切换*/
    /*function changeClass(){
        if($(window).width()>=767){
            $(".col-sm-3").addClass("col-sm-3-max");
            $(".col-sm-9").addClass("col-sm-9-max");
        }
        else{
            $(".col-sm-3").removeClass("col-sm-3-max");
            $(".col-sm-9").removeClass("col-sm-9-max");
        }
    }
    changeClass();
    $(window).resize(function() {  //当浏览器窗口改变时
        changeClass();
    });*/
    /*左部切换*/
    /*内容页切换开始*/
    $(".content a").click(function(){
        var page_index =  $(this).parents("div.content").index();
        window.open("page.html?i="+page_index+"","_parent")
    });
    /*内容页切换结束*/

    /*获取屏幕高度*/
        var windows_height = $(window).height();
        $(".main-left").css("height",windows_height+"px");
        $(".main-right").css("min-height",windows_height+"px")

    /*获取屏幕高度*/

    /*代码高亮*/
        $(".htmlCode").snippet("javascript",{ style: "random", collapse: true,transparent:false, startCollapsed: false});
    /*代码高亮*/
})
