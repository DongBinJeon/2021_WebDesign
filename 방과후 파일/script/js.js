$(document).ready(function(){
    $(".menu > li").on("mouseover", function(){
        $(this).children(".sub").stop().fadeIn();
    });

    $(".menu > li").on("mouseout", function(){
        $(this).children(".sub").stop().fadeOut();
    });


    setInterval(function(){
        $(".slide").animate({"margin-top":"-300px"}, 1000, function(){
        $(".slide").css({"margin-top":"0px"})
        $(".slide").append( $(".slide > div:first") );
        });
    },2000);

    
    $("#pb").on("click", function(){
        $("#popup-bg").css("display", "block");
    });

    $(".close").on("click", function(){
        $("#popup-bg").css("display", "none");
    });
});