import { Link } from 'react-router-dom'
import CopyrightIcon from '@mui/icons-material/Copyright'
import {
  FooterWrapper,
  Text,
  Navs,
  Facebook,
  Twitter,
  LinkedIn,
  GoTop,
  Div,
} from './FooterStyles'

import { Container } from '@mui/material'

export const Footer = () => {
  const handleClick = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
  return (
    <Div>
      <Container>
        <FooterWrapper>
          <Navs>
            <LinkedIn />
            <Twitter />
            <Facebook />
          </Navs>

          <Navs>
            <CopyrightIcon sx={{ color: '#bebebe' }} fontSize="small" />
            <Text>ThriftShop 2022</Text>
          </Navs>
          <Navs>
            <Link
              onClick={() => handleClick()}
              style={{ textDecoration: 'none', color: '#000' }}
              to="/terms"
            >
              <Text>Terms&Conditions</Text>
            </Link>
            <Link
              style={{ textDecoration: 'none', color: '#000' }}
              to="/privacy"
              onClick={() => handleClick()}
            >
              <Text>Privacy</Text>
            </Link>
          </Navs>

          <Navs>
            <GoTop fontSize="large" onClick={() => handleClick()} />
          </Navs>
        </FooterWrapper>
      </Container>
    </Div>
  )
}
