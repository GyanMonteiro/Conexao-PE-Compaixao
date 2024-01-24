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