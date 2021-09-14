$(document).ready(function(){
    $(".menu > li").on("mouseover", function(){
        $(".sub").stop().slideDown();
    });

    $(".menu > li").on("mouseout", function(){
        $(".sub").stop().slideUp();
    });


});