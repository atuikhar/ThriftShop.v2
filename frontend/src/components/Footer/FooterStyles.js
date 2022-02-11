import styled from 'styled-components'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import NavigationIcon from '@mui/icons-material/Navigation'

export const Div = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  @media screen and (max-width: 320px) {
    padding-top: 20px;
    height: 100%;
  }
`
export const FooterWrapper = styled.div`
  padding-top: 20px;

  display: flex;
  justify-content: space-between;
  align-items: end;

  @media screen and (max-width: 920px) {
    display: block;
  }
`

export const Navs = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 920px) {
    justify-content: center;
  }
  @media screen and (max-width: 320px) {
    padding-top: 10px;
  }
`

export const Text = styled.h4`
  letter-spacing: 1px;
  color: #bebebe;

  margin: 10px;
  cursor: pointer;
  &:hover {
    color: #e0012f;
  }
  @media screen and (max-width: 768px) {
    margin: 5px;
    font-size: 15px;
  }

  @media screen and (max-width: 640px) {
    margin: 5px;
  }
  @media screen and (max-width: 320px) {
    font-size: 14px;
    padding-top: 10px;
  }
`

export const Facebook = styled(FacebookIcon)`
  cursor: pointer;
  color: #bebebe;

  margin: 10px;
  font-size: 30px;
  &:hover {
    color: #e0012f;
  }
`

export const Twitter = styled(TwitterIcon)`
  cursor: pointer;
  margin: 10px;
  color: #bebebe;

  font-size: 30px;
  &:hover {
    color: #e0012f;
  }
`

export const LinkedIn = styled(LinkedInIcon)`
  cursor: pointer;
  color: #bebebe;

  margin: 10px;
  font-size: 30px;
  &:hover {
    color: #e0012f;
  }
`

export const GoTop = styled(NavigationIcon)`
  cursor: pointer;
  color: #bebebe;

  &:hover {
    color: #e0012f;
  }

  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 320px) {
    padding-top: 0px;
  }
`
