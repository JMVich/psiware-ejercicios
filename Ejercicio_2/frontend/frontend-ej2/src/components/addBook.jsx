import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
    const [isbn, setIsbn] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newBook = { isbn, title, author, genre, price };
        try {
            await axios.post('http://localhost:4000/api/books/add', newBook);
            alert('Libro agregado con éxito');
        } catch (error) {
            console.error('Error al agregar el libro', error);
        }
    };

    return (
        <>
            <h2>Agregar nuevo libro</h2>
            <form onSubmit={handleSubmit}>
                <input type="number" placeholder="ISBN" value={isbn} onChange={(e) => setIsbn(e.target.value)} />
                <input type="text" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" placeholder="Autor" value={author} onChange={(e) => setAuthor(e.target.value)} />
                <input type="text" placeholder="Género" value={genre} onChange={(e) => setGenre(e.target.value)} />
                <input type="number" placeholder="Precio" value={price} onChange={(e) => setPrice(e.target.value)} />
                <button type="submit">Agregar Libro</button>
            </form>
        </>
    );
};

export default AddBook;
