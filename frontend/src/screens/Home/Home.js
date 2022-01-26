import React from 'react'
import Product from 'components/Products/Product'
import { Wrapper, WrapperGrid } from './HomeStyles'

import { products } from '../../data'

const Home = () => {
  return (
    <Wrapper>
      <WrapperGrid>
        {products.map((product, index) => {
          return (
            <Product
              index={index}
              image={product.image}
              name={product.name}
              price={product.price}
              rating={product.rating}
              reviews={product.numReviews}
            />
          )
        })}
      </WrapperGrid>
    </Wrapper>
  )
}

export default Home
