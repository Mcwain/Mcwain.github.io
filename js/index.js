let modalWindowCloseBtn = document.querySelector ('.modalWindow__closeBtn_js');
let modalWindowOpenBtn = document.querySelector ('.main__slider-btn_js');
let modalWindow = document.querySelector ('.modalWindow_js');
let modalWindowCloseBackground = document.querySelector ('.modalWindow__background_js');

modalWindowOpenBtn.addEventListener('click', ()=> {
    modalWindow.classList.remove('hidden')
})

modalWindowCloseBtn.addEventListener('click', ()=> {
    modalWindow.classList.add('hidden');
})

window.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) {
        modalWindow.classList.add('hidden');
    }
})

modalWindowCloseBackground.addEventListener('click', ()=> {
    modalWindow.classList.add('hidden');
})


