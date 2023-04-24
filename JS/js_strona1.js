
window.addEventListener('scroll', function(){
    var myText = document.querySelectorAll('.container-strona1-title p');

    myText.forEach(function(text){
        var textPosition = text.getBoundingClientRect();
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (textPosition.top <= windowHeight && textPosition.bottom >= 0)
        {
            text.style.opacity = 1;
            text.style.transform = 'translateY(0)';
        }
        else
        {
            text.style.opacity = 0;
            text.style.transform = 'translateY(100px)';
        }
    });
});