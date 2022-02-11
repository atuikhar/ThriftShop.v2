import * as React from 'react'
import { CardActionArea, CardContent } from '@mui/material'
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

const Product = ({ product }) => {
  return (
    <ProductCard>
      <CardActionArea>
        <Link to={`/product/${product._id}`}>
          <Image src={product.image} />
        </Link>
        <CardContent sx={{ p: 0 }}>
          <Title>{product.name}</Title>
          <Text>
            <Rating value={product.rating} color="#41295a" />
          </Text>
          <Text1>({product.reviews} reviews)</Text1>
        </CardContent>
      </CardActionArea>
      <CardAction>
        <Button>
          <Text>&#x20B9; {product.price}</Text>
        </Button>
      </CardAction>
    </ProductCard>
  )
}
export default Product
