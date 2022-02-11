import * as React from 'react'
import CardContent from '@mui/material/CardContent'
import { CardActionArea } from '@mui/material'

import {
  ProductCard,
  Image,
  Title,
  Button,
  Text,
  Text1,
  CardAction,
} from './ProductStyles'
import { Rating } from 'components/Rating/Rating'
import { Link } from 'react-router-dom'

const Product = (props) => {
  const { name, image, price, reviews, rating, id } = props
  return (
    <ProductCard>
      <CardActionArea>
        <Link to={`/product/${id}`}>
          <Image src={image} />
        </Link>
        <CardContent sx={{ p: 0 }}>
          <Title>{name}</Title>
          <Text>
            <Rating value={rating} color="#41295a" />
          </Text>
          <Text1>({reviews} reviews)</Text1>
        </CardContent>
      </CardActionArea>
      <CardAction>
        <Button>
          <Text>&#x20B9; {price}</Text>
        </Button>
      </CardAction>
    </ProductCard>
  )
}
export default Product
