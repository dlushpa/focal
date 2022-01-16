const allSection = document.querySelectorAll('[section-id]')
const scrollBtn = document.querySelectorAll('.item-scrolling')

scrollBtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
       const btnAttribute = btn.getAttribute('scroll-to')
        scrollingTo(btnAttribute)
    })
})


function scrollingTo(btn){
    allSection.forEach((item)=>{
        if(item.getAttribute('section-id')===btn){
            window.scrollTo({
                top: item.offsetTop,
                behavior: "smooth"
            });
        }
    })   
}

export {scrollBtn}