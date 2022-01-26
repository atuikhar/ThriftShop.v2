// import { Routes, Route } from 'react-router-dom'
import { Layout } from 'layout/Layout'
import Carousel from 'components/Carousel/Carousel'
import Home from 'screens/Home/Home'

const App = () => {
  return (
    <>
      <Layout>
        <Carousel />
        <Home />
      </Layout>
    </>
  )
}

export default App
