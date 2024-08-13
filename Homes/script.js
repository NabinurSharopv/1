let input = document.querySelector('.input-box input'),
    inputBox = document.querySelector('.input-box'),
    eye = document.querySelector('.input-box i'),
    span = document.querySelector('span'),
    indicator_box = document.querySelector('.indicator-box'),
    indicator_boxDiv = document.querySelector('.indicator-box div');




eye.addEventListener('click', ()=> {
    if(input.type == "password"){
        input.type = "text";
        eye.classList.add('fa-eye')
        eye.classList.remove('fa-eye-slash');
    }else{
        input.type = "password";
        eye.classList.add('fa-eye-slash');
        eye.classList.remove('fa-eye')
    }
})    

input.addEventListener('input', ()=> {

    let inputLength = input.value.length

    if(inputLength <= 3){
        indicator_boxDiv.classList.add("oson");
        indicator_boxDiv.classList.remove("urta");
        indicator_boxDiv.classList.remove("qiyin");
        span.innerHTML = `🤕 Siz kiritgan password oson`
    }
    else if(inputLength >= 3 && inputLength <= 6){
        indicator_boxDiv.classList.remove("oson");
        indicator_boxDiv.classList.add("urta");
        indicator_boxDiv.classList.remove("qiyin");
        span.innerHTML = `😒 Siz kiritgan password O'rta darajada`
    }else{
        indicator_boxDiv.classList.remove("oson");
        indicator_boxDiv.classList.remove("urta");
        indicator_boxDiv.classList.add("qiyin");
        span.innerHTML = `😎 Siz kiritgan password mukammal`
    }
    
})