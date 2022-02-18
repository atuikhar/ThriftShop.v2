import { Link } from 'react-router-dom'
// import Carousel from 'components/Carousel/Carousel'
import { Div, Button, Text } from './HomeStyles'

const Home = () => {
  return (
    <Div>
      <Link to="/shop">
        <Button>
          <Text>Start Shopping</Text>
        </Button>
      </Link>
    </Div>
  )
}

export default Home
