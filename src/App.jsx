import { Route, Routes } from 'react-router-dom'
import Login from './screens/Login/Login'
import ProductList from './screens/ProductList/ProductList'
import Registro from './screens/Registro/Registro'
import ProductDetail from './screens/ProductDetail/ProductDetail'

function App() {
  return (
    <div>  
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
