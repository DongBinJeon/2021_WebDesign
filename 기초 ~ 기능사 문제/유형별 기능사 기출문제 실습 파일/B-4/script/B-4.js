$(document).ready(function(){
    $(".menu > li").on("mouseover", function(){
        $(".menu-bg").stop().slideDown();
        $(".sub").stop().slideDown();
    });

    $(".menu > li").on("mouseout", function(){
        $(".menu-bg").stop().slideUp();
        $(".sub").stop().slideUp();
    });


    setInterval(function(){
        $(".slider").animate({"margin-left":"-1200px"},1500,function(){
            $(".slider").css({"margin-left":"0px"});
            $(".slider").append($(".slider > div:nth-child(1)"));
        });
    },2500);


    $(".popup-btn").on("click", function(){
        $("#popup").fadeIn();
    });

    $(".close").on("click", function(){
        $("#popup").fadeOut();
    });
});