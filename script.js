const button = document.querySelectorAll('.Symb');
const textarea = document.querySelector('textarea');



button.forEach(buttonItem => {
    buttonItem.addEventListener("click", ()=>{
        textarea.value += buttonItem.innerHTML;
    })
})

