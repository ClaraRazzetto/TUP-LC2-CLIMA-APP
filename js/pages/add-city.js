function init(){

    let nuevaCiudad = document.getElementById("InsertarCiudad"); //input agregar ciudad
    let agregarCiudad = document.getElementById("agregarCiudad"); //botón agregar ciudad
    let eliminarCiudades = document.getElementById("eliminarCiudades"); //botón para limpiar localStorage
    let success = document.getElementById("success"); // alerta ciudad agregada con exito
    let danger = document.getElementById("danger"); // alerta error al cargar la ciudad
    let warning = document.getElementById("warning"); // alerta la ciudad ya se encuentra almacenada


    agregarCiudad.onclick = function (e) {

        ocultarAlerta(); //oculto las alertas

        let newCity = nuevaCiudad.value;
        
        //valido que se haya completado el campo 
        if (newCity != ""){
        
            newCity = formatearString(newCity); 

            //Verifico si la ciudad se encuentra almacenada
            if(validarCiudadEnLocalStorage(newCity)){ 
                
                // llamo a la API para verificar que la ciudad ingresada retorna una respuesta
                consultarAPI(newCity).then(() => {
                    try{
                        addNewCityToLocalStorage(newCity); //agrego la ciudad al localStorage
                        mostrar(success); //muestro alerta: ciudad almacenada con exito
                    } catch {
                        mostrar(danger); //muestro alerta: error al cargar la ciudad
                        danger.innerHTML = " Error: La ciudad ingresada no se pudo ser almacenada"
                    }  
                }).catch(() => {
                    mostrar(danger); 
                    danger.innerHTML= "Error: La ciudad ingresada no se encontró en los registros del clima";
                }).finally(()=> {
                    document.getElementById("loader").style.display = "none";
                });

            } else {
                mostrar(warning); //muestro alerta: la ciudad ya se encuentra almacenada
                warning.innerHTML = "La ciudad ingresada ya se encuentra almacenada";
            }
        } else {
            mostrar(warning); 
            warning.innerHTML = "Debe completar el campo ciudad";
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

