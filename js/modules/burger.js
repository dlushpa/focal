const burgerMenuOpen = document.querySelector('.burger')
const bnav = document.querySelector('.burger_block')
const burgerCloseBtn = document.querySelector('.burger_close')
const burgerLogo = document.querySelector('.header__logo-block')
const navLink = document.querySelectorAll('.nav-link-item')




burgerMenuOpen.addEventListener('click', function(){
    burgerMenuOpen.classList.toggle('burger-active')
    bnav.classList.toggle('burger_block-active')
    burgerMenuOpen.classList.toggle('burger_close-active')
    burgerLogo.classList.add('header__logo-block-active')
})


burgerCloseBtn.addEventListener('click', function(){
    bnav.classList.toggle('burger_block-active')
    burgerMenuOpen.classList.toggle('burger-active')
    burgerLogo.classList.remove('header__logo-block-active')
})

navLink.forEach((clickToMenu)=>{
    clickToMenu.addEventListener('click', function(){
        bnav.classList.toggle('burger_block-active')
        burgerLogo.classList.toggle('header__logo-block-active')
        burgerMenuOpen.classList.remove('burger-active')
    })

})

export {burgerMenuOpen, burgerCloseBtn, navLink}