function alterar() {
	var formulario = window.document.getElementById("formulario");
	var radTexto = formulario.radTexto;
	var radNumero = formulario.radNumero;
	var radSenha = formulario.radSenha;
	var radValidar = formulario.radValidar;
	var radCor = formulario.radCor;
	var box = formulario.box;

	if (radTexto.checked) {
		box.setAttribute("type", "text");
	} 

	else if (radNumero.checked) {
		box.setAttribute("type", "number");
	}

	else if (radSenha.checked) {
		box.setAttribute("type", "password");
	}

	else if (radValidar.checked) {
		box.setAttribute("type", "checkbox");
	}

	else if (radCor.checked) {
		box.setAttribute("type", "color");
	}
}