import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'

import './i18n'
import * as serviceWorker from './serviceWorker'
import App from './App'
import { createClient } from './client'

const client = createClient()

const Root = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

ReactDOM.render(<Root />, document.getElementById('root'))

serviceWorker.unregister()
