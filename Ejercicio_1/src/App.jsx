
import './App.css'

function App() {

    let array = [1, 10, 6, 8, 15, 2];  // Creamos el array con los números

    //  1) A)

            /* 
            let mayor = 0;  // Creamos la variable auxiliar "mayor" (número más grande)
            let pos = 0;  // Creamos la variable auxiliar "pos" (posición del número más grande)
    
            // Recorremos el array llamado "array"
            for (let i = 0; i < array.length; i++) {
    
                // Calculamos si "mayor" es menor que el número actual
                if (mayor < array[i]) {
                    mayor = array[i];  // Guardamos el número más grande
                    pos = i;  // Guardamos la posición del número más grande
                }
            }
            
            // Mostramos en consola el número más grande y la posición (mayor = 15, posición = 4)
            console.log(`Número mayor: ${mayor} / Posición: ${pos}`); 
            */

    //  1) B)

            /*             
            const mayor = Math.max(...array);  // Buscamos el número más grande

            const pos = array.indexOf(mayor);  // Buscamos la posición del número más grande

            // Mostramos en consola el número más grande y la posición (mayor = 15, posición = 4)
            console.log(`Número mayor: ${mayor} / Posición: ${pos}`);  
            */

    //  2) 

            /*             
            const sortArray = [...array].sort((a, b) => a - b);  // Ordenamos los números con .sort (el método sólo no funciona, así que agregamos a - b)

            // Mostramos en consola el array ordenado ([1, 2, 6, 8, 10, 15])
            console.log(sortArray); 
            */

    //  3)

            /*             
            // Usaremos el operador de módulo (%) o el resto de una división para determinar si es par o impar
            // Al número del array lo dividimos por 2, si el número es par el resto da 0, y si es impar da 1

            for (let i = 0; i < array.length; i++) {
                if (array[i] % 2 === 0) { 
                  console.log(`El número ${array[i]} es par y está en la posición ${i}`);
                }
              } 
            */

    //  4) 
            
            /*             
            // Usamos la función "esPar" para verificar si el número es par (devuelve true si el número es par, y false si no es)
            function esPar(num) {
                return num % 2 === 0;
            }
            
            // Creamos el nuevo arreglo "soloPares", con el método .filter, y la función "esPar"
            let soloPares = array.filter(esPar);
            
            // Mostramos en consola los números pares ([10, 6, 8, 2])
            console.log(soloPares); 
            */

    return (
        <>
            {/* 
                Ejercicio 1: Algoritmos

                Dada la siguiente colección elementos [1,10,6,8,15,2]
                1) Determinar cuál es el número mayor y en qué posición de la colección se encuentra.
                    a) Sin utilizar ninguna función provista por el lenguaje elegido.
                    b) Utilizando al menos una función/método del lenguaje elegido.
                2) Ordenar la lista de números.
                3) Determinar cuáles números son pares y en qué posiciones se encuentran.
                4) Crear un nuevo arreglo con todos los números pares. 
            */}
        </>
    )
}

export default App
