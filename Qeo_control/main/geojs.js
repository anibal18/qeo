var slideindex=0;
var slideindex_1;
var bandera=false;
var prev=document.getElementById("prev");
var next=document.getElementById("next");
var corte_de_tiempo;

function eventos_prev_next(){
	prev.addEventListener("click" , mover_prev);
	next.addEventListener("click" , mover_next)
}


function showSlides(){

	var i;
	var slides=document.getElementsByClassName("slider_caras");



	for (i=0 ; i<slides.length ; i++){
		slides[i].style.display="none";

	}

	slides[slideindex].style.display="flex";
	slideindex_1=slideindex;
	slideindex++;

	if(slideindex>slides.length-1){
		if(slideindex==3){
			bandera=true;
		}
		slideindex=0;
		
	};


	corte_de_tiempo=setTimeout(showSlides,2000);



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
}


showSlides();
eventos_prev_next();