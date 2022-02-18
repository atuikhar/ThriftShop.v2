import { Routes, Route } from 'react-router-dom'
import Home from 'screens/Home/Home'
import Shop from 'screens/Shop/Shop'
import ProductDetail from 'screens/ProductDetails/ProductDetails'
import CartScreen from 'screens/CartScreen/CartScreen'
import { Layout } from 'layout/Layout'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart/:id" element={<CartScreen />} />
      </Routes>
    </Layout>
  )
}

export default App
