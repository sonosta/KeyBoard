const button = document.querySelectorAll('.Symb');
const backspace = document.querySelector('.Backspace')
const caps = document.querySelector('.Caps')
const textarea = document.querySelector('textarea');
const space = document.querySelector('.Space');
const shift = document.querySelector('.Shift')
//Переменная для CapsLock
var capsCount = 0;
//Переменаня для Shift
var shiftCount = 0;


button.forEach(buttonItem => {
    buttonItem.addEventListener("click", ()=>{
        textarea.value += buttonItem.innerHTML;
    })
})

//Функция удаления
backspace.addEventListener("click",()=>{
    textarea.value = textarea.value.slice(0, -1);
})

//Функция CapsLock
caps.addEventListener("click", ()=>{
    if (capsCount == 0){
        button.forEach(buttonItem => {
            buttonItem.innerHTML = buttonItem.innerHTML.toUpperCase();
            caps.style.backgroundColor = '#444'
            capsCount = 1;
        })
    }
    else{
        button.forEach(buttonItem => {
            buttonItem.innerHTML = buttonItem.innerHTML.toLowerCase();
            caps.style.backgroundColor = '#222222'
            capsCount = 0;
        })
    }
})

//Функция space
space.addEventListener("click", ()=> {
    textarea.value = textarea.value + " ";
})

shift.addEventListener("click", () => {
    if (shiftCount == 0){
        shift.style.backgroundColor = '#444';
        button.forEach(buttonItem =>{
            buttonItem.innerHTML = buttonItem.innerHTML.toUpperCase();
        })
    }
})