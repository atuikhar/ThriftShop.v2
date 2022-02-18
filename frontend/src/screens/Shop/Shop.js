import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Product from 'components/Product/Product'
import { Wrapper, WrapperGrid } from './ShopStyles'
import { listProducts } from 'actions/productActions'

const Shop = () => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)

  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
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
