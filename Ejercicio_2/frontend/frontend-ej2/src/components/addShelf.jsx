import React, { useState } from 'react';
import axios from 'axios';
import '../styles/BookShelf.css'

const AddShelf = () => {
    const [id, setId] = useState('');
    const [location, setLocation] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [depth, setDepth] = useState('');
    const [maxCapacity, setMaxCapacity] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newShelf = {
            id,
            location,
            width,
            height,
            depth,
            maxCapacity,
        };

        try {
            // Agregar estantería
            await axios.post('http://localhost:4000/api/shelves/add', newShelf);
            alert('Estantería agregada con éxito');
            // Limpiar los campos después de enviar el formulario
            setId('');
            setLocation('');
            setWidth('');
            setHeight('');
            setDepth('');
            setMaxCapacity('');

        } catch (error) {
            console.error('Error al agregar la estantería:', error);
            alert('Error al agregar la estantería');
        }
    };

    return (
        <div className='mainDiv'>
            <h2>AGREGAR ESTANTERÍA</h2>
            <form onSubmit={handleSubmit}>

                <input
                    type="number"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="ID"
                    required
                />

                <input
                    type="string"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Ubicación"
                    required
                />

                <input
                    type="number"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    placeholder='Ancho'
                    required
                />

                <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder='Altura'
                    required
                />

                <input
                    type="number"
                    value={depth}
                    onChange={(e) => setDepth(e.target.value)}
                    placeholder='Profundidad'
                    required
                />

                <input
                    type="number"
                    value={maxCapacity}
                    onChange={(e) => setMaxCapacity(e.target.value)}
                    placeholder='Capacidad máxima'
                    required
                />
                <div className='divButton'>
                    <button type="submit">Agregar estantería</button>
                </div>
            </form>
        </div>
    );
};

export default AddShelf;
