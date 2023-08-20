let slideindex=0;
let slideindex_1;
let bandera=false;
let prev=document.getElementById("prev");
let $next=document.getElementById("next");
let $servicios=document.getElementById("li_servicios");
let $a_servicios=document.getElementById("servicios");
let $flecha=document.querySelector(".flecha");
let $ul_servicios=document.querySelector(".ul_servicios");
let $separador=document.querySelectorAll(".separador");
let $items_servicios=document.querySelectorAll(".items_servicios");
let $slides=document.getElementsByClassName("slider_caras");
let corte_de_tiempo;

console.log(window.location.href.split("/")[5])



function eventos(){
	if(window.location.href.split("/")[5]==="index.html"){
		prev.addEventListener("click" , mover_prev);
		$next.addEventListener("click" , mover_next);
	}

	$servicios.addEventListener("click" , aplicar_efecto);
	$items_servicios.forEach(i=>{
		i.addEventListener("mouseover" , delineado);
		i.addEventListener("mouseout" , delineado);
	})

}
if(window.location.href.split("/")[5]==="index.html"){

	
	
	function showSlides(){
		for (i=0 ; i<$slides.length ; i++){
			$slides[i].style.display="none";
	
		}
	
		$slides[slideindex].style.display="flex";
		slideindex_1=slideindex;
		slideindex++;
	
		if(slideindex>$slides.length-1){
			if(slideindex==3){
				bandera=true;
			}
			slideindex=0;
			
		};
	
	
		corte_de_tiempo=setTimeout(showSlides,5000);
	
	}
	
	function mover_prev(){
		if(slideindex>0 && bandera!=true && slideindex_1!=0|| bandera==true && slideindex!=1){
				if(bandera==true && slideindex==0){
					slideindex=slideindex+1;
				}else{
					slideindex=slideindex-2;
				}
				bandera=false;
				clearTimeout(corte_de_tiempo);
				corte_de_tiempo=setTimeout(showSlides , 100);
	
		}


	
		
	}
	
	function mover_next(){
		clearTimeout(corte_de_tiempo);
		corte_de_tiempo=setTimeout(showSlides , 100);
		console.log("fin")
	}
}


function  aplicar_efecto(){
	$ul_servicios.classList.toggle("no_invisible");
	$flecha.classList.toggle("giro");
	$ul_servicios.classList.toggle("visible");
}

function delineado(e){

	let Array_index=Array.from($items_servicios);
	let index;
	Array_index.forEach((i)=>{
		if(i.firstElementChild===e.target){
			index=Array_index.indexOf(i);
		}
	})
	if(index===-1){
		console.log("error");
	}else{
		if(index!=4){
			$separador[index].classList.add("separador_hover");
			if(e.type==="mouseout"){
				$separador[index].classList.remove("separador_hover");
			}
		}

	}
}


if(window.location.href.split("/")[5]==="index.html"){
	showSlides();
}
eventos();

