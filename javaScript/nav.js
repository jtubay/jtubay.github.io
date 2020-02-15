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

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')
    burger.addEventListener('click', ()=>{
        //toggle
        nav.classList.toggle('navActive')
        //active links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            } else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`
            }
            
            
        });
        //burger animation
        burger.classList.toggle('toggle')

    });
}
const app = ()=> {
    navSlide()
}

app()