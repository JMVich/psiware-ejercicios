import AddBook from './components/addBook'
import AddShelf from './components/addShelf'
import ShelfData from './components/ShelfData'
import BooksByShelf from './components/BooksByShelf'
import './App.css'

function App() {

  return (
    <>
      <p>Biblioteca</p>
      <AddBook/>
      <AddShelf/>

      <ShelfData/>

      <BooksByShelf/>
      
    </>
  )
}

export default App
