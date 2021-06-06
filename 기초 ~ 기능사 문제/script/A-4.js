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
        $(".slider > div:nth-child(1)").fadeOut();
        $(".slider > div:nth-child(2)").fadeIn();
        $(".slider").append($(".slider > div:nth-child(1)"));
    },2000);


    $(".popup-btn").on("click", function(){
        $("#popup").removeClass("hide");
    });

    $(".close").on("click", function(){
        $("#popup").addClass("hide");
    });
});