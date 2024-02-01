let btnFisico = document.getElementById('btn-fisico');
let btnJuridico = document.getElementById('btn-juridico');

let formFisico = document.getElementById('form-fisico');
let formJuridico = document.getElementById("form-juridico");

btnJuridico.addEventListener("click", function () {
  btnFisico.classList.remove("border-class");
  btnJuridico.classList.add("border-class");

    formJuridico.classList.remove("form-hidden");
    formFisico.classList.add("form-hidden")
});


btnFisico.addEventListener("click", function () {
  btnJuridico.classList.remove("border-class");
  btnFisico.classList.add("border-class");

  formFisico.classList.remove("form-hidden");
  formJuridico.classList.add("form-hidden");
});




document.getElementById("telefone").addEventListener("input", function (event) {
  let input = event.target;
  let value = input.value.replace(/\D/g, "");

  if (value.length > 10) {
    input.value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(
      7,
      11
    )}`;
  } else {
    input.value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(
      6,
      10
    )}`;
  }
});


document.getElementById("celular").addEventListener("input", function (event) {
  let input = event.target;
  let value = input.value.replace(/\D/g, "");

  if (value.length > 10) {
    input.value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(
      7,
      11
    )}`;
  } else {
    input.value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(
      6,
      10
    )}`;
  }
});

document.getElementById('cpf').addEventListener('input', function(event) {
      let input = event.target;
      let value = input.value.replace(/\D/g, ''); 

      if (value.length > 9) {
      
        input.value = `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6, 9)}-${value.slice(9, 11)}`;
      } else if (value.length > 6) {
        
        input.value = `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6, 9)}`;
      } else if (value.length > 3) {
        
        input.value = `${value.slice(0, 3)}.${value.slice(3, 6)}`;
      } else {
       
        input.value = value.slice(0, 3);
      }
    });

    document.getElementById('cnpj').addEventListener('input', function(event) {
      let input = event.target;
      let value = input.value.replace(/\D/g, '');

      if (value.length > 12) {
        
        input.value = `${value.slice(0, 2)}.${value.slice(2, 5)}.${value.slice(5, 8)}/${value.slice(8, 12)}-${value.slice(12, 14)}`;
      } else if (value.length > 8) {
      
        input.value = `${value.slice(0, 2)}.${value.slice(2, 5)}.${value.slice(5, 8)}/${value.slice(8, 12)}`;
      } else if (value.length > 5) {
        
        input.value = `${value.slice(0, 2)}.${value.slice(2, 5)}.${value.slice(5, 8)}`;
      } else if (value.length > 2) {
        
        input.value = `${value.slice(0, 2)}.${value.slice(2, 5)}`;
      } else {
        
        input.value = value.slice(0, 2);
      }
    });


document.getElementById("telefone-juridico").addEventListener("input", function (event) {
  let input = event.target;
  let value = input.value.replace(/\D/g, "");

  if (value.length > 10) {
    input.value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(
      7,
      11
    )}`;
  } else {
    input.value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(
      6,
      10
    )}`;
  }
});


document.getElementById("celular-juridico").addEventListener("input", function (event) {
  let input = event.target;
  let value = input.value.replace(/\D/g, "");

  if (value.length > 10) {
    input.value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(
      7,
      11
    )}`;
  } else {
    input.value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(
      6,
      10
    )}`;
  }
});