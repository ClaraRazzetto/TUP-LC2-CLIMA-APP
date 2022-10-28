// Obtengo las ciudades del localStorage
function getCitiesFromLocalStorage() {
    let cities = localStorage.getItem("CITIES");
    if(cities) {
        cities = JSON.parse(cities);
    } else {
        cities = [];
    }
    return cities;
}

// Muestro la alerta que le paso como parametro
function mostrar(e){
    e.style.display = "block";
}

//Oculto todas las alertas 
function ocultarAlerta(){
    let alerta = document.getElementsByClassName("alert");
    for(let i = 0; i < alerta.length; i++) {
        alerta[i].style.display = "none";
    }
}