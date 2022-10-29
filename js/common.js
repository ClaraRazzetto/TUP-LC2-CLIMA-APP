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

async function consultarAPI(ciudad){
    document.getElementById("loader").style.display = "block";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ ciudad +"&appid=77f25957183b7a16a29a8321b9e76893&units=metric&lang=es";
    const respuesta = await fetch(url);
    
    if(respuesta.ok){
        const data = await respuesta.json();
        await accionAsincrona();
        return data;
    }else{
        throw new Error();
    }

}

const accionAsincrona = async () => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 1000);
  });   
}