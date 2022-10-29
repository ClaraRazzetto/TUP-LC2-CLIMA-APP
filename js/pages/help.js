function init(){

    let nombre = document.getElementById("Nombre");
    let email = document.getElementById("Email");
    let mensaje = document.getElementById("Mensaje");
    let limpiar = document.getElementById("Limpiar");
    let enviar = document.getElementById("Enviar");

    limpiar.onclick = function (e) {
        nombre.value = "";
        email.value = "";
        mensaje.value = "";
    }

    enviar.onclick = function(e){
        enviarEmail(email.value);
    }
}

function enviarEmail(email){
    
}