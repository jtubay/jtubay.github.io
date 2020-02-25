$(document).ready(function(){
    $(".button").click(function(){
        const name = $(this).attr("data-filter");
        if(name === "all"){
            $(".filter").show("slow")
        }
        else{
            $(".filter").not("."+name).hide("slow");
            $(".filter").filter("."+name).show("slow");

        }
    });
    $(".filterBtn a").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })

});