const [shelfData, setShelfData] = useState(null);

// Función para obtener los datos de la estantería
const fetchShelfData = async (shelfId) => {
    try {
        const response = await fetch(`http://localhost:4000/api/shelves/${shelfId}/data`);
        const data = await response.json();
        setShelfData(data);
    } catch (error) {
        console.error("Error fetching shelf data:", error);
    }
};

// Llamar la función cuando se seleccione una estantería
useEffect(() => {
    if (selectedShelfId) {
        fetchShelfData(selectedShelfId);
    }
}, [selectedShelfId]);

// Mostrar los datos de la estantería, incluyendo el libro más caro
{
    shelfData && (
        <div>
            <p>Ubicación: {shelfData.location}</p>
            <p>Cantidad de libros: {shelfData.bookCount}</p>
            <p>Capacidad máxima: {shelfData.maxCapacity}</p>
            <p>Porcentaje de llenado: {shelfData.fillPercentage}</p>
            <p>Valor total de los libros: ${shelfData.totalValue}</p>
            {shelfData.mostExpensiveBook && (
                <div>
                    <h3>Libro más caro:</h3>
                    <p>Título: {shelfData.mostExpensiveBook.title}</p>
                    <p>Autor: {shelfData.mostExpensiveBook.author}</p>
                    <p>Precio: ${shelfData.mostExpensiveBook.price}</p>
                </div>
            )}
        </div>
    )
}
