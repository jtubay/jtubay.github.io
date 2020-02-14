const texts = ['Hello! I am Jean Tubay, a full stack developer. I work with JS (with many frame works), mongoDB and MYSQL. Look at my work below'];
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
    setTimeout(type, 200)

}())