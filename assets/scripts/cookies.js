import Cookies from "/node_modules/js-cookie/dist/js.cookie.mjs";


const popUp = document.querySelector('.cookie-pop')
const settingsBox = document.querySelector('.cookie-settings');
let cookieList;

document.addEventListener('DOMContentLoaded', () => {
    if(Cookies.get('project-essential')){
        let functionCookie = Cookies.get('functionCookie');
        let marketCookie = Cookies.get('marketCookie');
        let analyCookie = Cookies.get('analyCookie');
    } else {
        Cookies.set('project-essential', true, { expires: 28, path: '', sameSite: 'strict'});
        popUp.classList.remove('none')
        // console.log('no-cookie');
    }
    
    const currentCookies = Cookies.get();

})


function acceptAll(){
    Cookies.set('functionCookie', true, { expires: 28, path: '', sameSite: 'strict'})
    Cookies.set('marketCookie', true, { expires: 28, path: '', sameSite: 'lax'})
    Cookies.set('analyCookie', true, { expires: 28, path: '', sameSite: 'strict'})
}
const acceptAllBox = document.querySelector('#acceptAll');
acceptAllBox.addEventListener('click', e => {
    acceptAll();
})

const checkBoxes = document.querySelectorAll('#checkbox');

function saveCookies(){
    checkBoxes.forEach(box => {
        let boxCheck = box.checked;
        let sameSiteVar = 'strict';
        if(box.name == 'marketCookie'){
            sameSiteVar = 'lax'
        }
        let expiry;
        if(box.checked){
            expiry = 28
        } else { expiry = 0 }

        console.log(box.name, box.checked, expiry, sameSiteVar)
        
        Cookies.set(box.name, box.checked, { expires: expiry, sameSite: sameSiteVar })
        // Cookies.set(`${box.name}`, `${box.checked}`, { expires: expiry, sameSite: `${sameSiteVar}` })
        
    })
}


document.querySelector('#saveCookie').addEventListener('click', x => {
    saveCookies();
    return settingsBox.classList.add('none');
})

document.querySelectorAll('#acceptAll').forEach(x => {
    x.addEventListener('click', e => {
        const name = x.name;
        const z = document.querySelector(`.${name}`).classList.add('none');
        acceptAll();
    }) 
});

// document.getElementsByName('functionCookie')
export default {acceptAll, saveCookies}