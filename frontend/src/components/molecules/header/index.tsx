import React from 'react'

import { Grid, Title, colors } from '../../atoms'

export const Header: React.FC = () => (
  <Grid as="header" padding="1rem 0" justifyContent="start" alignItems="center">
    <Title color={colors.cyan}>Zonky Average loan calulator</Title>
  </Grid>
)
