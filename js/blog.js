/**
 * Created by �Źֵ��ǹ� on 2016/10/14.
 */

$(document).ready(function(){
    $("div.content:gt(9)").css("display","none");
    $(".tab-content").children("div").css("display","none");
    $(".tab-content").children("div").eq(0).css("display","block");
    /*��ǩҳ�л�*/
    $("#myTab a").click(function (e) {
        $(this).tab('show');
        $(this).removeClass("nav-noSelected").addClass("nav-selected").siblings().removeClass("nav-selected").addClass("nav-noSelected")
        $(this).addClass("nav-blod").siblings().removeClass("nav-blod");
        $(".tab-content").children("div").eq($(this).index()).css("display","block").siblings().css("display","none");

    });
    /*��ǩҳ�л�*/


    /*��ҳ��ʼ*/
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
    /*��ҳ����*/
    /*���л�*/
    function changeClass(){
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
    $(window).resize(function() {  //����������ڸı�ʱ
        changeClass();
    });
    /*���л�*/
    /*����ҳ�л���ʼ*/
    $(".content a").click(function(){
        var page_index =  $(this).parents("div.content").index();
        window.open("page.html?i="+page_index+"","_parent")
    });
    /*����ҳ�л�����*/

    /*��ȡ��Ļ�߶�*/
        var windows_height = $(window).height();
        $(".main-left").css("height",windows_height+"px");
        $(".main-right").css("min-height",windows_height+"px")

    /*��ȡ��Ļ�߶�*/

    /*�������*/
        $(".htmlCode").snippet("javascript",{ style: "random", collapse: true,transparent:false, startCollapsed: false});
    /*�������*/
})