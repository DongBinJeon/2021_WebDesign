$(document).ready(function(){
    $(".menu > li").on("mouseover", function(){
        $(this).children(".sub").stop().slideDown();
    });

    $(".menu > li").on("mouseout", function(){
        $(this).children(".sub").stop().slideUp();
    });


    setInterval(function(){
        $(".slider > div:nth-child(1)").fadeOut();
        $(".slider > div:nth-child(2)").fadeIn();
        $(".slider").append($(".slider > div:nth-child(1)"));
    }, 2000);


    $(".gong-header").on("click", function(){
        $(".gong-header").addClass("active");
        $(".gal-header").removeClass("active");

        $(".gong-body").removeClass("hide");
        $(".gal-body").addClass("hide");
    });

    $(".gal-header").on("click", function(){
        $(".gong-header").removeClass("active");
        $(".gal-header").addClass("active");

        $(".gong-body").addClass("hide");
        $(".gal-body").removeClass("hide");
    });


    $(".popup-btn").on("click", function(){
        $("#popup").fadeIn();
    });

    $(".close").on("click", function(){
        $("#popup").fadeOut();
    });
});