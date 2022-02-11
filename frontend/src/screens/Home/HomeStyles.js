import styled from 'styled-components'
import { Container } from '@mui/material'

export const Div = styled(Container)`
  text-align: center;
  padding-top: 100px;
  padding-bottom: 100px;
  @media screen and (max-width: 320px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`

export const Button = styled.button`
  border: none;
  cursor: pointer;
  background-color: #0093e9;
  transition: all 0.3s ease;
  border-radius: 5px;
  width: 400px;

  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
    background: #000;
  }
  @media screen and (max-width: 680px) {
    width: 300px;
  }
  @media screen and (max-width: 360px) {
    width: 250px;
  }
  @media screen and (max-width: 320px) {
    width: 60%;
    border-radius: 3px;
  }
`

export const Text = styled.h1`
  color: #bebebe;
  font-family: ${(props) => props.theme.fonts.title};
  text-align: center;

  @media screen and (max-width: 760px) {
    font-size: 25px;
  }
  @media screen and (max-width: 640px) {
    font-size: 20px;
  }
  @media screen and (max-width: 320px) {
    font-size: 10px;
  }
`
