import React, { useState } from 'react';
import axios from 'axios';

const AddShelf = () => {
    const [name, setName] = useState('');
    const [capacity, setCapacity] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación de datos
        if (!name || !capacity) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        const newShelf = {
            name,
            capacity: parseFloat(capacity)
        };

        try {
            // Petición POST para agregar una nueva estantería
            const response = await axios.post('http://localhost:4000/api/shelves/add', newShelf);
            console.log('Estantería agregada:', response.data);
            alert('Estantería agregada con éxito');
            setName('');  // Limpiar los campos después de enviar el formulario
            setCapacity('');
        } catch (error) {
            console.error('Error al agregar la estantería:', error);
            alert('Error al agregar la estantería');
        }
    };

    return (
        <div>
            <h2>Agregar nueva estantería</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre de la estantería:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Capacidad:</label>
                    <input
                        type="number"
                        value={capacity}
                        onChange={(e) => setCapacity(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Agregar estantería</button>
            </form>
        </div>
    );
};

export default AddShelf;
