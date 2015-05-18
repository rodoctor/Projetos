function hora() {
var data = new Date();
var h = data.getHours(); 
var m = data.getMinutes();
var mensagem = document.write(h+":"+m);
}