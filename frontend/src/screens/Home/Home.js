import { Link } from 'react-router-dom'
import { Layout } from 'layout/Layout'
import Carousel from 'components/Carousel/Carousel'
import { Div, Button, Text } from './HomeStyles'

const Home = () => {
  return (
    <Layout>
      <Carousel />
      <Div>
        <Link to="/shop">
          <Button>
            <Text>Start Shopping</Text>
          </Button>
        </Link>
      </Div>
    </Layout>
  )
}

export default Home
