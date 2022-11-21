/* Adiciona Botão e validação de Login */
const buttonLogin = document.querySelector('#button-login');
const inputEmail = document.querySelector('#input-email1');
const inputPassword = document.querySelector('#input-password');
const validationLogin = 'tryber@teste.com';
const validationPassword = '123456';
const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

function validationButton() {
  if (inputEmail.value === validationLogin && inputPassword.value === validationPassword) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
buttonLogin.addEventListener('click', validationButton);

function counterCharacter() {
  const counterText = 500 - textArea.value.length;
  counter.innerHTML = counterText;
}
textArea.addEventListener('keyup', counterCharacter);

document.getElementById('submit-btn').disabled = true;

// consultamos o repositório do Arturo Vaine para o requisito 18 - link: https://github.com/tryber/sd-014-b-project-trybewarts/pull/42/commits/cef3445c02af40a04aaed8277aa1034de02b04e7

const submitButton = document.getElementById('submit-btn');
const checkboxAgreement = document.getElementById('agreement');
function checkedButton() {
  if (checkboxAgreement.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}
checkboxAgreement.addEventListener('click', checkedButton);

const form = document.querySelector('#evaluation-form');
const name = document.querySelector('#input-name');
const lastName = document.querySelector('#input-lastname');
const email = document.querySelector('#input-email');
const house = document.querySelector('#house');
const family = document.querySelectorAll('#family');
const subjects = document.querySelectorAll('.subject');
const rating = document.querySelectorAll('#rate');
const comment = document.querySelector('#textarea');

function checkFamily() {
  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked) {
      return family[index].value;
    }
  }
}

function checkSubject() {
  let subjectList = '';
  for (let index = 0; index < subjects.length; index += 1) {
    if (subjects[index].checked) {
      subjectList += `${subjects[index].value}, `;
    }
  }
  return subjectList;
}

function checkRate() {
  for (let index = 0; index < rating.length; index += 1) {
    if (rating[index].checked) {
      return rating[index].value;
    }
  }
}

// Consultamos o repositório do Arturo Vaine para resolver o requisito 21 - link: https://github.com/tryber/sd-014-b-project-trybewarts/pull/42/commits/b6c4260b301962630f1816c3b21c919ebfae1b9f

function submitForm() {
  form.innerHTML = '';
  form.innerHTML += `<p>Nome: ${name.value} ${lastName.value}</p>`;
  form.innerHTML += `<p>Email: ${email.value}</p>`;
  form.innerHTML += `<p>Casa: ${house.value}</p>`;
  form.innerHTML += `<p>Família: ${checkFamily()}</p>`;
  form.innerHTML += `<p>Matérias: ${checkSubject()}</p>`;
  form.innerHTML += `<p>Avaliação: ${checkRate()}</p>`;
  form.innerHTML += `<p>Observações: ${comment.value}</p>`;
}
submitButton.addEventListener('click', submitForm);

// Daniel Mondaini e Gustavo Faria