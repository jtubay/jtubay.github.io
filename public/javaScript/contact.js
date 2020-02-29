const GTInput = document.querySelectorAll('.gt-input');

for(let i = 0; i < GTInput.length; i++){
    let currentLabel = GTInput[i].parentElement.firstElementChild;
    
    GTInput[i].addEventListener('focus', ()=>{
        currentLabel.classList.add('move-up');
    })
    GTInput[i].addEventListener('blur', ()=>{
        if(GTInput[i].value === ''){
            currentLabel.classList.remove('move-up');
        }
    })
}