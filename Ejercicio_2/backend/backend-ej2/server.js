const express = require('express');  // Lo usamos para crear y configurar el servidor web
const mongoose = require('mongoose');  // Lo usamos para la conexión a la base de datos
const cors = require('cors');  // Nos permite tener solicitudes de diferentes dominios
const bookRoutes = require('./routes/BookRoutes');
const shelfRoutes = require('./routes/ShelfRoutes');
require('dotenv').config();  // Cargamos las variables de entorno desde .env

const app = express();  

app.use(express.json());  // Para que Express acepte formato JSON
app.use(cors());  // Permitimos CORS en todas las rutas

// Conexión a MongoDB usando la variable de entorno MONGO_URI
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI)
    .then(() => console.log('Conexión exitosa a MongoDB'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));

// Rutas de la app
app.use('/api/books', bookRoutes);  // Rutas para los libros
app.use('/api/shelves', shelfRoutes); // Rutas para las estanterías

// Inicialización del servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
