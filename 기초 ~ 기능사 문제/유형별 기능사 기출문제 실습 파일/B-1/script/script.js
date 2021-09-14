$(document).ready(function(){
    $(".menu > li").on("mouseover", function(){
        $(".sub").stop().fadeIn();
    });

    $(".menu > li").on("mouseout", function(){
        $(".sub").stop().fadeOut();
    });


    setInterval(function(){
        $(".slider").animate({"margin-left":"-1200px"}, 1000, function(){
            $(".slider").css({"margin-left":"0px"});
            $(".slider").append($(".slider > div:nth-child(1)"));
        });
    },2500);
});