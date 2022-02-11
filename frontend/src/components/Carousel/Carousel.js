import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Wrapper,
  CarouselContainer,
  ImageWrapper,
  Wrap,
} from './CarouselStyles'

import { listProducts } from 'actions/productActions'

const Carousel = () => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)

  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <Wrapper>
      <CarouselContainer
        infiniteLoop={true}
        showArrows={false}
        showStatus={false}
        stopOnHover={true}
        showIndicators={false}
        showThumbs={false}
      >
        {products.map((product, index) => (
          <Wrap key={index}>
            <ImageWrapper src={product.image} />
          </Wrap>
        ))}
      </CarouselContainer>
    </Wrapper>
  )
}
export default Carousel
