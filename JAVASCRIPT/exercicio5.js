
var	seg;
var	min;	

function startSec(){
 	var	i	=	0;
 	document.getElementById("seg").innerHTML = " ";	
 	seg	=	setInterval(function (){	 
 			document.getElementById("seg").innerHTML =  + (i +1);				
 			i++;
 			if (i == 59) {
 				i = -2;
 				i++;
 			}
 	},	1000);
}

function startMin(){	
 	var	i	=	0; 		
 	min	=	setInterval(function (){	
 			document.getElementById("min").innerHTML = (i+1)+":";	
 			i++;
			if (i == 59) {
 				i = -2;
 				i++;
 			} 				
 	},	60000);	
}

function stop(){	
	window.clearInterval(seg,min);	
}

function zerar(){	
	window.clearInterval(seg,min);	
	document.getElementById("min").innerHTML = "0";
	document.getElementById("seg").innerHTML = ":0";
}