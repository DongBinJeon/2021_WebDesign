$(document).ready(function(){
    $(".menu > li").on("mouseover", function(){
        $(this).children(".sub").stop().slideDown();
    });

    $(".menu > li").on("mouseout", function(){
        $(this).children(".sub").stop().slideUp();
    });


    setInterval(function(){
        $(".slider").animate({"margin-left":"-800px"}, 2000, function(){
            $(".slider").css({"margin-left":"0px"});
            $(".slider").append($(".slider > div:first"));
        });
    },2000);


    $(".popup-btn").on("click", function(){
        $("#popup").css("display", "block");
    });

    $(".close").on("click", function(){
        $("#popup").css("display", "none");
    });
});