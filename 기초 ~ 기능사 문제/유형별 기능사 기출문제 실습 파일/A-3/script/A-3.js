$(document).ready(function(){
    $(".menu > li").on("mouseover", function(){
        $(this).children(".sub").stop().fadeIn();
    });
    
    $(".menu > li").on("mouseout", function(){
        $(this).children(".sub").stop().fadeOut();
    });


    setInterval(function(){
        $(".slider > div:nth-child(1)").fadeOut();
        $(".slider> div:nth-child(2)").fadeIn();
        $(".slider").append($(".slider > div:nth-child(1)"));
    },2500);

    
    $(".tab-header").on("click", function(){
        if($(this).hasClass("active")==false){
            $(".tab-header > li").toggleClass("active");
            $(".tab-body").toggleClass("hide");
        }
    });


    $(".popup-btn").on("click", function(){
        $("#popup").removeClass("hide");
    });

    $(".close").on("click", function(){
        $("#popup").addClass("hide");
    });
});