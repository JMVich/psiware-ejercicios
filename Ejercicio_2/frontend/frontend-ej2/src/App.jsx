import AddBook from './components/addBook'
import AddShelf from './components/addShelf'
import ShelfData from './components/ShelfData'
import './App.css'

function App() {

  return (
    <>
      <h1>Sistema para bibliotecas - Psiware</h1>
      <AddBook />
      <AddShelf />

      <div className='divInfo'>
        <ShelfData />
      </div>

    </>
  )
}

export default App
