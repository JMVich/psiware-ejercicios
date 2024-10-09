import AddBook from './components/addBook'
import AddShelf from './components/addShelf'
import ShelfData from './components/ShelfData'
import './App.css'

function App() {

  return (
    <>
      <h1>Sistema para bibliotecas - Psiware - Juan Mateo Viscovich</h1>
      <div className='divBookShelf'>
        <AddBook />
        <AddShelf />
      </div>
      <div className='divInfo'>
        <ShelfData />
      </div>

    </>
  )
}

export default App
