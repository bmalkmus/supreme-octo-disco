import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { AppTheme } from '../CSS'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends AppTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
  overflow-x: hidden;

  position: relative
    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle