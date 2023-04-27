// Tutaj będzie efekt zjeżdzania do danej sekcji 

$(document).ready(function(){
    $("#toStrona1").click(function(){
        $("html,body").animate({
            scrollTop: $("#strona1-title").offset().top - $("header").height()*2
        },1000);
    });
});


$(document).ready(function(){
    $("#toStrona2").click(function(){
        $("html,body").animate({
            scrollTop: $("#strona2-title").offset().top - $("header").height()*2
        },1000);
    });
});

$(document).ready(function(){
    $("#toONas").click(function(){
        $("html,body").animate({
            scrollTop: $("#strona-onas").offset().top - $("header").height()*2
        },1000);
    });
});
