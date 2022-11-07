//Calcular el precio de las propiedades, puclicados en dolares blue y llevarlo a pesos 

function convertir() {
    let valores = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    let pesos = 280;
    if (valores > 1 ){
        resultado = valores * pesos;
        alert("El precio en Pesos es de: $" + resultado);
    }
    else{
        alert("Ingrese una opcion valida")
    }
}



//Buscador por precio exacto

 const terrenos = [
 {nombre: "terreno1", direccion: "av. soarez 135",  precio: 20000},
 {nombre: "terreno2", direccion: "av. soarez 140",  precio: 22000},
 {nombre: "terreno3", direccion: "av. soarez 145", precio: 25000},
 {nombre: "terreno4", direccion: "Paso 574", precio: 15000},
 {nombre: "terreno5", direccion: "laborde 334", precio: 22000},
 {nombre: "terreno6", direccion: "urquiza 169", precio: 18000},
 {nombre: "terreno7", direccion: "mathus 222", precio: 17000},
 {nombre: "terreno8", direccion: "mitre 545", precio: 20000},
 {nombre: "terreno9", direccion: "villarino 90", precio: 12000},
 {nombre: "terreno10", direccion: "balcarce 430", precio: 30000},

 ]

 let x = parseInt(prompt("ingrese valor del terreno que busca"))
 if (x === 22000 || x === 18000 || x === 17000 || x === 12000 || x === 30000 || x === 20000){
     const precio = terrenos.filter((terreno) => terreno.precio === x)
     console.log(precio)
    
 } else{
     alert("el valor ingresado no coincide con los precios disponibles")
 }
   


 