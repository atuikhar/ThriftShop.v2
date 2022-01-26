import React, { useState } from 'react'
import { List } from '@mui/material'
import {
  Wrapper,
  CarouselContainer,
  ImageWrapper,
  GridContainer,
  Wrap,
  Wrap2,
  Img,
  Text,
  Title,
  Description,
  ListItemText,
} from './CarouselStyles'

import { products } from '../../data'

const Carousel = () => {
  const [index, setIndex] = useState(0)

  const handleChange = (cur, prev) => {
    setIndex(cur)
  }

  return (
    <Wrapper>
      <GridContainer container sx={{ m: 0 }}>
        <GridContainer item xs={12} sm={12} md={12} lg={8}>
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
              <Wrap key={index}>
                <ImageWrapper src={product.image} />
              </Wrap>
            ))}
          </CarouselContainer>
        </GridContainer>
        <GridContainer item xs={12} sm={12} md={12} lg={4}>
          <Wrap>
            <CarouselContainer
              index={index}
              onChange={handleChange}
              interval={4000}
              animation="fade"
              indicators={false}
              stopAutoPlayOnHover
              swipe={true}
              fullHeightHover={false}
              navButtonsAlwaysVisible={false}
            >
              {products.map((product, index) => (
                <Wrap2 key={index}>
                  <List
                    sx={{
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <ListItemText>
                      <Title>{product.name} </Title>
                    </ListItemText>
                    <ListItemText>
                      <Img src="/images/Color.png" />
                      <Text>{`${product.colorWay[0]} `}</Text>
                      <Text>{` -${product.colorWay[1]}`} </Text>
                      <Text>{`-${product.colorWay[2]} `} </Text>
                    </ListItemText>
                    <Description>(Sizes)</Description>
                    <ListItemText>
                      <Text>{`${product.sizes[0]} `}</Text>
                      <Text>{` -${product.sizes[1]}`} </Text>
                      <Text>{`-${product.sizes[2]} `} </Text>
                    </ListItemText>
                    <ListItemText>
                      <Description>{product.description}</Description>
                    </ListItemText>
                    <ListItemText>
                      <Text>InStock : {product.countInStock}</Text>
                    </ListItemText>
                    <ListItemText>
                      <Text>Price : Rs. {product.price}</Text>
                    </ListItemText>
                  </List>
                </Wrap2>
              ))}
            </CarouselContainer>
          </Wrap>
        </GridContainer>
      </GridContainer>
    </Wrapper>
  )
}
export default Carousel
