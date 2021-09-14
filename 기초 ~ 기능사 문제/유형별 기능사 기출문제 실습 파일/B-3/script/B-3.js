$(document).ready(function(){
    $(".menu > li").on("mouseover", function(){
       $(this).children(".sub").stop().fadeIn();
    });

    $(".menu > li").on("mouseout", function(){
       $(this).children(".sub").stop().fadeOut();
    });


    setInterval(function(){
        $(".slider").animate({"margin-top":"-300px"},2000,function(){
            $(".slider").css({"margin-top":"0px"});
            $(".slider").append($(".slider > div:nth-child(1)"));
        });
    },3000);


    $(".popup-btn").on("click", function(){
        $("#popup").css("display", "block");
    });

    $(".close").on("click", function(){
        $("#popup").css("display", "none");
    });
});