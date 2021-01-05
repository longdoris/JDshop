// console.log($('.mr-nav1').children())
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

})

$('.erweima').mouseover(function () { 
    $(this)
    .children('.saoma').animate({
        left:20
    },500,'linear')
    .finish()
    .next()
    .css('display','block')
}).mouseout(function () { 
    $(this)
    .children('.saoma').finish().animate({
        left: 96
    },500,'linear')
    .next()
    .css('display','none')
});