// Tutaj będzie efekt zjeżdzania do danej sekcji 

$(document).ready(function(){
    $(".toStrona1").click(function(){
        $("html,body").animate({
            scrollTop: $("#strona1-title").offset().top - $("header").height()
        },1000);
    });
});


$(document).ready(function(){
    $(".toStrona2").click(function(){
        $("html,body").animate({
            scrollTop: $("#strona2-title").offset().top - $("header").height()*2
        },1000);
    });
});

$(document).ready(function(){
    $(".toONas").click(function(){
        $("html,body").animate({
            scrollTop: $("#strona-onas").offset().top - $("header").height()*2
        },1000);
    });
});

$(document).ready(function(){
    $(".toKontakt").click(function(){
        $("html,body").animate({
            scrollTop: $("#strona-kontakt").offset().top - $("header").height()
        },1000);
    });
});


// Tutaj zajmę się zamienianiem kiedy pokazuje ktore menu 

$(document).ready(function(){    
    $(window).scroll(function(){
    var userHeight = $(window).scrollTop();
    if(userHeight<$(".title-img-container").height()/1.25){
        $(".side-menu-container").show();
        $("header").hide();
    }
    else{
        $(".side-menu-container").hide();
        $("header").show();
    }});
});