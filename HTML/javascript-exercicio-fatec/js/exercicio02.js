var data = new Date();
var h = data.getHours(); 
var m = data.getMinutes();

function hora() {
document.getElementById('msgTime').textContent= (h+":"+m);

if (h >=0 & h < 12) {
	document.getElementById("imagem").src="img/nascendo.jpg";
	} else if (h >=12 & h < 18) {
	document.getElementById("imagem").src="img/meiodia.jpg";
	} else {
	document.getElementById("imagem").src="img/noite.jpg";
	}

}

function texto() {
	if (h >=0 & h < 12) {
	alert('Bom dia');
	} else if (h >=12 & h < 18) {
	alert('Boa tarde');
	} else {
	imagem.innerHTML = ("<p>Boa Noite</p>")

	}
}



