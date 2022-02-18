import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { Rating } from 'components/Rating/Rating'
import {
  Wrapper,
  CardImage,
  Cell,
  Tab,
  WrapperButton,
  Text,
  Title,
  Body,
  RatingContainer,
} from './ProductDetailsStyles'
import {
  Button,
  Grid,
  TableBody,
  TableContainer,
  TableRow,
  FormControl,
  Box,
  MenuItem,
  Select,
  InputLabel,
} from '@mui/material'

import { listProductDetails } from 'actions/productActions'

const ProductDetail = ({ match }) => {
  const params = useParams()
  const navigate = useNavigate()

  const [qty, setQty] = useState('')
  const [size, setSize] = useState('')
  const [color, setColorWay] = useState('')

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)

  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(params.id))
  }, [params, dispatch])

  const addToCart = () => {
    navigate(`/cart/${params.id}?qty=${qty}?colorWay=${color}?size=${size}`)
  }

  return (
    <Wrapper>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <CardImage src={product.image} alt={product.name} />
        </Grid>
        <Grid item xs={8} md={4}>
          <Button variant="contained">
            <Text>&#x20B9;. {product.price}</Text>
          </Button>
          <Title>{product.name}</Title>
          <RatingContainer>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
              color={'#FFE53B'}
            />
          </RatingContainer>
          <Body>{product.description}</Body>
        </Grid>
        <Grid item xs={4} md={2}>
          <TableContainer>
            <Tab>
              <TableBody sx={{ p: 0 }}>
                {product.countInStock > 0 && product.sizes && (
                  <TableRow>
                    <Cell align="right">
                      <Box sx={{ minWidth: 50 }}>
                        <FormControl fullWidth>
                          <InputLabel id="sizeSelect">
                            <Text>Size</Text>
                          </InputLabel>
                          <Select
                            labelId="sizeSelect"
                            id="size"
                            value={size}
                            label="Size"
                            onChange={(e) => setSize(e.target.value)}
                          >
                            {product.sizes.map((x) => (
                              <MenuItem key={x} value={x}>
                                <Text>{x}</Text>
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Box>
                    </Cell>
                  </TableRow>
                )}
                {product.countInStock > 0 && product.colorWay && (
                  <TableRow>
                    <Cell align="right">
                      <Box sx={{ minWidth: 50 }}>
                        <FormControl fullWidth>
                          <InputLabel id="colorWay">
                            <Text>Color</Text>
                          </InputLabel>
                          <Select
                            labelId="colorWay"
                            id="color"
                            value={color}
                            label="ColorWay"
                            onChange={(e) => setColorWay(e.target.value)}
                          >
                            {product.colorWay.map((x) => (
                              <MenuItem key={x} value={x}>
                                <Text>{x}</Text>
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Box>
                    </Cell>
                  </TableRow>
                )}
                {product.countInStock > 0 && (
                  <TableRow>
                    <Cell align="right">
                      <Box sx={{ minWidth: 50 }}>
                        <FormControl fullWidth>
                          <InputLabel id="qtyCount">
                            <Text>Qty</Text>
                          </InputLabel>
                          <Select
                            labelId="qtyCount"
                            id="qtySelect"
                            value={qty}
                            label="qty"
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <MenuItem key={x + 1} value={x + 1}>
                                  <Text>{x + 1}</Text>
                                </MenuItem>
                              )
                            )}
                          </Select>
                        </FormControl>
                      </Box>
                    </Cell>
                  </TableRow>
                )}
              </TableBody>
            </Tab>
          </TableContainer>

          <WrapperButton>
            <Button
              onClick={addToCart}
              variant="contained"
              disabled={product.countInStock === 0}
            >
              <Text>
                {product.countInStock > 0 ? 'Add To Cart' : 'Out Of Stock'}
              </Text>
            </Button>
          </WrapperButton>
        </Grid>
      </Grid>
    </Wrapper>
  )
}

export default ProductDetail
