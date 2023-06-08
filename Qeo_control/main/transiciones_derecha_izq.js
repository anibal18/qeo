var derecha=document.querySelectorAll('#presentacion_servicio');

var derecha1=document.querySelectorAll("#presupuesto");


var lista=[derecha , derecha1];

function mostrarScroll(){
	var scroll=document.documentElement.scrollTop;
	var item;
	for(i=0 ; i<lista.length ;i++){
		item=lista[i];
		if(i==0){
			var altura_elemento=item[i].offsetTop;
			if(altura_elemento-800 < scroll){
				derecha[0].classList.add(".animacion_derecha");
				item[i].style.opacity=1;
				window.requestAnimationFrame(function(time) {
      				document.querySelector("#presentacion_servicio").className = "animacion_derecha";
 				});
				
			}

		}else{
			var altura_elemento=item[0].offsetTop;
			if(altura_elemento-800 < scroll){
				derecha1[0].classList.add(".animacion_derecha_uno");
				window.requestAnimationFrame(function(time) {
      				document.querySelector("#presupuesto").className = "animacion_derecha_uno";
 				});
 				item[0].style.opacity=1;
				
			}

		}

	}
}

window.addEventListener("scroll" , mostrarScroll); 