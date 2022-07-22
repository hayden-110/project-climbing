function openMenu(){
    console.log('open')
    const mobMenu = document.querySelector('.mob-menu');
    mobMenu.classList.remove('none');
}


function closeMenu(){
    console.log('closed')
    const mobMenu = document.querySelector('.mob-menu');
    mobMenu.classList.add('none');
}

const mobClimbing = document.querySelector('.droplist-climbing');
const climbingArr = document.querySelector('#climbing-arr')
const mobAbout = document.querySelector('.droplist-about');
const aboutArr = document.querySelector('#about-arr')


function subMenu(par, arr){
    
    if(par.classList.contains('none')){
    par.classList.remove('none');
    arr.classList.add('rotate')
    return
    }
    if (!par.classList.contains('none')){
    par.classList.add('none');
    arr.classList.remove('rotate')
    return
    }
}

const popUp = document.querySelector('.cookie-pop')
const settingsBox = document.querySelector('.cookie-settings');

function openSettings(){
    if(!popUp.classList.contains('none')){popUp.classList.add('none')};
    settingsBox.classList.remove('none');
}

