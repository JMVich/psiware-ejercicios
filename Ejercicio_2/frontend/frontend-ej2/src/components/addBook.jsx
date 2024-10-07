import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
    const [ISBN, setISBN] = useState('');
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newBook = { ISBN, name, author, genre, price };
        try {
            await axios.post('http://localhost:4000/api/books/add', newBook);
            alert('Libro agregado con éxito');
        } catch (error) {
            console.error('Error al agregar el libro', error);
        }
    };

    return (
        <>
            <h2>Agregar libro</h2>
            <form onSubmit={handleSubmit}>
                <input type="number" placeholder="ISBN" value={ISBN} onChange={(e) => setISBN(e.target.value)} />
                <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Autor" value={author} onChange={(e) => setAuthor(e.target.value)} />
                <input type="text" placeholder="Género" value={genre} onChange={(e) => setGenre(e.target.value)} />
                <input type="number" placeholder="Precio" value={price} onChange={(e) => setPrice(e.target.value)} />
                <button type="submit">Agregar libro</button>
            </form>
        </>
    );
};

export default AddBook;
