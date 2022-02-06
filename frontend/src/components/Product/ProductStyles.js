import { Card } from '@mui/material'
import styled from 'styled-components'

export const ProductCard = styled(Card)`
  border-radius: 5px;
  border: 2px solid #cbced4;
  background: #cbced4;
`

export const Image = styled.img`
  height: 100%;
  width: 100%;
`

export const Title = styled.h4`
  font-family: Poppins;
  text-align: center;
  color: #41295a;
  font-size: 13px;

  @media screen and (max-width: 320px) {
    font-size: 10px;
  }
`
export const Text = styled.h5`
  font-family: Poppins;
  color: #cbced4;
  text-align: center;
  padding: 2px;
  font-size: 10px;

  @media screen and (max-width: 320px) {
    font-size: 5px;
  }
`
export const Text1 = styled.h6`
  font-family: Poppins;
  color: #41295a;
  text-align: center;
  padding: 2px;

  @media screen and (max-width: 320px) {
    font-size: 7px;
  }
`

export const Button = styled.button`
  background: #41295a;
  width: 30%;
  border: none;
  border-radius: 3px;

  height: 20px;

  @media screen and (max-width: 320px) {
    height: 15px;
    border-radius: 2px;
    width: 30%;
  }
`
