function init(){

    let nuevaCiudad = document.getElementById("InsertarCiudad"); //input agregar ciudad
    let agregarCiudad = document.getElementById("agregarCiudad"); //botón agregar ciudad
    let eliminarCiudades = document.getElementById("eliminarCiudades"); //botón para limpiar localStorage
    let success = document.getElementById("success"); // alerta ciudad agregada con exito
    let danger = document.getElementById("danger"); // alerta error al cargar la ciudad
    let warning = document.getElementById("warning"); // alerta la ciudad ya se encuentra almacenada


    agregarCiudad.onclick = function (e){
        
        ocultarAlerta(); //oculto las alertas

        let newCity = formatearString(nuevaCiudad.value); 
        
        if(validarCiudadEnLocalStorage(newCity)){ //valido que la ciudad no se encuentra almacenada
            
            try{
                addNewCityToLocalStorage(newCity); //agrego la ciudad al localStorage
                mostrar(success); //muestro alerta: ciudad almacenada con exito
            } catch {
                mostrar(danger); //muestro alerta: error al cargar la ciudad
            }

        } else {
            mostrar(warning); //muestro alerta: la ciudad ya se encuentra almacenada
        }
    }

    eliminarCiudades.onclick = function (e) {
        limpiarLocalStorage();
    }

    
}

// Agrego la nueva ciudad al localStorage
function addNewCityToLocalStorage(newCity) {    

    let cities = getCitiesFromLocalStorage();
    cities.push(newCity);
    localStorage.setItem('CITIES', JSON.stringify(cities));
    console.log(cities);
}

// Devuelvo la ciudad ingresada con la primera letra en mayuscula y el resto en minuscula
function formatearString(newCity){
    return newCity.charAt(0).toUpperCase() + newCity.slice(1);
}

//Retorno true si la ciudad ya se encuentra almacenada, de lo contrario false.
function validarCiudadEnLocalStorage(newCity){
    let cities = getCitiesFromLocalStorage();
    if(cities.includes(newCity)){
        return false;
    }
    return true;
}

function limpiarLocalStorage(){
    localStorage.clear();
}

