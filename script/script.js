function iconButtonChange() {
  document.getElementById("active").classList.toggle("icon-change");
}

const btnPassword = document.querySelector('#eye');
btnPassword.addEventListener('click', function () {
    const passwordSee = document.querySelector('#password');
    const changeIcon = document.querySelector('#eye');

    if (passwordSee.getAttribute('type') == 'password') {
        passwordSee.setAttribute('type', 'text');
        changeIcon.src = "/assets/open-eye.svg";
    } else {
        passwordSee.setAttribute('type', 'text');
        changeIcon.src = "/assets/close-eye.svg";
    }
});

const btnConfirmPassword = document.querySelector('#eyePassword');
btnConfirmPassword.addEventListener('click', function () {
    const passwordSee = document.querySelector('#confirm_password');
    const changeIcon = document.querySelector('#eyePassword');

    if (passwordSee.getAttribute('type') == 'password') {
        passwordSee.setAttribute('type', 'text');
        changeIcon.src = "/assets/open-eye.svg";
    } else {
        passwordSee.setAttribute('type', 'text');
        changeIcon.src = "/assets/close-eye.svg";
    }
});

function checarEmail() {
  if (document.forms[0].email.value == ""
    || document.forms[0].email.value.indexOf('@') == -1
    || document.forms[0].email.value.indexOf('.') == -1) {
    alert("Por favor, informe um E-MAIL válido!");
    return false;
  }
}

function maskTel(event) {
  let tecla = event.key;
  let telefone = event.target.value.replace(/\D+/g, "");

  if (/^[0-9]$/i.test(tecla)) {
      telefone = telefone + tecla;
      let tamanho = telefone.length;

      if (tamanho >= 11) {
          return false;
      }
      
      if (tamanho > 10) {
          telefone = telefone.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
      } else if (tamanho > 5) {
          telefone = telefone.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
      } else if (tamanho > 2) {
          telefone = telefone.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
      } else {
          telefone = telefone.replace(/^(\d*)/, "($1");
      }
      event.target.value = telefone;
  } 

  if (!["Backspace", "Delete"].includes(tecla)) {
    return false;
  } 
}

function validatePassword(){
  const password = document.querySelector('#password');
  const passwordConfirm = document.querySelector('#confirm_password');

  passwordConfirm.addEventListener('focusout', () => {
    if( password.value !== passwordConfirm.value){
        alert('As senhas não coincidem');
    }
    return true;
  })
}

function validateUrl() {
  var url = document.getElementById("url").value;
  var pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  if (pattern.test(url)) {
    return true;
  } else {
    alert("Url não é válida!");
    return false;
  }
}

