import { useEffect, useState } from 'react';

const BooksByShelf = ({ selectedShelfId }) => {
    const [sortedBooks, setSortedBooks] = useState([]);

    // Este es el bloque de useEffect que hace la llamada a la API
    useEffect(() => {
        if (selectedShelfId) {
            fetch(`http://localhost:4000/api/shelves/${selectedShelfId}/books-sorted`)
                .then(response => response.json())
                .then(data => {
                    console.log("Libros ordenados:", data.books); // Imprimir los libros
                    setSortedBooks(data.books);
                })
                .catch(error => console.error('Error:', error));
        }
    }, [selectedShelfId]);


    return (
        <div>
            <h3>Libros ordenados alfabéticamente:</h3>
            {sortedBooks.length > 0 ? (
                <ul>
                    {sortedBooks.map((book) => (
                        <li key={book._id}>{book.title} - {book.author}</li>
                    ))}
                </ul>
            ) : (
                <p>No hay libros para mostrar.</p>
            )}
        </div>
    );
};

export default BooksByShelf;
