var in1='';
document.addEventListener('mouseover', f1);
document.addEventListener('mouseout', f2);

 
function f1(event){
	if (event.srcElement.className == 'art' ) {
		var elem = event.srcElement;
		in1 = elem.innerHTML;
			console.log(in1);
	}
	if (event.srcElement.parentElement.className == 'art') {
		var elem = event.srcElement.parentElement;
		 in1 = elem.innerHTML;
		elem.innerHTML+='<div class="social"></div>';
		console.log(in1);
	}
}

function f2(){
	if (event.srcElement.className == 'art' ) {
		event.srcElement.innerHTML = in1;
	}
}