import React, { Fragment } from 'react'
import { configure, addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from 'react-apollo'

import '../src/i18n'
import { createClient } from '../src/client'
import { theme, GlobalStyle } from '../src/components/settings'

const client = createClient()

addDecorator((storyFn: any) => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <Fragment>
        {storyFn()}
        <GlobalStyle />
      </Fragment>
    </ThemeProvider>
  </ApolloProvider>
))

const req = require.context('../src', true, /stories\.tsx$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
