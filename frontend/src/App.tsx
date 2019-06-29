import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

import { GlobalStyle, theme } from './components/settings'
import { Header, Root, Image, Link, Select } from './components/atoms'
import logo from './logo.svg'

const RATINGS_QUERY = gql`
  query RATINGS_QUERY {
    ratings
  }
`

interface RatingData {
  ratings: string[]
}

const Ratings: React.FC = () => (
  <Query<RatingData> query={RATINGS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>

      const { ratings }: any = data
      return (
        <Fragment>
          <Select values={ratings} onChange={val => val} />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        </Fragment>
      )
    }}
  </Query>
)

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Root>
      <Header>
        <Image src={logo} className="App-logo" alt="logo" />
        <Ratings />
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
