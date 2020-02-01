const main = document.querySelector('.main');
const nav = document.querySelector('.nav');

const offset = main.offsetHeight-nav.offsetHeight;

window.onscroll = () => {
    if(window.pageYOffset>offset){
        nav.classList.remove('bottom-nav');
        nav.classList.add('top-nav');
    }else{
        nav.classList.add('bottom-nav');
        nav.classList.remove('top-nav');
    }
}