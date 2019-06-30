import React, { Fragment } from 'react'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle, theme } from './components/settings'
import { Root } from './components/pages'
import { createClient } from './client'

const client = createClient()

export const App: React.FC = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <Fragment>
        <Root />
        <GlobalStyle />
      </Fragment>
    </ThemeProvider>
  </ApolloProvider>
)
