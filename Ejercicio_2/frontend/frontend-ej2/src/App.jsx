import AddBook from './components/AddBook'
import AddShelf from './components/AddShelf'
import ShelfData from './components/ShelfData'
import ShelfGenre from './components/ShelfGenre'

import { ShelfProvider } from './context/ShelfContext'

import './App.css'

function App() {

  return (
    <ShelfProvider>
      <>
        <h1>Sistema para bibliotecas - Psiware - Juan Mateo Viscovich</h1>
        <div className='divBookShelf'>
          <AddBook />
          <AddShelf />
        </div>
        <div className='divInfo'>
          <ShelfData />
          <ShelfGenre />
        </div>

      </>
    </ShelfProvider>
  )
}

export default App
