$(document).ready(function(){
    $(".menu > li").on("mouseover", function(){
        $(this).children(".sub").stop().fadeIn();
    });

    $(".menu > li").on("mouseout", function(){
        $(this).children(".sub").stop().fadeOut();
    });


    setInterval(function(){
        $(".slide > div:nth-child(1)").fadeOut();
        $(".slide > div:nth-child(2)").fadeIn();
        $(".slide").append($(".slide > div:nth-child(1)"));
    },2000);
});