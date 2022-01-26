import styled from 'styled-components'
import Carousel from 'react-material-ui-carousel'

import { Container, Grid, ListItem } from '@mui/material'

export const Wrapper = styled(Container)`
  margin-top: 100px;
  text-align: center;
`
export const Wrap = styled.div``
export const Wrap2 = styled.div``

export const GridContainer = styled(Grid)``

export const CarouselContainer = styled(Carousel)`
  height: 100%;
  width: 100%;
`

export const ImageWrapper = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  border-radius: 20px;
`
export const Img = styled.img`
  height: 40px;
  width: 40px;
`
export const Text = styled.h1`
  font-weight: bold;
  color: #cbced4;
  margin: 0;
  padding: 0;
`
export const Title = styled.h1`
  font-weight: bold;
  color: #cbced4;
  margin: 0;
  padding: 0;
`

export const Description = styled.h3`
  color: #cbced4;
  text-align: center;
  margin: 0;
  padding: 0;
`
export const ListItemText = styled(ListItem)`
  display: flex;
  justify-content: center;
`
