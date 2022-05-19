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