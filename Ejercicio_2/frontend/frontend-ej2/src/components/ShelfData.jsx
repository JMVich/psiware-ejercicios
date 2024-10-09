import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShelfSelector = () => {
  const [shelves, setShelves] = useState([]);
  const [selectedShelf, setSelectedShelf] = useState(null);
  const [fillData, setFillData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sortedBooks, setSortedBooks] = useState([]);

  // Cargar las estanterías desde el backend
  useEffect(() => {
    const fetchShelves = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/shelves');
        setShelves(response.data);
      } catch (error) {
        setError('Error al cargar las estanterías');
      }
    };

    fetchShelves();
  }, []);

  // Función para manejar la selección de estantería
  const handleShelfSelect = async (shelfId) => {
    setSelectedShelf(shelfId);
    setLoading(true);
    setFillData(null);  // Reseteamos los datos de llenado previos
    setSortedBooks([]);  // Reseteamos la lista de libros

    try {
      // Obtener los datos de llenado de la estantería
      const fillResponse = await axios.get(`http://localhost:4000/api/shelves/${shelfId}/fill-percentage`);
      setFillData(fillResponse.data);  // Guardamos los datos de llenado

      // Obtener los libros ordenados alfabéticamente
      const booksResponse = await axios.get(`http://localhost:4000/api/shelves/${shelfId}/books-sorted`);
      setSortedBooks(booksResponse.data.books);  // Guardamos los libros en sortedBooks
    } catch (error) {
      setError('Error al obtener los datos de la estantería o libros');
    }

    setLoading(false);
  };

  return (
    <>
      <div>
        <h2>SELECCIONÁ UNA ESTANTERÍA</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <select onChange={(e) => handleShelfSelect(e.target.value)} value={selectedShelf || ''}>
          <option value="" disabled>Selecciona una estantería</option>
          {shelves.map((shelf) => (
            <option key={shelf._id} value={shelf._id}>
              {shelf.location}
            </option>
          ))}
        </select>

        {loading && <p>Cargando datos de llenado...</p>}

        {fillData && (
          <div>
            <p>Ubicación: {fillData.location}</p>
            <p>Cantidad de libros: {fillData.bookCount}</p>
            <p>Valor total de los libros: ${fillData.totalValue}</p>
            <p>Capacidad máxima: {fillData.maxCapacity}</p>
            <p>Porcentaje de llenado: {fillData.fillPercentage}</p>

            {fillData.mostExpensiveBook && (
              <div>
                <h3>Libro más caro:</h3>
                <p>Nombre: {fillData.mostExpensiveBook.name}</p>
                <p>Autor: {fillData.mostExpensiveBook.author}</p>
                <p>Precio: ${fillData.mostExpensiveBook.price}</p>
              </div>
            )}
          </div>
        )}

        <div>
          <h3>Libros ordenados alfabéticamente:</h3>
          {sortedBooks.length > 0 ? (
            <ul>
              {sortedBooks.map((book) => (
                <li key={book._id}>{book.name} - {book.author}</li>
              ))}
            </ul>
          ) : (
            <p>No hay libros para mostrar.</p>
          )}
        </div>

      </div>
    </>

  );
};

export default ShelfSelector;
