(function(){
    // 1.删除广告节点按钮
    $('.new-close').click(function () { 
        $('.new').remove()
    });

    // 2.定位划过二级菜单
    $('.fl').mouseenter(function () { 
        $.ajax({
            url: "./src/json/shengfen.json",
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

    // 3. 侧边导航栏
    $('.cate_menu_item').mouseenter(function () { 
        $('.con-left-box').show()
        // $.ajax({
        //     url: "./src/json/cebianlan.json",
        //     dataType: "json",
        //     success: function (res) {
        //         // console.log(res)
        //         $('.con-left-box').empty()
        //         $(res).each(function(index,element){
        //             let ele = JSON.stringify(element)
        //             // console.log(ele)
        //             $('.con-left-box').append(`
        //             <ol class="con-le-second">
        //                 <li>
        //                     <span>${ele}</span>
        //                 </li>
        //             </ol>
        //             `)
        //         })
        //     }
        // });
    }).mouseleave(function () { 
        $('.con-left-box').hide()
    });

    $('.con-left-box').mouseenter(function () {
        $(this).show()
    }).mouseleave(function () { 
        $('.con-left-box').hide()
    });

    // 轮播图
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        slidesPerView: 'auto',
        loopedSlides: 8,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
      })
})()