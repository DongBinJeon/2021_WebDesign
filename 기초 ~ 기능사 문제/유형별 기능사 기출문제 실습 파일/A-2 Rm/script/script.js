$(document).ready(function(){
    $(".menu > li").on("mouseover", function(){
        $(".sub").stop().slideDown();
        $(".menu-bg").stop().slideDown();
    });

    $(".menu > li").on("mouseout", function(){
        $(".sub").stop().slideUp();
        $(".menu-bg").stop().slideUp();
    });

    setInterval(function(){
        $(".slider").animate({"margin-left":"-1200px"}, 2000, function(){
            $(".slider").css({"margin-left":"0px"});
            $(".slider").append($(".slider > div:nth-child(1)"));
        });
    },2500);


    $(".pop-btn").on("click", function(){
        $("#pop-bg").stop().fadeIn();
    });

    $(".close").on("click", function(){
        $("#pop-bg").stop().fadeOut();
    });
});