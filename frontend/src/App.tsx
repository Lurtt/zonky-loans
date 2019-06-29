import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle, theme } from './components/settings'
import { Header, Root, Image, Link } from './components/atoms'
import logo from './logo.svg'

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Root>
      <Header>
        <Image src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>
      </Header>
      <GlobalStyle />
    </Root>
  </ThemeProvider>
)

export default App
