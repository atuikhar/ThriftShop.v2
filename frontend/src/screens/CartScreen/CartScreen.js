import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import {
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Container,
} from '@mui/material'
import {
  Img,
  ButtonContainer,
  Title,
  GridContainer,
  Wrapper,
  Form,
  Remove,
  Total,
  Subtotal,
} from './CartScreenStyles'
import { addToCart, removeFromCart, updateCart } from 'actions/cartActions'

const CartScreen = () => {
  const [qty, setQty] = useState('')
  const [color, setColor] = useState('')
  const [size, setSize] = useState('')

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)

  const { cartItems } = cart

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    navigate('/login?redirect=shipping')
  }
  return (
    <>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <h1>Cart Empty</h1>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} md={9}>
            <GridContainer>
              {cartItems.map((item) => (
                <Wrapper key={item.product}>
                  <Grid container spacing={1}>
                    <Grid item xs={5}>
                      <Link to={`/product/${item.product}`}>
                        <Img alt={item.name} src={item.image} />
                      </Link>
                    </Grid>
                    <Grid item xs={7} container>
                      <Grid item xs container direction="column">
                        <Grid item lg={12}>
                          <Title>{item.name}</Title>
                          <Form
                            sx={{
                              display: 'flex',
                              justifyContent: 'space-around',
                            }}
                          >
                            <FormControl>
                              <InputLabel>Qty</InputLabel>
                              <Select
                                value={item.qty}
                                label="qty"
                                onChange={(e) => setQty(e.target.value)}
                              >
                                {[...Array(item.countInStock).keys()].map(
                                  (x) => (
                                    <MenuItem key={x + 1} value={x + 1}>
                                      {x + 1}
                                    </MenuItem>
                                  )
                                )}
                              </Select>
                            </FormControl>
                            <FormControl>
                              <InputLabel>Color</InputLabel>
                              <Select
                                labelId="colorWay"
                                id="color"
                                value={item.color}
                                label="ColorWay"
                                onChange={(e) => setColor(e.target.value)}
                              >
                                {item.colorWay.map((x) => (
                                  <MenuItem key={x} value={x}>
                                    {x}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                            <FormControl>
                              <InputLabel>Size</InputLabel>
                              <Select
                                labelId="sizeSelect"
                                id="size"
                                value={item.size}
                                label="Size"
                                onChange={(e) => setSize(e.target.value)}
                              >
                                {item.sizes.map((x) => (
                                  <MenuItem key={x} value={x}>
                                    {x}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </Form>
                          <ButtonContainer item>
                            <Button variant="contained">
                              Rs .{item.price}
                            </Button>
                            <Remove
                              onClick={() =>
                                removeFromCartHandler(item.product)
                              }
                            />
                          </ButtonContainer>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Wrapper>
              ))}
            </GridContainer>
          </Grid>
          <Grid item xs={12} md={3}>
            <Subtotal>
              <Table sx={{ minWidth: 200 }}>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <Total>CartItems :</Total>
                    </TableCell>
                    <TableCell align="right">
                      <Total>
                        ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                      </Total>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <Total>Total :</Total>
                    </TableCell>
                    <TableCell align="right">
                      <Total>
                        Rs.{' '}
                        {cartItems
                          .reduce((acc, item) => acc + item.qty * item.price, 0)
                          .toFixed(2)}
                      </Total>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Subtotal>
            <Container
              sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}
            >
              <Button
                size="large"
                variant="contained"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Checkout
              </Button>
            </Container>
          </Grid>
        </Grid>
      )}
    </>
  )
}

export default CartScreen
