

function caraOCruz()
{ 
   
    let x=Math.floor(Math.random ()*2); 
    if  (x==1) {
        
        
        document.getElementById("imagen").innerHTML=`<p>Ha salido cruz</p> <div ><img src="./assets/cruz.png" alt="Cara" ></div>`
    
    }
     else {   
        
         document.getElementById("imagen").innerHTML=`<p>Ha salido cara</p><div > <img src="./assets/cara.png"  alt="Cara" class="imagen"></div>`
        
    }
}   
