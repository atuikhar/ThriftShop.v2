import * as React from 'react'
import CardContent from '@mui/material/CardContent'
import { CardActionArea, CardActions } from '@mui/material'

import { ProductCard, Image, Title, Button, Text, Text1 } from './ProductStyles'
import { Rating } from 'components/Rating/Rating'

const Product = (props) => {
  const { name, image, price, reviews, rating } = props
  return (
    <ProductCard>
      <CardActionArea>
        <Image src={image} />
        <CardContent sx={{ p: 0 }}>
          <Title>{name}</Title>
          <Text>
            <Rating value={rating} color="#41295a" />
          </Text>
          <Text1>[{reviews} reviews]</Text1>
        </CardContent>
      </CardActionArea>
      <CardActions
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button>
          <Text>Rs. {price}</Text>
        </Button>
      </CardActions>
    </ProductCard>
  )
}
export default Product
