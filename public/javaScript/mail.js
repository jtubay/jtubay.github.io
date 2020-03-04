$('form').on('submit', (e) => {
    e.preventDefault();
    const message= $('#finalMessage');
    const email = $('#email').val().trim();
    const subject = $('#subject').val().trim();
    const text = $('#text').val().trim();

    if(email && subject && text){
        message.html('Your email has been sent!!!')
    }
  

    const data = {
        email,
        subject,
        text
    };

    $.post('/email', data, function(){
        console.log('server got it!!!!!')
    });

})