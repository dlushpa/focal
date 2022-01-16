const modal = document.querySelector('.modal__wrapper')
const modalOverlay = document.querySelector('.modal__overlay')
const openModal = document.querySelectorAll('.portfolio__container-item:not(:first-child)')
const modalClose = document.querySelector('.close')
let imageSrc = ''
const modalImg = document.querySelector('.modal__img')
const imgSearch = document.querySelector('.search_icon')

openModal.forEach(function(element){
    element.addEventListener('click', function(event){
        modal.style.display = 'block';
        modalOverlay.style.display = 'block';
        imageSrc = element.getAttribute('image-src')
        modalImg.setAttribute('src', imageSrc)  
    })  
})

modalClose.addEventListener('click', function(){
    modal.style.display = 'none';
    modalOverlay.style.display = 'none';
    modalImg.setAttribute('src', '')
    modalClose.removeEventListener('click',function(){    
    })
})

export {openModal, modalClose}