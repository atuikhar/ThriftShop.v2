import { Routes, Route } from 'react-router-dom'
import Home from 'screens/Home/Home'
import Shop from 'screens/Shop/Shop'
import ProductDetail from 'screens/ProductDetails/ProductDetails'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </>
  )
}

export default App
