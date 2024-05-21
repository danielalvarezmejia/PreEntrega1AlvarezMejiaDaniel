import './App.css'
import { NavBar } from './components/Navbar/Navbar'
import ItemListContainer from './components/containers/itemListContainer/itemListContainer'

function App() {

  return (
    <div>
      <NavBar></NavBar>
      <ItemListContainer greeting='hola' />
    </div>
  )
}

export default App
