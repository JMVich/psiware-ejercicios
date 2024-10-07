import React, { useState } from 'react';
import axios from 'axios';

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
            const response = await axios.post('http://localhost:4000/api/shelves/add', newShelf);
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
        <div>
            <h2>Agregar estantería</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>ID:</label>
                    <input
                        type="number"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Ubicación:</label>
                    <input
                        type="string"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Ancho:</label>
                    <input
                        type="number"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Altura:</label>
                    <input
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Profundidad:</label>
                    <input
                        type="number"
                        value={depth}
                        onChange={(e) => setDepth(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Capacidad máxima:</label>
                    <input
                        type="number"
                        value={maxCapacity}
                        onChange={(e) => setMaxCapacity(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Agregar estantería</button>
            </form>
        </div>
    );
};

export default AddShelf;
