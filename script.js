let sayac = 0;
let islemler = document.querySelector('body .islemler')
let caret = document.querySelector('#caret')


function menu() {
    ++sayac;
    if (sayac == 1) {
        islemler.style.display = 'block'
        caret.style.transform = 'rotate(180deg)'
    }
    else {
        islemler.style.display = 'none'
        caret.style.transform = 'rotate(0deg)'
        sayac = 0;
    }
}