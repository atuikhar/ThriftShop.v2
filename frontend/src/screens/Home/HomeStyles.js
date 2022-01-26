import { Container } from '@mui/material'
import styled from 'styled-components'

export const Wrapper = styled(Container)`
  margin-top: 100px;
`

export const WrapperGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 20px;

  @media ${(props) => props.theme.breakpoints.md} {
    display: grid;
    grid-template-columns: 1fr;
  }
`
