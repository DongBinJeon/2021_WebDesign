$(document).ready(function(){
    $(".menu > li").on("mouseover", function(){
        $(".sub").stop().slideDown();
    });

    $(".menu > li").on("mouseout", function(){
        $(".sub").stop().slideUp();
    });


    setInterval(function(){
        $(".slider").animate({"margin-left":"-1200px"}, 2000, function(){
            $(".slider").css({"margin-left":"0px"});
            $(".slider").append($(".slider > div:nth-child(1)"));
        });
    },3000);
});