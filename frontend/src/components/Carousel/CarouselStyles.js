import styled from 'styled-components'
import Carousel from 'react-material-ui-carousel'

import { Container, Grid } from '@mui/material'

export const Wrapper = styled(Container)`
  margin-top: 100px;
  text-align: center;
`

export const GridContainer = styled(Grid)``

export const CarouselContainer = styled(Carousel)``

export const ImageWrapper = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  border-radius: 20px;
`
