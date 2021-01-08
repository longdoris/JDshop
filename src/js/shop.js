// 拿数据
function getCart(){
    var list = localStorage.getItem('cart') || "[]";
    return JSON.parse(list);
}

// 存数据
function setCart(arr){
    localStorage.setItem('cart',JSON.stringify(arr))
}

// 展示商品
showList();
function showList() {
    var productList = getCart();
    $('.mian').empty()
    $.each(productList, function (index, product) {
        // console.log(product)
        if (productList.length < 1) {
            $('.shop').show();
            $('.mian').hide();
            return;
        }
        $('.mian').show();
        $('.shop').hide();
        $('.mian').append(`
                    <div class="mian-1">
                        <div class="mian-one">
                            <input type="checkbox" name="xuan" dt_uid=${product.product_id}>
                            <img class="img"src="${product.product_img}"alt="">
                        </div>
                        <div class="mian-two">
                                ${product.product_name}
                        </div>
                        <div class="mian-three">
                            <p>黑色</p>
                            <p>升级版XB75AP</p>
                        </div>
                        <div class="mian-four">
                            <span>￥</span>
                            <span class="price">${product.product_price}</span>
                        </div>
                        <div class="mian-five">
                            <input type="button" name="" value="-">
                            <input type="text" name="" value="${product.product_num}" class='text'>
                            <input type="button" name="" value="+">
                        </div>
                        <div class="mian-six">
                            <span>￥</span>
                            <span class="subtotal">${product.product_price}</span>
                        </div>
                        <div class="mian-seven">
                            <p class="delect" data_id=${product.product_id}>删除</p>
                            <span>移入关注</span>
                        </div>
                 </div>
        `)

    });
    // 删除商品
    // 1. 删除节点
    // console.log($('.mian').find('.delect'))
    $('.mian').find('.delect').click(function(){
        $(this).parent().parent().remove()
    })
    // 2. 删除本地存储的数据
}