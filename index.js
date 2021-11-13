function valor()
{
    return Math.random();
}

function caraOCruz()
{ 
   
    let x=Math.floor(Math.random ()*2); 
    if  (x==1) {
        let img=new Image;
        img.src="imagens/cruz.jpg";
        document.getElementById("imagen").innerHTML="Ha salido cara";
        
    }
     else {   
        let img=new Image;
        img.src="imagens/cara.jpg";
        document.getElementById("imagen").innerHTML="Ha salido cruz";
        
    }
}   
