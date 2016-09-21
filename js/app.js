window.addEventListener("load", function(){
    var textArea= document.getElementById("texto");
    var boton = document.getElementById("enviar");
    var contador = document.getElementById("contar");
    boton.addEventListener("click", function(e){
        e.preventDefault();
        //para que no aparezca en la url a pesar que es tipo submit
        var textArea = document.getElementById("texto")
        var texto = textArea.value;
        agregarMensaje(textArea.value);
        textArea.value = "";
        contador.style.color = "black";
    });
    
    //Evento
    textArea.addEventListener("keyup",function(e){
         var tecla = e.keyCode;
        cantidadCaracteres(textArea);
        crecerTextarea(tecla);
    });
    
    function agregarMensaje (texto){
        var div = document.createElement("div");
        div.innerText = texto;
        var mensajes =  document.getElementById("mensajes");
        mensajes.insertBefore(div, mensajes.childNodes[0]);
    }
    
    function cantidadCaracteres(texto){
        var longitud = texto.value.length;
        contador.innerHTML = 140 - longitud;
        
        if(longitud >= 140 || longitud == 0){
            //el boton se desabilita 
            boton.disabled = true;
        }else{
            boton.disabled = false;
        }
        if(longitud>120 && longitud < 131){
            contador.style.color="blue";
        }
        else if(longitud>130 && longitud < 141){
            contador.style.color="red";
        }else{
            contador.style.color = "black";     
        }
    }
    
    function crecerTextarea(tecla){
        if(tecla == 13){
            textArea.rows++;
        }else if(tecla == 8){
            textArea.rows--;
        }
        if(textArea.rows < 3){
            textArea.rows = 2;    
        }
    }
    
    
    
});