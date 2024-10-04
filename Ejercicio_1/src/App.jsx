
import './App.css'

function App() {

    //  1) A)

        let array = [1, 10, 6, 8, 15, 2];  // Creamos el array con los números

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
        
        // Mostramos en consola el número más grande y su posición (mayor = 15, posición = 4)
        console.log(`El número más grande es ${mayor} y está en la posición ${pos}`);

    //  1) B)

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
