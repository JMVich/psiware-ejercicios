import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/BookShelf.css'

const ShelfSelector = () => {
  const [shelves, setShelves] = useState([]);
  const [selectedShelf, setSelectedShelf] = useState(null);
  const [fillData, setFillData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sortedBooks, setSortedBooks] = useState([]);
  const [genre, setGenre] = useState('');
  const [genreBooks, setGenreBooks] = useState([]);

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
      const response = await axios.get(`http://localhost:4000/api/shelves/${shelfId}/fill-percentage`);
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

  // Función para obtener libros por género
  const handleGenreSelect = async () => {
    if (selectedShelf && genre) {
      try {
        const response = await axios.get(`http://localhost:4000/api/shelves/${selectedShelf}/genre/${genre}`);
        setGenreBooks(response.data.books); // Asignar libros del género al estado
      } catch (error) {
        setError('Error al obtener libros por género');
      }
    }
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
        <h3>Selecciona un género:</h3>
        <input
          className="selectGenre"
          type="text"
          placeholder="Ingresa un género"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <button className="genreButton" onClick={handleGenreSelect}>Buscar libros por género</button>
      </div>

      <div>
        {genreBooks.length > 0 ? (
          <ul>
            {genreBooks.map((book) => (
              <li key={book._id}>{book.name} - {book.author}</li>
            ))}
          </ul>
        ) : (
          <p>No hay libros para mostrar.</p>
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

export default ShelfSelector;
