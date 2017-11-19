/**
 * Created by i on 2017/5/4.
 */

function submitRegister()
{
    var user_name=$('#register-username').val();
    var password=$('#register-password').val();
    var repassword=$('#register-repassword').val();
    var email=$('#register-email').val();
    $('#register-btn').attr("disabled","disabled");
    $.post("<?php echo _Http;?>user/goRegister","register-username=" + encodeURI(user_name) +
        "&register-password="  + encodeURI(password) +
        "&register-repassword="+encodeURI(repassword) +
        "&register-email="+encodeURI(email)
        ,function(response){

            if(response.status==1)
            {
                $("#register-alert").html("注册成功！").show();
                delayRefresh(1000);
            }
            else
            {
                $('#register-btn').removeAttr("disabled");
                $("#register-alert").html(decodeURI(response.message)).show();
            }

        });
}
function submitLogin()
{
    var user_name=$('#login-username').val();
    var password=$('#login-password').val();
    var remember=$('#login-remember')[0].checked;
    $('#login-btn').attr("disabled","disabled");
    $.post("<?php echo _Http;?>user/goLogin","login-username=" + encodeURI(user_name) +
        "&login-password="  + encodeURI(password)+
        "&login-remember="  + encodeURI(remember)
        ,function(response){

            if(response.status==1)
            {
                $("#login-alert").html("登录成功！").show();
                delayRefresh(1000);
            }
            else
            {
                $('#login-btn').removeAttr("disabled");
                $("#login-alert").html(decodeURI(response.message)).show();
            }

        });
}
function changeToMobile()
{
    //$('.watchface-small').css("margin","0.3em")

    //$('.watchface-small-list').css("font-size","8px");
}
function changeToNormal()
{
    //$('.watchface-small').css("margin","1em")

    $('.watchface-small-list').css("font-size","16px");
}




var is_mobile=(window.innerWidth<=700);
$(function () {
    if(is_mobile)
        changeToMobile();
    else
        changeToNormal();
});

$(window).resize(function(){
    if(window.innerWidth<=700)
    {
        if(!is_mobile)
        {
            is_mobile=true;
            changeToMobile();
        }
    }
    else
    {
        if(is_mobile)
        {
            is_mobile=false;
            changeToNormal();
        }
    }
    //$('.banner-right')[0].width=window.innerWidth*0.7;
    //$('.banner-right')[0].height=$('.banner-right')[0].width*3.7;
});
