// CHce zrobic kod jquery, który doda pewien styl do obiektu w sekcji o Nas kiedy hoveruje obiekt
/*
$(document).ready(function() {
    $('.container-o-nas-sekcja').hover( function(){
        $(this).addClass('.active');
        $('.container-o-nas-sekcja').not(this).addClass('inactive');},
        function(){
        $(this).removeClass('.active');
        $('.container-o-nas-sekcja').not(this).removeClass('inactive');
    });
});*/


$(document).ready(function() {
    $('.container-o-nas-sekcja').hover(function() {
      $(this).addClass('active');
      $('.container-o-nas-sekcja').not(this).addClass('inactive');
    }, function() {
      $(this).removeClass('active');
      $('.container-o-nas-sekcja').not(this).removeClass('inactive');
    });
  });