/* Adiciona Botão e validação de Login */
let buttonLogin = document.querySelector('#button-login');
let inputEmail = document.querySelector('#input-email');
let inputPassword = document.querySelector('#input-password');
let validationLogin = 'tryber@teste.com';
let validationPassword = '123456';

buttonLogin.addEventListener('click', validationButton);
function validationButton(){
    if(inputEmail.value === validationLogin && inputPassword.value === validationPassword){
        alert('Olá, Tryber!');
    }
    else{
        alert('Email ou senha inválidos.');
    }
}
