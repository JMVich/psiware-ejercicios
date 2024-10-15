import React, { useState, useContext, useEffect } from 'react';
import { ShelfContext } from '../context/ShelfContext';
import axios from 'axios';
import '../styles/BookShelf.css'

const ShelfData = () => {
  const {
    shelves, setShelves,
    selectedShelf, setSelectedShelf,
    sortedBooks, setSortedBooks,
    setGenreBooks,
    fillData, setFillData,
    loading, setLoading,
    error, setError,
  } = useContext(ShelfContext);

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
    setFillData(null);
    setGenreBooks([]);
    setSortedBooks([]);

    try {
      // Obtener datos de la estantería
      const response = await axios.get(`http://localhost:4000/api/shelves/${shelfId}/shelf-functions`);
      setFillData(response.data); // Guardamos los datos de llenado

      // Obtener todos los libros de la estantería
      const booksResponse = await axios.get(`http://localhost:4000/api/shelves/${shelfId}/books-sorted`);
      // Ordenar libros alfabéticamente
      const sortedBooks = booksResponse.data.books.sort((a, b) => a.name.localeCompare(b.name));
      setSortedBooks(sortedBooks); // Guardar libros ordenados

    } catch (error) {
      setError('Error al obtener datos de la estantería o libros');
    }

    setLoading(false);
  };

  return (
    <>
      <div>
        <h2>SELECCIONÁ UNA ESTANTERÍA</h2>
        {error && <p className='pErrorSeleccionShelf'>{error}</p>}
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
      </div>

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
    </>
  );
};

export default ShelfData;
