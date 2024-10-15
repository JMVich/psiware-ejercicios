import React, { createContext, useState } from 'react';

// Creamos el contexto
export const ShelfContext = createContext();

// Creamos el proveedor del contexto
export const ShelfProvider = ({ children }) => {
    const [shelves, setShelves] = useState([]);
    const [selectedShelf, setSelectedShelf] = useState(null);
    const [sortedBooks, setSortedBooks] = useState([]);
    const [genreBooks, setGenreBooks] = useState([]);
    const [fillData, setFillData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [genre, setGenre] = useState('');

    return (
        <ShelfContext.Provider value={{
            shelves,
            setShelves,
            selectedShelf,
            setSelectedShelf,
            sortedBooks,
            setSortedBooks,
            genreBooks,
            setGenreBooks,
            fillData,
            setFillData,
            loading,
            setLoading,
            error,
            setError,
            genre,
            setGenre
        }}>
            {children}
        </ShelfContext.Provider>
    );
};
