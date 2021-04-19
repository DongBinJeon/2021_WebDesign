$(document).ready(function(){
    $(".menu > li").on("mouseover", function(){
        $(this).children(".sub").stop().fadeIn();
    });

    $(".menu > li").on("mouseout", function(){
        $(this).children(".sub").stop().fadeOut();
    });

    
    var currentIndex = 0;
    setInterval(function(){
        if(currentIndex < 2){
            currentIndex++;
        }else{
            currentIndex = 0;
        }

        var slideposition = currentIndex * (-1000) + "px";
        $(".slideList").animate({left : slideposition},3000)
    },400);


    $(".popup_img").on("click", function(){
        $(".layer_bg").css("display", "block")
    });

    $(".close").on("click", function(){
        $(".layer_bg").css("display", "none")
    });

});