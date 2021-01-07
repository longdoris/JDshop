(function(){
    // console.log($('.mr-nav1').children())
    // 切换选项卡
    $('.mr-nav1').children().click(function(){
        $(this)
        .addClass('action')
        .siblings()
        .removeClass('action')
        .parent()
        .next()
        .children()
        .removeClass('active')
        .eq($(this).index())
        .addClass('active')
    });
    // 动画切换二维码
    $('.erweima').mouseenter(function () { 
        $(this)
        .children('.saoma').animate({
            left:20
        },300,'linear')
        .next()
        .fadeIn(900,'linear')
    }).mouseleave(function () { 
        $(this)
        .children('.saoma')
        .animate({
            left: 96
        },500,'linear')
        .next()
        .css('display','none')
        .finish()
    });

    // 登录
    $('.login-btn').click(function(){
        $.ajax({
            url:"../json/login.json",
            data:{
                username: $('#loginname').val(),
                password: $('#nloginpwd').val()
            },
            dataType:"json",
            success:function(res){
                if(res.code === 1){
                    localStorage.setItem('username',$('#loginname').val());
                    location.href = "../pages/first.html"
                }
            }
        })
    })
})()

