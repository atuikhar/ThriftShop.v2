import { ThemeProvider } from 'styled-components'

import GlobalTheme from './GlobalTheme'
import GlobalStyles from './GlobalStyles'

const Theme = ({ children }) => (
  <ThemeProvider theme={GlobalTheme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
)

export default Theme
