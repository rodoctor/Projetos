function validar() {
var formulario = document.getElementById("formulario");
var nome = formulario.nome.value;
var idade = +formulario.idade.value;
var semestre = +formulario.semestre.value;

var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
var email = +formulario.email.value;

//======================NOME==================
if (nome == "") {
alert('Campo NOME Obrigatório');
formulario.nome.focus();
return false;
}

if (nome.length < 20) {
alert('Digite seu nome completo');
formulario.nome.focus();
return false;
}

//===============================================


//===================IDADE=================
if (idade == "") {
alert('Campo IDADE Obrigatório');
formulario.idade.focus();
return false;
}

if (isNaN(idade)) {
alert('Você não digitou um número');
formulario.cnpj.focus();
return false;
}

if (idade < 0) {
alert('Digite um número POSITIVO');
formulario.cnpj.focus();
return false;
}
//===============================================


//==============SEMESTRE=========================
if (semestre == "") {
alert('Campo SEMESTRE Obrigatório');
formulario.semestre.focus();
return false;
}

if (semestre < 1 || semestre > 6) {
alert('Digite um semestre entre 1 e 6');
formulario.semestre.focus();
return false;
}

//===============================================


//==============EMAIL=======================
if (email == "") {
alert('Campo EMAIL Obrigatório');
formulario.telefone.focus();
return false;
}

if (!filtro.test(document.getElementById("email").value)) {
alert('Por favor, digite o email corretamente');
document.getElementById("email").focus();
return false
}


//===============================================


//==================EMAIL========================
//===============================================


//==============RESPONSAVEL======================
//===============================================

}