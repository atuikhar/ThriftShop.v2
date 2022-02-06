import React from 'react'
import Product from 'components/Product/Product'
import { Wrapper, WrapperGrid } from './HomeStyles'

import { products } from '../../data'

const Home = () => {
  return (
    <Wrapper>
      <WrapperGrid>
        {products.map((product, index) => {
          return (
            <Product
              key={index}
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
