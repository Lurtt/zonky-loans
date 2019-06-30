import React from 'react'

import { Grid } from '../../atoms'
import { Header, Footer } from '../../molecules'
import { Page } from '../../templates'

export interface RootProps extends React.ComponentProps<'div'> {}

export const Root: React.FC = ({ children }) => (
  <Page>
    <Header />
    <Grid as="main" alignItems="start" templateRows="max-content max-content">
      {children}
    </Grid>
    <Footer />
  </Page>
)
