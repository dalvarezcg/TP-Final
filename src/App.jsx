import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './screens/Login/Login'
import ProductList from './screens/ProductList/ProductList'
import ProductDetail from './screens/ProductDetail/ProductDetail'
import Registro from './screens/Registro/Registro'

function App() {
  //const [esAdmin, setEsAdmin] = useState()
  return (
    <div>  
      {/*<button onClick={() => setEsAdmin(true)}>Soy admin</button>   
      <h1>El cliente es: {esAdmin ? 'admin' : 'no admin'}</h1>*/}

      <Routes>
        <Route path='' element={<Registro/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/productos' element={<ProductList/>}/>
        <Route path='/producto-detalle/:id' element={<ProductDetail/>}/>
      </Routes>
    </div>
  )
}

export default App
