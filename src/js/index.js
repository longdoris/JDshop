(function(){
    // 1.删除广告节点按钮
    $('.new-close').click(function () { 
        $('.new').remove()
    });

    // 2.定位划过二级菜单
    $('.fl').mouseenter(function () { 
        $.ajax({
            url: "../json/shengfen.json",
            dataType: "json",
            success: function (res) {
                // console.log(res)
                $('.drop-ul').empty()
                $(res).each(function (index, element) { 
                    $('.drop-ul').append(`
                    <li class="drop-ulli"><a href="#">${element.province}</a></li>
                    `)
                });
            }
        });
    });

    // 3.
})()