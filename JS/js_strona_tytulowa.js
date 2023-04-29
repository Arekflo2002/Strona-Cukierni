// Tutaj bedzie funkcja ogarniajaca przesuwanie zdjec na stronie tytulowej w formie slajdow 

// Tworze liste obrazow, które będe zmieniac 
var img1 = document.getElementById('strona-tytulowa-img1');
var img2 = document.getElementById('strona-tytulowa-img2');
var img3 = document.getElementById('strona-tytulowa-img3');
var img4 = document.getElementById('strona-tytulowa-img4');
// Tworze teraz Tablice z obrazkow 
const tablicaImg = [img1,img2,img3,img4];

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
    
}