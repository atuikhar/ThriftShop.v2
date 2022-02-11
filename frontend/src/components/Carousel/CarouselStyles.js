import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

import { Container } from '@mui/material'

export const Wrapper = styled(Container)`
  margin-top: 100px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 320px) {
    margin-top: 10px;
  }
`
export const Wrap = styled.div``

export const CarouselContainer = styled(Carousel)`
  width: 100%;
  height: 100%;
`

export const ImageWrapper = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  border-radius: 20px;
`
