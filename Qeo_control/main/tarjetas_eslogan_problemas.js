let $eslogan=document.querySelector(".eslogan");
let $problemas=document.querySelector(".problemas");
let $problema=document.getElementById("problema");


$eslogan.addEventListener("animationend" ,action);  
$problemas.addEventListener("mouseover" , action);
$problemas.addEventListener("mouseout" , action);
$eslogan.addEventListener("mouseover" , action);
$eslogan.addEventListener("mouseout" , action); 


function action(e){
    if(e.type==="animationend"){
        $eslogan.classList.remove("eslogan_atras");
        $problemas.classList.remove("animacion_problemas");
    }
    if( e.target===$problemas.firstElementChild ||  e.target===$eslogan.firstElementChild  ){

        
        $eslogan.classList.add("eslogan_atras");
        $problemas.classList.add("animacion_problemas");    
        
        setTimeout(()=>{
            if(e.type==="mouseout"){
                $problema.style.zIndex=1;
                $eslogan.style.zIndex=2
                $problema.style.height="95%"
            }else{
                $problema.style.zIndex=2;
                $eslogan.style.zIndex=1;
                $problema.style.height="100%"
            }
        } , 500)

    }
    

}




