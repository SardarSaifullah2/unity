const menu_links = document.querySelector('.header_right')
const open_icon = document.querySelector('.mobile_menu')

open_icon.addEventListener('click', ()=>{
    menu_links.classList.toggle('active')
    open_icon.classList.toggle('active')
})
