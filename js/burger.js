let burgerCloseBtn = document.querySelector ('.burger__closeBtn_js');
let burgerOpenBtn = document.querySelector ('.header__nav-button_js');
let burger = document.querySelector ('.burger_js');
let burgerCloseBackground = document.querySelector ('.burger_js');

burgerOpenBtn.addEventListener('click', ()=> {
    burger.classList.remove('burger__open')
})

burgerCloseBtn.addEventListener('click', ()=> {
    burger.classList.add('burger__open');
})

window.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) {
        burger.classList.add('burger__open');
    }
})

burgerCloseBackground.addEventListener('click', ()=> {
    burger.classList.add('burger__open');
})

