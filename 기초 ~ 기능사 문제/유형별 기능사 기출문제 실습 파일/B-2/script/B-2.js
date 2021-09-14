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
        $(".slider").animate({"margin-top":"-300px"},1000,function(){
            $(".slider").css({"margin-top":"0px"});
            $(".slider").append($(".slider > div:nth-child(1)"));
        });
    },2000);

    
    $(".popup-btn").on("click", function(){
        $("#popup").removeClass("hide");
    });
    $(".close").on("click", function(){
        $("#popup").addClass("hide");
    });
});