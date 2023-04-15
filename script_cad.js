function mostrarsenha1(){
    var  inputPass = document.getElementById('senha')
    var  btnShowPass = document.getElementById('ver-senha')
   
    if( inputPass.type === 'password'){
        inputPass.setAttribute('type', 'text')
    }else{
        inputPass.setAttribute('type', 'password')
    }
}

function mostrarsenha2(){
    var  inputPass = document.getElementById('confirm-senha')
    var  btnShowPass = document.getElementById('ver-senha-confirm')
   
    if( inputPass.type === 'password'){
        inputPass.setAttribute('type', 'text')
    }else{
        inputPass.setAttribute('type', 'password')
    }
}