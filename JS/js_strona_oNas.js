// CHce zrobic kod jquery, który doda pewien styl do obiektu w sekcji o Nas kiedy hoveruje obiekt

// Wiec sprawa jest prosta, gdy którys z elementow o klasie "...-sekcja" jest shoverowany to 
// dodaje styl do tego obiektu styl ".active", a dla reszty elementow dla tej klasy ustawiam styl ".inactive".
// Gdy uztykownik przestaje hoverowac to usuwam dokladnie te same style tym obiektom

$(document).ready(function() {
    $('.container-o-nas-sekcja').hover(function() {
      $(this).addClass('active');
      $('.container-o-nas-sekcja').not(this).addClass('inactive');
    }, function() {
      $(this).removeClass('active');
      $('.container-o-nas-sekcja').not(this).removeClass('inactive');
    });
  });