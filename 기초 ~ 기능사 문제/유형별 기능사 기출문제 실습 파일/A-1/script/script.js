$(document).ready(function(){
    $(".menu > li").on("mouseover", function(){
        $(".sub").stop().fadeIn();
    });

    $(".menu > li").on("mouseout", function(){
        $(".sub").stop().fadeOut();
    });

    
    setInterval(function(){
        $(".slider").animate({"margin-top":"-300px"},1500,function(){
            $(".slider").css({"margin-top":"0px"});
            $(".slider").append($(".slider > div:nth-child(1)"));
        });
    },2000);

    $(".tab-header").on("click", function(){
        if($(this).hasClass("active")==false){
            $(".tab-header > li").toggleClass("active");
            $(".tab-body").toggleClass("hide");
        }
    })


    $(".popup-btn").on("click", function(){
        $("#popup").removeClass("hide");
    });

    $(".close").on("click", function(){
        $("#popup").addClass("hide");
    });
});