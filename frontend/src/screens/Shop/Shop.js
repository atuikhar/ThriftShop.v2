import React from 'react'
import { Layout } from 'layout/Layout'
import Product from 'components/Product/Product'
import { Wrapper, WrapperGrid } from './ShopStyles'

import { products } from '../../data'

const Home = () => {
  return (
    <Layout>
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
                id={product.id}
              />
            )
          })}
        </WrapperGrid>
      </Wrapper>
    </Layout>
  )
}

export default Home
