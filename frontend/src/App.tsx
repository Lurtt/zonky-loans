import React, { Fragment, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Query, ApolloConsumer } from 'react-apollo'
import { gql } from 'apollo-boost'
import { v4 } from 'uuid'

import { GlobalStyle, theme } from './components/settings'
import { Card, Grid, Button, Title } from './components/atoms'
import { Root } from './components/pages'

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

  const calculateAmount = (client: any) => async (event: any) => {
    const rating = event.target.value
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
                <Fragment>
                  <Title size="1.5rem">Choose rating</Title>
                  <Grid
                    padding="2rem 0"
                    templateColumns="repeat(auto-fit, minmax(5.5rem, 1fr))"
                    gap="1.5rem"
                  >
                    {ratings.map((rating: string) => (
                      <Grid as={Card} key={v4()} padding="0.5rem">
                        <Button
                          padding="0"
                          disabled={loading}
                          type="button"
                          value={rating}
                          onClick={calculateAmount(client)}
                          data-testid="btn-rating"
                        >
                          {rating}
                        </Button>
                      </Grid>
                    ))}
                  </Grid>
                </Fragment>
              )}
            </ApolloConsumer>
            {selectedRating && (
              <Title align="center" data-testid="total-average-amount">
                {averageLoansAmount.toFixed(2)}
              </Title>
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
      <Ratings />
      <GlobalStyle />
    </Root>
  </ThemeProvider>
)

export default App
