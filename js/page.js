/**
 * Created by 古怪的糖果 on 2016/10/15.
 */
$(window).ready(function(){

    /*标题页跳转到制定内容页的函数*/
    function SplitDemo(){ var s, ss;
        var s = document.URL;
        // 在每个空格字符处进行分解。
        ss = s.split("?i=");
        return(ss);
    }
    $(".wx-page:eq("+SplitDemo()[1]+")").css("display","block").siblings().css("display","none");
    /*标题页跳转到制定内容页的函数*/

})


