import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Product from 'components/Product/Product'
import { Wrapper, WrapperGrid } from './ShopStyles'

import { productsSelector, fetchProducts } from '../../redux/slices/product'

const Shop = () => {
  const dispatch = useDispatch()

  const { products, loading, hasErrors } = useSelector(productsSelector)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <Wrapper>
      <WrapperGrid>
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </WrapperGrid>
    </Wrapper>
  )
}

export default Shop
