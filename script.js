import {navBar} from "./components.js"

document.querySelector('.navBar').innerHTML = navBar();

let bars=document.querySelector('.bars i')
function openModal(){
    
    bars.addEventListener('click',()=>{
        let modal=document.querySelector('.modal')
        modal.style.display='block'
        bars.style.display='none'
    })
    
}
openModal()
function closeModal(){
    let closeM=document.querySelector('.closeM')
    let modal=document.querySelector('.modal')
    closeM.addEventListener('click',()=>{
        modal.style.display='none'
        bars.style.display='block'
    })

    let listes=document.querySelectorAll('.modal ul li')
    listes.forEach(list=>{
        list.addEventListener('click',()=>{
            modal.style.display='none'
            bars.style.display='block'
        })
    })
}
closeModal();
