$(document).ready(function(){
    $(".menu > li").on("mouseover", function(){
        $(this).children(".sub").stop().fadeIn();
    });

    $(".menu > li").on("mouseout", function(){
        $(this).children(".sub").stop().fadeOut();
    });


    var currentIndex = 0;
    setInterval(function(){
        if(currentIndex < 4){
            currentIndex++;
        }else{
            currentIndex = 0;
        }

        var slidePosition = currentIndex * (-960)+"px";
        $(".slideList").animate({left : slidePosition},3000)
    },3000);

    $(".popup_img").on("click",function(){
        $(".popup_bg").css("display", "block");
    });

    $(".close").on("click",function(){
        $(".popup_bg").css("display", "none");
    });
});