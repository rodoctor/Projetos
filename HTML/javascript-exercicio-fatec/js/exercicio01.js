function calcularIMC() {
	var formulario = document.getElementById("formulario");
	var metros = +formulario.metros.value;
	var centimetros = +formulario.centimetros.value;
	var peso = +formulario.peso.value;

	var altura = (metros * 100 + centimetros) /100;
	var imc = peso / (altura * altura);

	var mensagem = document.getElementById("mensagem");

	formulario.imc.value = imc.toFixed(2);


	if (imc < 18.5) {
		mensagem.innerHTML = "Abaixo do Peso";
	} 

	else if (imc <= 25) {
		mensagem.innerHTML = "Peso Normal";
	}

	else if (imc <= 30) {
		mensagem.innerHTML = "Acima do Peso";
	}

	else {
		mensagem.innerHTML = "Obeso";
	}

	

}