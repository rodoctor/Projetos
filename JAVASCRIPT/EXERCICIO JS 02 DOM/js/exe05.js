var minutos = 0;
var segundos = 0;
// var tempo = minutos + ":" + segundos;

function fstart() {
	var min = document.getElementById("min");
	var seg = document.getElementById("seg");

	if (segundos < 59) {
		segundos++;
		if (segundos < 10) {
			seg.innerHTML = "0"+segundos;
		} else {
			seg.innerHTML = segundos; 
		}
		return false;
	}

	if (segundos == 59 && minutos < 59) {
		segundos = 0;
		minutos++;
		if (minutos < 10) {
			min.innerHTML = "0"+minutos;
			min.segundos = segundos;

		} else {
			min.innerHTML = minutos;
			seg.innerHTML = segundos; 
		}
		
		
		return false;
	}

}