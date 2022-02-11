import React from 'react'
import {
  Wrapper,
  CarouselContainer,
  ImageWrapper,
  Wrap,
} from './CarouselStyles'

import { products } from '../../data'

const Carousel = () => {
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
