import React, { useState } from 'react'
import {
  Wrapper,
  CarouselContainer,
  ImageWrapper,
  GridContainer,
} from './CarouselStyles'

import { products } from '../../data'

const Carousel = () => {
  const [index, setIndex] = useState(0)

  const handleChange = (cur, prev) => {
    setIndex(cur)
  }

  return (
    <Wrapper>
      <GridContainer container>
        <GridContainer item xs={12} sm={12} md={12} lg={12}>
          <CarouselContainer
            index={index}
            onChange={handleChange}
            interval={4000}
            animation="fade"
            indicators={false}
            stopAutoPlayOnHover
            swipe={true}
            fullHeightHover={false}
            navButtonsAlwaysVisible
          >
            {products.map((product, index) => (
              <Wrapper key={index}>
                <ImageWrapper src={product.image} />
              </Wrapper>
            ))}
          </CarouselContainer>
        </GridContainer>
      </GridContainer>
    </Wrapper>
  )
}
export default Carousel
