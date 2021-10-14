$(document).ready(function(){
    $(".menu > li").on("click", function(){
        $(this).data('clicked', true);

        if($(".menu > li").data('clicked')){
            $(this).getElementByClassName();
        }
    });
    
        

});