/**
 * Created by �Źֵ��ǹ� on 2016/10/15.
 */
$(window).ready(function(){

    /*����ҳ��ת���ƶ�����ҳ�ĺ���*/
    function SplitDemo(){ var s, ss;
        var s = document.URL;
        // ��ÿ���ո��ַ������зֽ⡣
        ss = s.split("?i=");
        return(ss);
    }
    $(".wx-page:eq("+SplitDemo()[1]+")").css("display","block").siblings().css("display","none");
    /*����ҳ��ת���ƶ�����ҳ�ĺ���*/

})


