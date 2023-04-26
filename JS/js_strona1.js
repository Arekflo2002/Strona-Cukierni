

// Dzialanie funkcji: Dodaje funkcje skroll do mojego okna strony, która najpierw zbiera każdy napis w klasie "...-title" znaczniku "p"
// Nastepnie iteruje petla i pobieram pozycje uzytkownika oraz wysokosc strony
// Sprawdzam czy uzytkownik znajduje sie na pozycji, gdzie jest w stanie zoabczyc napisy 
// Nastepnei nadaje style kazdemu z napisowi, mianowicie "przekladam" napis i zmieniam przenikalnosc na 0/1.
window.addEventListener('scroll', function(){
    var napisy = document.querySelectorAll('.container-strona1-title p');

    napisy.forEach(function(napis){
        var pozycja_klient = napis.getBoundingClientRect();
        var pozycja_okna = window.innerHeight || document.documentElement.clientHeight;
        if (pozycja_klient.top <= pozycja_okna && pozycja_klient.bottom >= 0)
        {
            napis.style.opacity = 1;
            napis.style.transform = 'translateY(0)';
        }
        else
        {
            napis.style.opacity = 0;
            napis.style.transform = 'translateY(100px)';
        }
    });
});