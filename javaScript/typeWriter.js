const texts = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt asperiores, doloribus obcaecati exercitationem at non dolore hic voluptates velit quia consectetur dicta veritatis sint. Quos ducimus beatae odit at amet.'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {

    if(count === texts.length){
        count =0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index)

    document.querySelector('.typingTwo').textContent = letter;
    if(letter.length === currentText.length){
        count++
        index = 0;
    }
    setTimeout(type, 100)

}())