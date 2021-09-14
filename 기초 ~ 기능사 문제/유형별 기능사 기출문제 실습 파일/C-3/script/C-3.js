$(document).ready(function(){
    $(".menu > li").on("mouseover", function(){
        $(this).children(".sub").stop().slideDown();
    });

    $(".menu > li").on("mouseout", function(){
        $(this).children(".sub").stop().slideUp();
    });


    setInterval(function(){
        $(".slider").animate({"margin-left":"-800px"},1000,function(){
            $(".slider").css({"margin-left":"0px"});
            $(".slider").append($(".slider > div:nth-child(1)"));
        });
    },2500);


    $(".pop-btn").on("click", function(){
        $("#popup").fadeIn();
    });

    $(".close").on("click", function(){
        $("#popup").fadeOut();
    });
});