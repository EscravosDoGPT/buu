function mostrarsenhalanding(){
    var  inputPass = document.getElementById('senha')
    var  btnShowPass = document.getElementById('ver-senha')

    if( inputPass.type === 'password'){
        inputPass.setAttribute('type', 'text')
    }else{
        inputPass.setAttribute('type', 'password')
    }
}