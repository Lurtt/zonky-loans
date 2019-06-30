import React, { Fragment } from 'react'
import { PoseGroup } from 'react-pose'
import { Query, ApolloConsumer } from 'react-apollo'
import { gql } from 'apollo-boost'
import { v4 } from 'uuid'
import { useTranslation } from 'react-i18next'

import { Card, PosedGrid, Button, Title } from '../../atoms'

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
interface RatingsProps {
  setAverageLoansAmount: any
  setSelectedRating: any
}

interface RatingData {
  ratings: string[]
}

export const Ratings: React.FC<RatingsProps> = ({
  setAverageLoansAmount,
  setSelectedRating,
}) => {
  const { t } = useTranslation()

  const calculateAmount = (client: any) => async (event: any) => {
    event.preventDefault()
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
        if (loading) return <p>{t('Loading')}</p>
        if (error) return <p>{t('Error')}</p>

        const { ratings }: any = data
        return (
          <ApolloConsumer>
            {client => (
              <Fragment>
                <Title size="1.5rem">{t('RatingTitle')}</Title>
                <PoseGroup animateOnMount>
                  <PosedGrid
                    key={v4()}
                    padding="2rem 0"
                    templateColumns="repeat(auto-fit, minmax(5.5rem, 1fr))"
                    gap="1.5rem"
                    pose={!loading ? 'enter' : 'exit'}
                  >
                    {ratings.map((rating: string) => (
                      <PosedGrid as={Card} key={v4()} padding="0.5rem">
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
                      </PosedGrid>
                    ))}
                  </PosedGrid>
                </PoseGroup>
              </Fragment>
            )}
          </ApolloConsumer>
        )
      }}
    </Query>
  )
}
