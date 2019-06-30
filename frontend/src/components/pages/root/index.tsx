import React, { useState } from 'react'

import { Grid, Title } from '../../atoms'
import { Header, Footer } from '../../molecules'
import { Ratings } from '../../organisms'
import { Page } from '../../templates'

export const Root: React.FC = () => {
  const [averageLoansAmount, setAverageLoansAmount] = useState(0)
  const [selectedRating, setSelectedRating] = useState('')

  return (
    <Page>
      <Header />
      <Grid as="main" alignItems="start" templateRows="max-content max-content">
        <Ratings
          setSelectedRating={setSelectedRating}
          setAverageLoansAmount={setAverageLoansAmount}
        />
        {selectedRating && (
          <Title align="center" data-testid="total-average-amount">
            {averageLoansAmount.toFixed(2)}
          </Title>
        )}
      </Grid>
      <Footer />
    </Page>
  )
}
