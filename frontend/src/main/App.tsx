import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from '@main/routes/Router'

import { defaultTheme } from '@presentation/styles/themes/default'
import { GlobalStyle } from '@presentation/styles/global'

import "@fontsource/archivo";
import "@fontsource/poppins";
import '@fontsource/audiowide'

function App (): JSX.Element {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
       <Router />
      </BrowserRouter>
    <GlobalStyle />
  </ThemeProvider>
  )
}

export default App
