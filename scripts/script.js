const btnMenu = document.querySelector('.btnMenu');
const navMobile = document.querySelector('.navMobile');
const btnClose = document.querySelector('.iconClose');

btnMenu.addEventListener ('click', ()=> {
    navMobile.classList.add('active')
    document.body.classList.add('activeBody')
})

btnClose.addEventListener ('click', ()=> {
    navMobile.classList.remove('active')
    document.body.classList.remove('activeBody')
})