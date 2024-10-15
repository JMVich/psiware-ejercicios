import React, {useContext} from 'react';
import { ShelfContext } from '../context/ShelfContext';
import axios from 'axios';
import '../styles/BookShelf.css'

const ShelfGenre = () => {

    const {
        selectedShelf,
        genreBooks, 
        setGenreBooks,
        setError,
        genre, setGenre
    } = useContext(ShelfContext);

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
        </>
    )
}

export default ShelfGenre