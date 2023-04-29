const who = document.getElementById('who');
const why = document.getElementById('why');
const what = document.getElementById('what');
const modalWho = document.getElementById('modal-who');
const modalWhat = document.getElementById('modal-what');
const modalWhy = document.getElementById('modal-why');
const closeModalWho = document.getElementById('close-modal-who');
const closeModalWhat = document.getElementById('close-modal-what');
const closeModalWhy = document.getElementById('close-modal-why');

console.log(modalWho);

who.addEventListener('click',()=>{
    console.log("modal for who");
    modalWho.setAttribute('style','visibility:visible;');
})

closeModalWho.addEventListener('click',()=>{
    modalWho.setAttribute('style','visibility:hidden;');
})

why.addEventListener('click',()=>{
    modalWhy.setAttribute('style','visibility:visible;');
})

closeModalWhy.addEventListener('click',()=>{
    modalWhy.setAttribute('style','visibility:hidden;');
})

what.addEventListener('click',()=>{
    modalWhat.setAttribute('style','visibility:visible;');
})

closeModalWhat.addEventListener('click',()=>{
    modalWhat.setAttribute('style','visibility:hidden;');
})
