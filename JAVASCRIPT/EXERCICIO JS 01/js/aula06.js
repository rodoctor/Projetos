function calcularIMC() {	
	var formulario = document.getElementById("form");
	var metros = +formulario.metros.value;
	var centimetros = +formulario.centimetros.value;
	var kilos = +formulario.kilos.value;
	var altura = ( metros * 100 + centimetros)/100;

	var imc = kilos / (altura * altura);

	formulario.imc.value = imc.toFixed(2);
}


