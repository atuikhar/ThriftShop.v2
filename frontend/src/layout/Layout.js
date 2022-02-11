import Header from 'components/Header/Header'
import { Footer } from 'components/Footer/Footer'
import { LayoutWrapper } from './LayoutStyles'

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <LayoutWrapper>
        <main>{children}</main>
      </LayoutWrapper>
      <Footer />
    </>
  )
}
