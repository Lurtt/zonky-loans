import React, { Fragment, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Query, ApolloConsumer } from 'react-apollo'
import { gql } from 'apollo-boost'

import { GlobalStyle, theme } from './components/settings'
import { Header, Root, Image, Select } from './components/atoms'
import logo from './logo.svg'

const RATINGS_QUERY = gql`
  query RATINGS_QUERY {
    ratings
  }
`

const AVERAGE_LOANS_AMOUNT_QUERY = gql`
  query AVERAGE_LOANS_AMOUNT_QUERY($rating: String!) {
    averageLoansAmount(rating: $rating)
  }
`

interface RatingData {
  ratings: string[]
}

const Ratings: React.FC = () => {
  const [averageLoansAmount, setAverageLoansAmount] = useState(0)
  const [selectedRating, setSelectedRating] = useState('')

  const calculateAmount = (client: any) => async (rating: string) => {
    const { data } = await client.query({
      query: AVERAGE_LOANS_AMOUNT_QUERY,
      variables: { rating },
    })
    setSelectedRating(rating)
    setAverageLoansAmount(data.averageLoansAmount)
  }

  return (
    <Query<RatingData> query={RATINGS_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :(</p>

        const { ratings }: any = data
        return (
          <Fragment>
            <ApolloConsumer>
              {client => (
                <Select
                  label="rating"
                  values={ratings}
                  onChange={calculateAmount(client)}
                />
              )}
            </ApolloConsumer>
            {selectedRating ? (
              <p>
                Average loans amount for rating {selectedRating} is{' '}
                {averageLoansAmount.toFixed(2)}
              </p>
            ) : (
              <p>Select rating</p>
            )}
          </Fragment>
        )
      }}
    </Query>
  )
}

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Root>
      <Header>
        <Image src={logo} className="App-logo" alt="logo" />
        <Ratings />
      </Header>
      <GlobalStyle />
    </Root>
  </ThemeProvider>
)

export default App
