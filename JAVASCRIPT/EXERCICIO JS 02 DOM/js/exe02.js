function converter () {
	var temperatura = document.getElementById("temp").value;
	var c = document.getElementById("celsius");

	c = document.getElementById("celsius").innerHTML = (temperatura - 32) / 1.8;

	if (c >= 0 && c <=5) {
		document.getElementById("celsius").style.color = "#ADD8E6";
	};
	if (c > 5 && c <=10) {
		document.getElementById("celsius").style.color = "#00BFFF";
	};
	if (c > 10 && c <=15) {
		document.getElementById("celsius").style.color = "#ADFF2F";
	};
	if (c > 15 && c <=20) {
		document.getElementById("celsius").style.color = "#FFd700";
	};
	if (c > 20 && c <=25) {
		document.getElementById("celsius").style.color = "#FFA07A";
	};
	if (c > 25 && c <=30) {
		document.getElementById("celsius").style.color = "#FF8C00";
	};
	if (c > 35 && c <=40) {
		document.getElementById("celsius").style.color = "#FF4500";
	};
	if (c > 40) {
		document.getElementById("celsius").style.color = "#FF0000";
	};
}
