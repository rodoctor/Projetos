function resize() {
	var w = window.innerWidth;
	var h = window.innerHeight;

	var medidas = document.getElementById("medidas");

	medidas.innerHTML = "Altura: " + h + ", Largura: " +w;
}