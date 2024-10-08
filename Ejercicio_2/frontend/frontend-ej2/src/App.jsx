import AddBook from './components/addBook'
import AddShelf from './components/addShelf'
import ShelfData from './components/ShelfData'
import BooksByShelf from './components/BooksByShelf'
import './App.css'

function App() {

  return (
    <>
      <h1>Sistema para bibliotecas - Psiware</h1>
      <AddBook />
      <AddShelf />

      <div className='divInfo'>
        <ShelfData />

        <BooksByShelf />
      </div>

    </>
  )
}

export default App
