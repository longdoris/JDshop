// add 增加数量
// $('.add').click(function(){
//     console.log($('.num').val())
// })

// cut 减少
// $('.cut').click(function(){
//     console.log($('.num').val())
// })


/*
1. 将数据存储在localstorage的cart键里
    格式是[{},{}]
*/ 
// 拿数据
function getCart(){
    var list = localStorage.getItem('cart') || "[]";
    return JSON.parse(list);
}

// 存数据
function setCart(arr){
    localStorage.setItem('cart',JSON.stringify(arr))
}

// 点击加入购物车
$('.join').click(function(){
    var newProduct = {
        product_id: $('.join').data('id'),
        product_name: $('.join').data('name'),
        product_img: $('.join').data('img'),
        product_price: $('.join').data('price'),
        product_num: $('.join').data('num'),
    };
    // 先获取原来的商品类表数组
    var productList = getCart();
    //添加新商品
    productList.push(newProduct);
    //存回本地存储
    setCart(productList)
})