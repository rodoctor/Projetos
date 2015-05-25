function tabuada() {
	var formulario = window.document.getElementById("formulario");
	var i = +formulario.num.value;

            for (var j = 0; j < 11; j++) {
               window.document.write(i + " x " + j + " = " + i * j + "<br />");
            }
}