// Tutaj bedzie funkcja ogarniajaca przesuwanie zdjec na stronie tytulowej w formie slajdow 

window.addEventListener('load',function(){

    // Tworze liste obrazow, które będe zmieniac 
    var img1 = document.getElementById('strona-tytulowa-img1');
    var img2 = document.getElementById('strona-tytulowa-img2');
    var img3 = document.getElementById('strona-tytulowa-img3');
    var img4 = document.getElementById('strona-tytulowa-img4');
    // Tworze teraz Tablice z obrazkow 
    tablicaImg = [img1,img2,img3,img4];
    sliding_start();
});

function sliding_start() {
    // Tutaj jest funkcja która będzie losowala 1 obrazek ktory 
    // bedzie wyswietlany a nastepnie wywola funckje odpowiedzialna
    // za przesuwanie od danego obrazka dalej 
    // Teraz losuje który obrazek wyswietli się pierwszy 
    var ktory = Math.round(Math.random()*4);
    // Teraz switchem wyswietle dany obraz
    switch(ktory){
        case 1: tablicaImg[0].style.display = 'block'; break;
        case 2: tablicaImg[1].style.display = 'block'; break;
        case 3: tablicaImg[2].style.display = 'block'; break;
        case 4: tablicaImg[3].style.display = 'block'; break;
    }

    // Przekazujac ktory musze zmniejszyc o 1 zeby zmatchowal indeksy w tablicy 
    sliding_img(ktory-1);
}

function sliding_img(index){
    // Ta funkcja dostaje index obrazka który zostal wylosowany jako 
    // 1 do wyswietlenia i bedzie pokazywala nastepne obrazki po kolei

    // Szykuje sie zeby zmienic obraz
    var index_img_next = index;

    // Musze sprawdzic czy nie zatoczylem kola(czy dajac indeks +1 nie wyjde poza tablice)

    if (index_img_next + 1 >= 4)
    {
      // Zataczam kolo czyli ustawiam 
      index_img_next = 0;
    }
    else{
    // Zwiekszamy indeks, jezeli nie 
      index_img_next += 1;
    }

    // Tutaj podmieniam obraz
    tablicaImg[index].style.display = 'none';
    tablicaImg[index_img_next].style.display = 'block';

    // A tutaj daje 2s przerwy przed nastepnym uruchomieniem funkcji 
    // A tutaj wywoluje moja funkcje znowu, przekazujac aktualny indeks obrazu
    setTimeout(sliding_img,5000,index_img_next);
}