$(function(){

$(window).bind("resize",function(){
    console.log($(this).width())
    if($(this).width() <640){
    $('div').removeClass('leftside')
    }
    else{
    $('div').removeClass('rightside')
    }
})
})