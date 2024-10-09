import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/BookShelf.css'

const AddBook = () => {
    const [ISBN, setISBN] = useState('');
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [price, setPrice] = useState('');
    const [shelfId, setShelfId] = useState('');
    const [shelves, setShelves] = useState([]);

    // Obtener las estanterías
    useEffect(() => {
        axios.get('http://localhost:4000/api/shelves')
            .then(response => setShelves(response.data))
            .catch(error => console.error('Error al obtener estanterías:', error));
    }, []);

    // Agregar el libro a la BD
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newBook = { ISBN, name, author, genre, price, shelfId };
        try {
            await axios.post('http://localhost:4000/api/books/add', newBook);
            alert('Libro agregado con éxito');

            // Limpiar los campos después de enviar el formulario
            setISBN('');
            setName('');
            setAuthor('');
            setGenre('');
            setPrice('');

        } catch (error) {
            console.error('Error al agregar el libro', error);
        }
    };

    return (
        <>
            <div className='mainDiv'>
                <h2>AGREGAR LIBRO</h2>
                <form onSubmit={handleSubmit}>
                    <input type="number" placeholder="ISBN" value={ISBN} onChange={(e) => setISBN(e.target.value)} />
                    <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder="Autor" value={author} onChange={(e) => setAuthor(e.target.value)} />
                    <input type="text" placeholder="Género" value={genre} onChange={(e) => setGenre(e.target.value)} />
                    <input type="number" placeholder="Precio" value={price} onChange={(e) => setPrice(e.target.value)} />

                    <select value={shelfId} onChange={(e) => setShelfId(e.target.value)} required>
                        <option value="">Seleccioná una estantería</option>
                        {shelves.map(shelf => (
                            <option key={shelf._id} value={shelf._id}>
                                {shelf.location}
                            </option>
                        ))}
                    </select>

                    <div className='divButton'>
                        <button type="submit">Agregar libro</button>
                    </div>

                </form>
            </div>
        </>
    );
};

export default AddBook;

