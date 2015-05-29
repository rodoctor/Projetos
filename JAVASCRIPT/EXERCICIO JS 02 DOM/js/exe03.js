function addImagem() {
	var box = document.getElementById("box").value;
	var image = document.getElementById("image");

	image.setAttribute("src", box);
	image.height = 150;
}